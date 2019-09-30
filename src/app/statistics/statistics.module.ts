import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartModule } from 'angular-highcharts';

import { ChannelsModule } from '../channels/channels.module';

import { StatisticsComponent } from './statistics.component';
import { StatisticComponent } from './statistic/statistic.component';
import { StatisticMessageComponent } from './statistic/statistic-message/statistic-message.component';

@NgModule({
  declarations: [
    StatisticsComponent,
    StatisticComponent,
    StatisticMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartModule,
    ChannelsModule
  ],
  exports: [
    StatisticsComponent,
    StatisticComponent,
    StatisticMessageComponent
  ]
})
export class StatisticsModule { }
