import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.modules';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { TrendingBarComponent } from './components/trending-bar/trending-bar.component';
import { CardComponent } from './components/card/card.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';


@NgModule({
  declarations: [
    MainScreenComponent,
    TrendingBarComponent,
    CardComponent,
    ResultPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
