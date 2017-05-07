import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes }   from '@angular/router'

import { Home } from './views/home/'

const routes: Routes = [
  { path: '', component: Home },
  { path: 'form', loadChildren: './views/form/module#Form' },
  { path: 'demo', loadChildren: './views/demo/module#Demo' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes)
