import { Component, OnInit } from '@angular/core';
import { Channel } from '../shared/models/channel.model';
import { ChannelsService } from '../shared/services/channels.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  channelsCount: number;

  constructor(private channelsService: ChannelsService) { }

  ngOnInit() {
    this.channelsService.getChannels().then((channels: Channel[]) => {
      this.channelsCount = channels ? channels.length : 0;
    });
  }

}
