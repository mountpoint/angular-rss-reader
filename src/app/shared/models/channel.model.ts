export class Channel {
  countMessages: number;
  title: string;
  description: string;
  image: string;

  constructor(public id: string, public link: string) { }
}
