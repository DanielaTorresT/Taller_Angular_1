import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Series } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {

  
  constructor(private seriesService: SeriesService) { }
  series: Array<Series> = [];
  average: number = 0;

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      series.forEach(element => {this.average += element.seasons;});
      this.average = this.average/series.length;
      
      this.series = series;
    });

    
  }

  ngOnInit() {
   
      this.getSeries();
    
  }

}
