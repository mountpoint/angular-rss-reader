import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Statistic } from '../models/statistic.model';
import { StatisticService } from './statistic.service';

@Injectable()
export class StatisticResolver implements Resolve<Statistic> {
  constructor(private statisticService: StatisticService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Statistic> | Promise<Statistic> | Statistic {
    return this.statisticService.buildStatistic(route.params['id']);
  }
}
