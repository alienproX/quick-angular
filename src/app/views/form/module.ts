import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms'

import { formComponent }   from './component';


const routes: Routes = [
  { path: '', component: formComponent }
]

@NgModule({
  imports: [FormsModule, RouterModule.forChild(routes)],
  declarations: [formComponent]
})
export class Form {}
