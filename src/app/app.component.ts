import { Component } from '@angular/core';
import { formatNumber } from '@angular/common';
import {Color,ScaleType} from '@swimlane/ngx-charts';

import { multi } from './data';

interface MultiProps {
  name:string;
  series:Array<{
    name:string;
    value:number | null;
  }>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx Chart with Log Scale';
  multi:MultiProps[];
  view: [number,number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  log10: boolean = true

  colorScheme:Color = {
    name: 'Teste',
    selectable:true,
    group: ScaleType.Linear,
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  

  constructor() {
    this.multi = multi;
    this.multi = this.multi.map(
      e => {
        return {
          name: e.name, 
          series: e.series.map(
            v => {
              return {
                name: v.name, 
                value: Math.log10(v.value!)
              }
            }
          )
        }
      }
    )
  }

  getMathPower(val: number){
    return Math.round(Math.pow(10,val));
  }

}
