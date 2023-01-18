import {Component, OnInit} from '@angular/core';
import {LoginService} from "./auth/services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'palmira-test';

}
