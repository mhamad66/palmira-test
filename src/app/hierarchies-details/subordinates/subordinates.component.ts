import {Component, OnInit} from '@angular/core';
import {SubordinatesService} from "../services/subordinates.service";
import {subordinates} from "../models/subordinates.model";

@Component({
  selector: 'app-subordinates',
  templateUrl: './subordinates.component.html',
  styleUrls: ['./subordinates.component.css']
})
export class SubordinatesComponent implements OnInit {
  data: subordinates[] = []

  constructor(private subordinatesService: SubordinatesService) {
  }

  ngOnInit(): void {
    this.subordinatesService.getSubordinates().subscribe(res => {
      this.data = res.data
    })
  }
}
