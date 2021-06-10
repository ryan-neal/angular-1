import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css']
})
export class ZooComponent implements OnInit {
  animals = ["lions", "tigers", "bears"];
  
  constructor() { }

  ngOnInit() {
  }

}
