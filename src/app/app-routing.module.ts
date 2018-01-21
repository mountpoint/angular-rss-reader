import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChannelsComponent } from './channels/channels.component';
import { ChannelFormComponent } from './channels/channel-form/channel-form.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { HomeComponent } from './home/home.component';
import { ChannelResolver } from './shared/services/channel-resolver.service';

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
        resolve: { channel: ChannelResolver }
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
    component: StatisticsComponent
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
