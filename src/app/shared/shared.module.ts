import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
