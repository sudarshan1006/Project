import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
 {path:'',component:LoginComponent},
 
 { path:'login',component:LoginComponent},
  {path:'view',component:ViewComponent},
  {path:'user',component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
