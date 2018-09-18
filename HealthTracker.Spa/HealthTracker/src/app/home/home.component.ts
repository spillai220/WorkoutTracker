import { Component, OnInit } from '@angular/core';
import {WorkoutService} from '../workout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public joggingData: Array<any>;
  public currentJogging: any;

  constructor(private workoutService : WorkoutService) {
    workoutService.get().subscribe(
      (data : any) => this.joggingData = data
    );
    this.currentJogging = this.setInitialValuesForJoggingData();
   }

  ngOnInit() {
  }
  private setInitialValuesForJoggingData() {
    return {
      id : undefined,
      date: '',
      distance: 0,
      time: 0
    }
  }
  public editClicked(record){
    this.currentJogging = record;
  }
  public newClicked(){
    this.currentJogging = this.setInitialValuesForJoggingData();
  }
  public deleteClicked(record){
    const deleteIndex = this.joggingData.findIndex(el => el.id ===record.id);
    this.workoutService.remove(record).subscribe(
      result => this.joggingData.splice(deleteIndex, 1)
    );
  }

  public createOrUpdateJogging (jogging : any){
    //if jogging is present in JoggingData, we can assume its an update
    //otherwise, it is adding

    let joggingWithId;
    joggingWithId = this.joggingData.find(el => el.id == jogging.id);

    if(joggingWithId){
      const updateIndex = this.joggingData.findIndex(el => el.id === joggingWithId.id);
      this.workoutService.update(jogging).subscribe(
        oggingRecord =>  this.joggingData.splice(updateIndex, 1, jogging)
      );
    } else {
      this.workoutService.add(jogging).subscribe(
        joggingRecord => this.joggingData.push(jogging)
      );
    }
    this.currentJogging = this.setInitialValuesForJoggingData();

  } 

}
