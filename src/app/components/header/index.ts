import { Component } from '@angular/core';

@Component({
	selector: 'header',
	styleUrls: ['../../assets/style/header.scss'],
	template: `<div class="nav nav-tabs">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a routerLink="/demo" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Products</a>
          <a routerLink="/form" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Form</a>
    </div>`
})
export class Header {
	title = 'app works!';
}
