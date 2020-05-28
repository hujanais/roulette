import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITile } from 'src/app/models/itile';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() tileValue: number = 0;
  @Input() backColor: string = 'black';

  @Output() clicked = new EventEmitter<ITile>();

  public backgroundColor: string;

  isSelected: boolean = false;
  timesSelected: number = 0;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.backColor;
  }

  onClick() {
    this.timesSelected += 1;
    this.isSelected = (this.timesSelected > 0);
    this.clicked.emit({ faceValue: this.tileValue, timesSelected: this.timesSelected, isSelected: this.isSelected });

    this.backgroundColor = this.isSelected ? 'steelblue' : this.backColor;
  }

  reset() {
    this.timesSelected = 0;
    this.isSelected = (this.timesSelected > 0);
    this.backgroundColor = this.isSelected ? 'steelblue' : this.backColor;
  }
}
