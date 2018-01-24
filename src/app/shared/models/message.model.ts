export class Message {
  constructor(public id: string,
              public title: string,
              public channelId: number,
              public link: string,
              public description: string,
              public pubDate: number) { }
}
