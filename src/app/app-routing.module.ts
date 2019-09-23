import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CensoComponent } from './censo/censo.component'


const routes: Routes = [
  {path: '', component: CensoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
