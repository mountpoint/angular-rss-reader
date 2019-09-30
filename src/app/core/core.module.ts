import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';

import { ChannelsService } from './services/channels.service';
import { MessagesService } from './services/messages.service';
import { HelperService } from './services/helper.service';
import { Rss2jsonService } from './services/rss2json.service';
import { StatisticService } from './services/statistic.service';
import { ChannelResolver } from './services/channel-resolver.service';
import { MessageResolver } from './services/message-resolver.service';
import { StatisticResolver } from './services/statistic-resolver.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    ChannelsService,
    MessagesService,
    StatisticService,
    HelperService,
    Rss2jsonService,
    ChannelResolver,
    MessageResolver,
    StatisticResolver
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
