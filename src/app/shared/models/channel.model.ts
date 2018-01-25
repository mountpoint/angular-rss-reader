import { Message } from './message.model';

export class Channel {
  title: string;
  description: string;
  image: string;
  messages: Message[];

  constructor(public id: string, public url: string) { }
}
