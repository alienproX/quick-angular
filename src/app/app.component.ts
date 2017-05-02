import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./assets/style/reset.scss'],
  template: `<header>
  <ul class="nav nav-tabs">
        <li routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }"><a routerLink="/">Home</a></li>
        <li routerLinkActive="active"><a routerLink="/demo">Products</a></li>
    </ul>
  </header><router-outlet></router-outlet>`
})
export class App {
  title = 'app works!';
}
