export class Message {
  id: number;

  constructor(public name: string,
              public channelId: number,
              public author: string,
              public text: string,
              public date: number) { }
}
