import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentGridComponent } from './modules/parent-grid/parent-grid.component';



const routes: Routes = [
  { path: '', component:ParentGridComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
