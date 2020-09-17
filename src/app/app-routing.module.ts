import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch:'full'},
  
  {path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  
  {path:'admiin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRouting{}