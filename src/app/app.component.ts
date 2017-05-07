import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./assets/style/reset.scss'],
  template: `<header></header><router-outlet></router-outlet>`
})
export class App {
  title = 'app works!';
}
