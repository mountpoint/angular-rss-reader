import { Component, Input, OnInit } from '@angular/core';
import { Channel } from '../../shared/models/channel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../../shared/services/channels.service';

@Component({
  selector: 'app-channels-list',
  templateUrl: './channels-list.component.html',
  styleUrls: ['./channels-list.component.less']
})
export class ChannelsListComponent implements OnInit {
  channels: Channel[];

  @Input() section: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private channelsService: ChannelsService) { }

  ngOnInit() {
    this.channelsService.getChannels().then((channels: Channel[]) => {
      this.channels = channels;
    });

    this.channelsService.channelsChanged.subscribe((channels: Channel[]) => {
      this.channels = channels;
    });
  }

}
