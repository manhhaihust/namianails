import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", redirectTo:"login", pathMatch:"full" },
  {path:"login", component:LoginComponent},
  {path:"forgot", component:ForgotComponent},
  {path:"register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
