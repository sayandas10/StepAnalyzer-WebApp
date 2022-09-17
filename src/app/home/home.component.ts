import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$"
  constructor() { }

  ngOnInit(): void {
  }

}
