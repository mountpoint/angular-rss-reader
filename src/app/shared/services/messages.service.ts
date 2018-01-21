import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable()
export class MessagesService {
  private loadMessages() {
    return JSON.parse(localStorage.getItem('messages'));
  }

  private saveMessages(messages) {
    localStorage.setItem('messages', JSON.stringify(messages));
  }

  getMessages(): Promise<Message[]> {
    return new Promise((resolve) => {
      const messages = this.loadMessages();

      resolve(messages);
    });
  }

  getMessage(id: string): Promise<Message> {
    return new Promise((resolve) => {
      const messages = this.loadMessages();
      let output = null;

      if (messages) {
        output = messages.find(channel => {
          return id === channel.id;
        });
      }

      resolve(output);
    });
  }

  addMessage(channel: Message): Promise<Message[]> {
    return new Promise((resolve) => {
      const messages = this.loadMessages() || [];
      messages.push(channel);
      this.saveMessages(messages);

      resolve(messages);
    });
  }

  editMessage(channel: Message): Promise<Message[]> {
    return new Promise((resolve) => {
      this.deleteMessage(channel.id).then(data => {
        data['messages'].splice(data['lastDeletedPosition'], 0, channel);

        this.saveMessages(data['messages']);

        resolve(data['messages']);
      });
    });
  }

  deleteMessage(id: string) {
    return new Promise((resolve) => {
      const messages = this.loadMessages();
      const index = messages.findIndex((channel) => {
        return id === channel.id;
      });

      messages.splice(index, 1);
      this.saveMessages(messages);

      resolve({ messages: messages, lastDeletedPosition: index });
    });
  }
}
