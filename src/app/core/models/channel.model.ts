import { ChannelMessage } from './channel-message.model';

export class Channel {
  title: string;
  description: string;
  image: string;
  messages: ChannelMessage[];

  constructor(public id: string, public url: string) { }
}
