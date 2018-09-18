import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'add-or-update-jogging',
  templateUrl: './add-or-update-jogging.component.html',
  styleUrls: ['./add-or-update-jogging.component.css']
})
export class AddOrUpdateJoggingComponent implements OnInit {
  @Output() joggingCreated = new EventEmitter<any>();
  @Input() joggingInfo: any;

  
  constructor() {
    this.clearJoggingInfo();
    console.log(this.joggingInfo.date);

   }

  ngOnInit() {
  }
  private clearJoggingInfo(){
    this.joggingInfo = {
      id: undefined,
      date: '',
      distance: 0,
      timeInSeconds: 0
    };
  }
  public addOrUpdateJoggingRecord (event){
    this.joggingCreated.emit(this.joggingInfo);
    this.clearJoggingInfo();
  }
  public newRecord() {
    return this.clearJoggingInfo();
  }
}
