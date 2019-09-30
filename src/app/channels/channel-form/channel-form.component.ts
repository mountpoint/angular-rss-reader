import { Component, OnInit } from '@angular/core';
import { Channel } from '../../core/models/channel.model';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ChannelsService } from '../../core/services/channels.service';
import { HelperService } from '../../core/services/helper.service';

@Component({
  selector: 'app-channel-form',
  templateUrl: './channel-form.component.html',
  styleUrls: ['./channel-form.component.scss']
})
export class ChannelFormComponent implements OnInit {
  channel: Channel;

  constructor(private channelsService: ChannelsService,
              private helperService: HelperService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.channel = new Channel(this.helperService.generateId(), '');

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

  onSave() {
    this.channelsService.addChannel(this.channel).then(
      (channels: Channel[]) => {
        this.channelsService.channelsChanged.emit(channels);
        this.router.navigate(['/channels', this.channel.id]);
      },
      (error) => {
        alert(error);
      },
    );
  }
}
