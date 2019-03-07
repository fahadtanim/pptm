import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  ngOnInit(): void {
    this.opened = true;

  }
}
