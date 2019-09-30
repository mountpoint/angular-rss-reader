import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelMessage } from '../../../core/models/channel-message.model';
import { MessagesService } from '../../../core/services/messages.service';

@Component({
  selector: 'app-channel-messages-list',
  templateUrl: './channel-messages-list.component.html',
  styleUrls: ['./channel-messages-list.component.scss']
})
export class ChannelMessagesListComponent implements OnInit {
  @Input() messages: ChannelMessage[];
  @Input() section: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private messagesService: MessagesService) { }

  ngOnInit() {
  }

  loadMessage(messageId: string) {
    this.router.navigate(['message', messageId], { relativeTo: this.route });

    this.messagesService.setReadStatus(true, this.route.snapshot.params['id'], messageId).then((message: ChannelMessage) => {
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
      this.messagesService.deleteMessage(this.route.snapshot.params['id'], messageId).then((messages: ChannelMessage[]) => {
        this.messages = messages;
      });
    }
  }

  private markMessage = (message: ChannelMessage) => {
    const index = this.messages.findIndex(item => {
      return item.id === message.id;
    });

    this.messages[index].wasRead = message.wasRead;
  }
}
