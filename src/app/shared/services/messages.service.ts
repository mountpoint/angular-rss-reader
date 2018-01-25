import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { ChannelsService } from './channels.service';
import { Channel } from '../models/channel.model';

@Injectable()
export class MessagesService {
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

  // TODO
  deleteMessage(channelId: string, messageId: string): Promise<Message> {
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

  /*deleteMessageqwqwq(id: string) {
    return new Promise((resolve) => {
      const messages = this.loadMessages();
      const index = messages.findIndex((channel) => {
        return id === channel.id;
      });

      messages.splice(index, 1);
      this.saveMessages(messages);

      resolve({ messages: messages, lastDeletedPosition: index });
    });
  }*/
}
