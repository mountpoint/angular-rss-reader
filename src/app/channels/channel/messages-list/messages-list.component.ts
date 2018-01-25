import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../../shared/models/message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.less']
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loadMessage(messageId: string) {
    this.router.navigate(['message', messageId], { relativeTo: this.route });
  }
}
