import { Injectable } from '@angular/core';
import { Channel } from '../models/channel.model';
import { ChannelsService } from './channels.service';
import { Chart } from 'angular-highcharts';

@Injectable()
export class StatisticService {
  constructor(private channelsService: ChannelsService) { }

  buildStatistic(channelId: string) {
    return new Promise((resolve) => {
      this.channelsService.getChannel(channelId).then((channel: Channel) => {
        const statistic = {
          channelName: channel.title,
          messages: channel.messages,
          messagesCount: channel.messages.length
        };

        const authors = [];
        for (const message of channel.messages) {
          if (message.author && authors.indexOf(message.author) === -1) {
            authors.push(message.author);
          }
        }

        statistic['authorsCount'] = authors.length;

        resolve(statistic);
      });
    });
  }

  getLettersFrequency(description: string) {
    return new Promise((resolve) => {
      const letters = description.toLowerCase().match(/[a-z]/g) || [];
      const descriptionLength = letters.length;

      const lettersCount = {};
      for (const letter of letters) {
        if (!(letter in lettersCount)) {
          lettersCount[letter] = 1;
        } else {
          lettersCount[letter] += 1;
        }
      }

      const chartData = [];
      for (const prop in lettersCount) {
        if (lettersCount.hasOwnProperty(prop)) {
          chartData.push({
            name: prop,
            y: (lettersCount[prop] / descriptionLength) * 100
          });
        }
      }

      chartData.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });

      const chart = new Chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'The frequency of the appearance of the letters of the Latin alphabet'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            }
          }
        },
        series: [{
          name: 'Frequency',
          data: chartData
        }]
      });

      resolve({ chart: chart, descriptionLength: descriptionLength });
    });
  }
}
