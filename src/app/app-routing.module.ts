import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { StatisticsComponent } from './statistics/statistics.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFormComponent } from './channels/channel-form/channel-form.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { ChannelResolver } from './core/services/channel-resolver.service';
import { StatisticComponent } from './statistics/statistic/statistic.component';
import { ChannelMessageComponent } from './channels/channel/channel-message/channel-message.component';
import { MessageResolver } from './core/services/message-resolver.service';
import { StatisticResolver } from './core/services/statistic-resolver.service';
import { StatisticMessageComponent } from './statistics/statistic/statistic-message/statistic-message.component';

const routes = [
  /*{
    path: '',
    redirectTo: '/channels',
    pathMatch: 'full'
  },*/
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'channels',
    component: ChannelsComponent,
    children: [
      {
        path: 'add',
        component: ChannelFormComponent
      },
      {
        path: ':id',
        component: ChannelComponent,
        resolve: { channel: ChannelResolver },
        children: [
          {
            path: 'message/:id',
            component: ChannelMessageComponent,
            resolve: { message: MessageResolver }
          }
        ]
      }
    ]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    children: [
      {
        path: ':id', // channel ID
        component: StatisticComponent,
        resolve: { statistic: StatisticResolver },
        children: [
          {
            path: 'message/:id',
            component: StatisticMessageComponent,
            resolve: { message: MessageResolver }
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
