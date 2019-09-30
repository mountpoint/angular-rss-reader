import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ChannelsComponent } from './channels.component';
import { ChannelComponent } from './channel/channel.component';
import { ChannelsListComponent } from './channels-list/channels-list.component';
import { ChannelFormComponent } from './channel-form/channel-form.component';
import { ChannelMessagesListComponent } from './channel/channel-messages-list/channel-messages-list.component';
import { ChannelMessageComponent } from './channel/channel-message/channel-message.component';

@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelComponent,
    ChannelsListComponent,
    ChannelFormComponent,
    ChannelMessagesListComponent,
    ChannelMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ChannelsComponent,
    ChannelComponent,
    ChannelsListComponent,
    ChannelMessagesListComponent
  ]
})
export class ChannelsModule { }
