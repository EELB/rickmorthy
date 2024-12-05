import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByStatusPageComponent } from './search-by-status-page.component';

describe('SearchByStatusPageComponent', () => {
  let component: SearchByStatusPageComponent;
  let fixture: ComponentFixture<SearchByStatusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchByStatusPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByStatusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
