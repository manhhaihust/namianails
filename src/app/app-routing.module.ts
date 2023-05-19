import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo:"pub", pathMatch:"full"},
  {path:"pub", loadChildren:() => import("./pub/pub.module").then(x => x.PubModule)},
  {path:"admin", loadChildren:() => import("./admin/admin.module").then(x => x.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
