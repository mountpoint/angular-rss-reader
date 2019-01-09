import { Injectable } from '@angular/core';

@Injectable()
export class Rss2jsonService {
  private endpoint = 'https://api.rss2json.com/v1/api.json';
  private apiKey = 'oagg7vtoutdltoa2y5xtny6awf31qzxhlrq9tyeu';
  private countMessages = '500';

  getEndpoint(): string {
    return this.endpoint;
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getCountMessages(): string {
    return this.countMessages;
  }
}
