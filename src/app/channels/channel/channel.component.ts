import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ChannelsService } from '../../shared/services/channels.service';
import { Channel } from '../../shared/models/channel.model';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.less']
})
export class ChannelComponent implements OnInit {
  channel: Channel;

  constructor(private router: Router, private route: ActivatedRoute) { }

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
}
