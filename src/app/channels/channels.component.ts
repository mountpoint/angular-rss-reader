import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsService } from '../shared/services/channels.service';
import { Channel } from '../shared/models/channel.model';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.less']
})
export class ChannelsComponent implements OnInit {
  channels: Channel[];

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

  onAddChannel() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
