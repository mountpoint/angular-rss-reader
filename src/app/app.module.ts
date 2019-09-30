import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelsService } from './core/services/channels.service';
import { MessagesService } from './core/services/messages.service';
import { HelperService } from './core/services/helper.service';
import { ChannelResolver } from './core/services/channel-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { Rss2jsonService } from './core/services/rss2json.service';
import { ChannelMessageComponent } from './channels/channel/channel-message/channel-message.component';
import { MessageResolver } from './core/services/message-resolver.service';
import { StatisticResolver } from './core/services/statistic-resolver.service';
import { StatisticService } from './core/services/statistic.service';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { StatisticsModule } from './statistics/statistics.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
    ChannelMessageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    StatisticsModule,
    NotFoundModule,
    AppRoutingModule
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
  bootstrap: [AppComponent]
})
export class AppModule { }
