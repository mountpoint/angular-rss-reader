export class Message {
  constructor(
              public id: string,
              public name: string,
              public channelId: number,
              public author: string,
              public text: string,
              public date: number) { }
}
