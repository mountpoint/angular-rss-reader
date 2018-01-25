import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFormComponent } from './channels/channel-form/channel-form.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { HomeComponent } from './home/home.component';
import { ChannelResolver } from './shared/services/channel-resolver.service';
import { StatisticComponent } from './statistics/statistic/statistic.component';
import { MessageComponent } from './channels/channel/message/message.component';
import { MessageResolver } from './shared/services/message-resolver.service';
import { StatisticResolver } from './shared/services/statistic-resolver.service';
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
            component: MessageComponent,
            resolve: { message: MessageResolver }
          }
        ]
      },
      {
        path: ':id/edit',
        component: ChannelFormComponent,
        resolve: { channel: ChannelResolver }
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
