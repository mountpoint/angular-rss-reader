import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Message } from '../../../shared/models/message.model';
declare var $: any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {
  message: Message;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      if (data['message']) {
        this.message = data['message'];

        $('.message-modal').modal('show');
      } else {
        alert('Message not found');
        this.router.navigate(['/channels']);
      }
    });

    $('.message-modal').on('hidden.bs.modal', () => {
      this.closeMessage();
    });
  }

  closeMessage() {
    setTimeout(() => {
      this.router.navigate(['/channels', this.route.snapshot.parent.params['id']]);
    }, 300);
  }
}
