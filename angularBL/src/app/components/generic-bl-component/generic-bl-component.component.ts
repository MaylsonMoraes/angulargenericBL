import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-bl-component',
  templateUrl: './generic-bl-component.component.html',
  styleUrls: ['./generic-bl-component.component.css'],
})
export class GenericBLComponentComponent implements OnInit {
  name: string = 'Maylson';
  age: number = 33;

  constructor() {}

  ngOnInit(): void {}
}
