import { EventEmitter, Injectable } from '@angular/core';
import { Channel } from '../models/channel.model';

@Injectable()
export class ChannelsService {
  channelsChanged = new EventEmitter<Channel[]>();

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
      const channels = this.loadChannels() || [];
      channels.push(channel);
      this.saveChannels(channels);

      resolve(channels);
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
}
