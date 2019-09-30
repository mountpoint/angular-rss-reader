import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ChannelMessage } from '../models/channel-message.model';
import { MessagesService } from './messages.service';

@Injectable()
export class MessageResolver implements Resolve<ChannelMessage> {
  constructor(private messagesService: MessagesService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ChannelMessage> | Promise<ChannelMessage> | ChannelMessage {
    return this.messagesService.getMessage(route.parent.params['id'], route.params['id']);
  }
}
