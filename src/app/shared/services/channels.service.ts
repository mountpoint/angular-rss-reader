import { EventEmitter, Injectable } from '@angular/core';
import { Channel } from '../models/channel.model';
import { HttpClient } from '@angular/common/http';
import { Rss2jsonService } from './rss2json.service';
import { Message } from '../models/message.model';
import { HelperService } from './helper.service';

@Injectable()
export class ChannelsService {
  channelsChanged = new EventEmitter<Channel[]>();

  constructor(private http: HttpClient,
              private rss2json: Rss2jsonService,
              private helperService: HelperService) { }

  private loadChannels() {
    return JSON.parse(localStorage.getItem('channels'));
  }

  private saveChannels(channels) {
    localStorage.setItem('channels', JSON.stringify(channels));
  }

  getChannels(): Promise<Channel[]> {
    return new Promise((resolve) => {
      const channels = this.loadChannels();

      resolve(channels);
    });
  }

  getChannel(id: string): Promise<Channel> {
    return new Promise((resolve) => {
      const channels = this.loadChannels();
      let output = null;

      if (channels) {
        output = channels.find(channel => {
          return id === channel.id;
        });
      }

      resolve(output);
    });
  }

  addChannel(channel: Channel): Promise<Channel[]> {
    return new Promise((resolve) => {
      this.parseChannel(channel.url).subscribe((response: any) => {
        if (response.status === 'ok') {
          channel.title = response.feed.title;
          channel.url = response.feed.url;
          channel.description = response.feed.description;
          channel.image = response.feed.image;
          channel.messages = [];

          for (const item of response.items) {
            let enclosure = '';
            if (item.enclosure && Object.keys(item.enclosure).length !== 0) {
              if (item.enclosure.type && item.enclosure.type.indexOf('image') !== -1) {
                enclosure = item.enclosure.link;
              }

              if (item.enclosure.thumbnail) {
                enclosure = item.enclosure.thumbnail;
              }
            }

            const message = new Message(
              this.helperService.generateId(),
              item.title,
              item.link,
              item.description,
              item.pubDate,
              item.author,
              enclosure
            );

            channel.messages.push(message);
          }

          const channels = this.loadChannels() || [];
          channels.push(channel);
          this.saveChannels(channels);

          resolve(channels);
        }
      });
    });
  }

  editChannel(channel: Channel): Promise<Channel[]> {
    return new Promise((resolve) => {
      this.deleteChannel(channel.id).then(data => {
        data['channels'].splice(data['lastDeletedPosition'], 0, channel);

        this.saveChannels(data['channels']);

        resolve(data['channels']);
      });
    });
  }

  deleteChannel(id: string) {
    return new Promise((resolve) => {
      const channels = this.loadChannels();
      const index = channels.findIndex((channel) => {
        return id === channel.id;
      });

      channels.splice(index, 1);
      this.saveChannels(channels);

      resolve({ channels: channels, lastDeletedPosition: index });
    });
  }

  parseChannel(url: string) {
    return this.http.get(
      this.rss2json.getEndpoint(),
      {
        params: {
          rss_url: url,
          api_key: this.rss2json.getApiKey(),
          count: this.rss2json.getCountMessages(),
        }
      }
    );
  }
}
