import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ChannelMessage } from '../../../core/models/channel-message.model';
import { StatisticService } from '../../../core/services/statistic.service';
declare var $: any;

@Component({
  selector: 'app-statistic-message',
  templateUrl: './statistic-message.component.html',
  styleUrls: ['./statistic-message.component.scss']
})
export class StatisticMessageComponent implements OnInit {
  chart;
  descriptionLength;
  message: ChannelMessage;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private statisticService: StatisticService) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      if (data['message']) {
        this.message = data['message'];

        $('.message-modal').modal('show');
      } else {
        alert('Message not found');
        this.router.navigate(['/channels']);
      }
    });

    const $modal = $('.message-modal');

    $modal.on('hidden.bs.modal', () => {
      this.closeMessage();
    });

    $modal.on('shown.bs.modal', () => {
      this.statisticService.getLettersFrequency(this.message.description).then((data: any) => {
        this.chart = data.chart;
        this.descriptionLength = data.descriptionLength;
      });
    });
  }

  closeMessage() {
    setTimeout(() => {
      this.router.navigate(['/statistics', this.route.snapshot.parent.params['id']]);
    }, 300);
  }
}
