import {Injectable} from '@angular/core';
import {subordinates} from "../models/subordinates.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubordinatesService {
  BASE_NAME = "http://194.163.169.47:5000"

  constructor(private http: HttpClient) {
  }

  getSubordinates():Observable<any> {
    return this.http.post<any>(this.BASE_NAME + "/subordinates.php", {})
  }
}
