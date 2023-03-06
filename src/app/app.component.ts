import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  isHidden: boolean = true;

  incrementCount() {
    this.count++;
  }

  imageDblClick() {
    this.isHidden = !this.isHidden;
  }
}
