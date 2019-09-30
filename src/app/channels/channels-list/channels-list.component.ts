import { Component, Input, OnInit } from '@angular/core';

import { Channel } from '../../core/models/channel.model';
import { ChannelsService } from '../../core/services/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.scss']
})
export class ChannelsListComponent implements OnInit {
  channels: Channel[];

  @Input() section: string;

  constructor(private channelsService: ChannelsService) { }

  ngOnInit() {
    this.channelsService.getChannels().then((channels: Channel[]) => {
      this.channels = channels;
    });

    this.channelsService.channelsChanged.subscribe((channels: Channel[]) => {
      this.channels = channels;
    });
  }
}
