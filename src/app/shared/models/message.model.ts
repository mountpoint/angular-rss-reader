export class Message {
  constructor(public id: string,
              public title: string,
              public link: string,
              public description: string,
              public pubDate: number,
              public author: string,
              public enclosure: any) { }
}
