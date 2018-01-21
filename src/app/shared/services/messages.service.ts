import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';

@Injectable()
export class MessagesService {
  getMessages() {
    return JSON.parse(localStorage.getItem('messages'));
  }

  getMessage(id) {
    const messages = this.getMessages();

    return messages.find((message) => {
      return id === message.id;
    });
  }

  setMessage(message: Message) {
    const messages = this.getMessages();

    messages.push(message);

    localStorage.setItem('messages', JSON.stringify(messages));
  }

  deleteMessage(id) {
    const messages = this.getMessages();

    messages.find((message, index) => {
      if (id === message.id) {
        messages.splice(index, 1);
      }
    });

    localStorage.setItem('messages', JSON.stringify(messages));
  }
}
