import { NgModule } from '@angular/core'
import { BrowserModule  } from '@angular/platform-browser'

import { App } from './app.component'
import { Header } from './components/header';
import { Home } from './views/home'
import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    App,
    Header,
    Home
  ],
  bootstrap: [App]
})
export class AppModule {}
