import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ChannelsService } from '../../core/services/channels.service';
import { Channel } from '../../core/models/channel.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channel: Channel;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private channelsService: ChannelsService) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      if (data['channel']) {
        this.channel = data['channel'];
      } else {
        alert('Channel not found');
        this.router.navigate(['/channels']);
      }
    });
  }

  deleteChannel() {
    if (confirm('Are you sure?')) {
      this.channelsService.deleteChannel(this.channel.id).then((channels: any) => {
        this.channelsService.channelsChanged.emit(channels.channels);
        this.router.navigate(['/channels']);
      });
    }
  }

  refreshChannel() {
    alert('TODO');
  }
}
