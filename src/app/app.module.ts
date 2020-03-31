import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ParentGridComponent } from './modules/parent-grid/parent-grid.component';
import { ChildGridComponent } from './modules/child-grid/child-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentGridComponent,
    ChildGridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
