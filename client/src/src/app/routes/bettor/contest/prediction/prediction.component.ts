import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {
  displayedColumns= ["date","result","prediction"];

  constructor() { }

  ngOnInit() {
  }

}
