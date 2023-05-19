import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PubRoutingModule } from './pub-routing.module';
import { PubComponent } from './pub.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  declarations: [
    PubComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PubRoutingModule
  ]
})
export class PubModule { }
