import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import {ReactiveFormsModule} from "@angular/forms";

const routing: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
