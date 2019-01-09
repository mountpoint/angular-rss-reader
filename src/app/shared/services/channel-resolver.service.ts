import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Channel } from '../models/channel.model';
import { ChannelsService } from './channels.service';

@Injectable()
export class ChannelResolver implements Resolve<Channel> {
  constructor(private channelsService: ChannelsService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Channel> | Promise<Channel> | Channel {
    return this.channelsService.getChannel(route.params['id']);
  }
}
