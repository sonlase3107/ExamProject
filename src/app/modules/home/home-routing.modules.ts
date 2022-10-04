import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './pages/main-screen/main-screen.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';
const route: Routes = [
    { path: '', component: MainScreenComponent },
    { path: 'search', component: ResultPageComponent }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
