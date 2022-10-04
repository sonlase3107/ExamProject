import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClrVerticalNavModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { VideoService } from './services/video.services';
import { FooterComponent } from './shared/layout/components/footer/footer.component';
import { HeaderComponent } from './shared/layout/components/header/header.component';
import { SearchBarComponent } from './shared/layout/components/search-bar/search-bar.component';
import { SideBarComponent } from './shared/layout/components/side-bar/side-bar.component';
import { LayoutHomeComponent } from './shared/layout/pages/layout-home/layout-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LayoutHomeComponent, loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule) }
]

const LIST_IMPORT =
  [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ClrVerticalNavModule
  ]
const LIST_DECLARE =
  [
    AppComponent,
    LayoutHomeComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    SearchBarComponent
  ]

@NgModule({
  declarations: [...LIST_DECLARE],
  imports: [...LIST_IMPORT],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
