import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { PubComponent } from './pub.component';

const routes: Routes = [
  {path:"", component:PubComponent, children:[
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:HomeComponent},
    {path:"about", component:AboutComponent},
    {path:"product", component:ProductComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PubRoutingModule { }
