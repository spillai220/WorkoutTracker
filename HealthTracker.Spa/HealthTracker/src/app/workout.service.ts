import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WorkoutService {
  private headers : HttpHeaders;
  private accessPoint : string = "http://localhost:58095/api/Workouts";
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})

   }
   public get(){
     return this.http.get(this.accessPoint, { headers: this.headers});
   }
   public add(payload) {
     return this.http.post(this.accessPoint, payload, {headers : this.headers});
   }
   public remove(payload){
     return this.http.delete(this.accessPoint+"/"+payload.id, {headers: this.headers});
   }
   public update(payload){
     return this.http.put(this.accessPoint+'/'+ payload.id, payload, {headers: this.headers});
   }

}
