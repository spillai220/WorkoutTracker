import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-jogging',
  templateUrl: './grid-jogging.component.html',
  styleUrls: ['./grid-jogging.component.css']
})
export class GridJoggingComponent implements OnInit {

  @Input() joggingData: Array<any>;
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }
  public deleteRecord(record){
    this.recordDeleted.emit(record);
  }
  public editRecord(record){
    const clonedRecord = Object.assign({}, record);
    this.editClicked.emit(clonedRecord);
  }
  public newRecord(){
    this.newClicked.emit();
  }

}
