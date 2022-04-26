import { NgModule } from '@angular/core';
import {HomePageComponent} from "./home-page/home-page.component";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomeRoutingModule
  ],
})
export class HomeModule {}
