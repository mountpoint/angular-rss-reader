import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ChannelMessage } from '../../../core/models/channel-message.model';
declare var $: any;

@Component({
  selector: 'app-channel-message',
  templateUrl: './channel-message.component.html',
  styleUrls: ['./channel-message.component.scss']
})
export class ChannelMessageComponent implements OnInit {
  message: ChannelMessage;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const $modal = $('.message-modal');

    this.route.data.subscribe((data: Data) => {
      if (data['message']) {
        this.message = data['message'];

        $modal.modal('show');
      } else {
        alert('Message not found');
        this.router.navigate(['/channels']);
      }
    });

    $modal.on('hidden.bs.modal', () => {
      this.closeMessage();
    });
  }

  closeMessage() {
    setTimeout(() => {
      this.router.navigate(['/channels', this.route.snapshot.parent.params['id']]);
    }, 300);
  }
}
