import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchByNamePageComponent } from './pages/search-by-name-page/search-by-name-page.component';
import { SearchByStatusPageComponent } from './pages/search-by-status-page/search-by-status-page.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterListComponent,
    SearchBoxComponent,
    SearchByNamePageComponent,
    SearchByStatusPageComponent,
  ],
  imports: [CommonModule, MainRoutingModule, RouterModule],
})
export class MainModule {}
