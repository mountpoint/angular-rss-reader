import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ChannelsService } from '../../shared/services/channels.service';
import { Channel } from '../../shared/models/channel.model';
import { Message } from '../../shared/models/message.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.less']
})
export class ChannelComponent implements OnInit {
  channel: Channel;
  messages: Message[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private channelsService: ChannelsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];

      if (id) {
        this.route.data.subscribe((data: Data) => {
          if (data['channel']) {
            this.channel = data['channel'];
          } else {
            alert('Channel not found');
            this.router.navigate(['/channels']);
          }
        });
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
    alert('234');
  }
}
