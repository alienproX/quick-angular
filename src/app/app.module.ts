import { BrowserModule, Title } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes, Router, NavigationEnd }   from '@angular/router'
import { App } from './app.component'

import { Demo } from './views/demo/'
import { Home } from './views/home/'
import { Header } from './components/header'

const appRoutes: Routes = [
  {
    path: '',
    component: Home,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'demo',
    component: Demo,
    data: {
      title: 'Demo'
    }
  }
]

@NgModule({
	declarations: [
		App, Demo, Home, Header
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [Title],
	bootstrap: [App]
})
export class AppModule {
  constructor(router: Router, title: Title) {
    router.events.subscribe(event => {
    if(event instanceof NavigationEnd) {
      title.setTitle(router.routerState.snapshot.root.firstChild.routeConfig.data.title)
    }
  });
    }
}
