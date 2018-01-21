import { EventEmitter, Injectable } from '@angular/core';
import { Channel } from '../models/channel.model';

@Injectable()
export class ChannelsService {
  channelsChanged = new EventEmitter<Channel[]>();

  private loadChannels() {
    return JSON.parse(localStorage.getItem('channels'));
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
      localStorage.setItem('channels', JSON.stringify(channels));

      resolve(channels);
    });
  }

  editChannel(channel: Channel): Promise<Channel[]> {
    return new Promise((resolve) => {
      this.deleteChannel(channel.id).then((channelsNew: Channel[]) => {
        channelsNew.push(channel);
        localStorage.setItem('channels', JSON.stringify(channelsNew));

        resolve(channelsNew);
      });
    });
  }

  deleteChannel(id: string): Promise<Channel[]> {
    return new Promise((resolve) => {
      const channels = this.loadChannels();
      channels.find((channel, index) => {
        if (id === channel.id) {
          channels.splice(index, 1);
        }
      });

      localStorage.setItem('channels', JSON.stringify(channels));

      resolve(channels);
    });
  }
}
