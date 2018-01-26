import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../../../shared/models/message.model';
import { MessagesService } from '../../../shared/services/messages.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.less']
})
export class MessagesListComponent implements OnInit {
  @Input() messages: Message[];
  @Input() section: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private messagesService: MessagesService) { }

  ngOnInit() {
  }

  loadMessage(messageId: string) {
    this.router.navigate(['message', messageId], { relativeTo: this.route });

    this.messagesService.setReadStatus(true, this.route.snapshot.params['id'], messageId).then((message: Message) => {
      this.markMessage(message);
    });
  }

  markAsUnread(messageId: string) {
    if (this.section !== 'statistic') {
      this.messagesService.setReadStatus(false, this.route.snapshot.params['id'], messageId).then(this.markMessage);
    }
  }

  deleteMessage(messageId: string) {
    if (confirm('Are you sure?')) {
      this.messagesService.deleteMessage(this.route.snapshot.params['id'], messageId).then((messages: Message[]) => {
        this.messages = messages;
      });
    }
  }

  private markMessage = (message: Message) => {
    const index = this.messages.findIndex(item => {
      return item.id === message.id;
    });

    this.messages[index].wasRead = message.wasRead;
  }
}
