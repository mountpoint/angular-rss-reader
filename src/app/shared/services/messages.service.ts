import { EventEmitter, Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { ChannelsService } from './channels.service';
import { Channel } from '../models/channel.model';

@Injectable()
export class MessagesService {
  message = new EventEmitter<Message>();

  constructor(private channelsService: ChannelsService) { }

  getMessage(channelId: string, messageId: string): Promise<Message> {
    return new Promise((resolve) => {
      this.channelsService.getChannel(channelId).then((channel: Channel) => {
        let output = null;

        if (channel.messages) {
          output = channel.messages.find(message => {
            return message.id === messageId;
          });
        }

        resolve(output);
      });
    });
  }

  deleteMessage(channelId: string, messageId: string): Promise<Message[]> {
    return new Promise((resolve) => {
      this.channelsService.getChannel(channelId).then((channel: Channel) => {
        const index = channel.messages.findIndex(message => {
          return message.id === messageId;
        });

        channel.messages.splice(index, 1);

        this.channelsService.editChannel(channel).then(() => {
          resolve(channel.messages);
        });
      });
    });
  }

  setReadStatus(status: boolean, channelId: string, messageId: string) {
    return new Promise((resolve) => {
      this.channelsService.getChannel(channelId).then((channel: Channel) => {
        const index = channel.messages.findIndex(message => {
          return message.id === messageId;
        });

        channel.messages[index].wasRead = status;

        this.channelsService.editChannel(channel).then(() => {
          resolve(channel.messages[index]);
        });
      });
    });
  }
}
