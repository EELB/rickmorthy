import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchByNamePageComponent } from './pages/search-by-name-page/search-by-name-page.component';
import { SearchByStatusPageComponent } from './pages/search-by-status-page/search-by-status-page.component';

const routes: Routes = [
  {
    path:'by-name',
    component: SearchByNamePageComponent
  },
  {
    path:'by-status',
    component: SearchByStatusPageComponent
  },
]



@NgModule({
  imports: [
    RouterModule.forChild(routes)], 
    exports: [RouterModule],
})
export class MainRoutingModule { }
