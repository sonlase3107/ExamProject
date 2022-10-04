import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideBarComponent } from './layout/components/side-bar/side-bar.component';
import { SearchBarComponent } from './layout/components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    SideBarComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
