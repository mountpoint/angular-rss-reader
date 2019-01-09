import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Message } from '../models/message.model';
import { MessagesService } from './messages.service';

@Injectable()
export class MessageResolver implements Resolve<Message> {
  constructor(private messagesService: MessagesService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Message> | Promise<Message> | Message {
    return this.messagesService.getMessage(route.parent.params['id'], route.params['id']);
  }
}
