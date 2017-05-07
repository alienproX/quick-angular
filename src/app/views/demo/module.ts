import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { demoComponent }   from './component';


const routes: Routes = [
  { path: '', component: demoComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [demoComponent]
})
export class Demo {}
