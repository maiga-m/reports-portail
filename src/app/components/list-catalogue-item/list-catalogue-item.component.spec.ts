import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCatalogueItemComponent } from './list-catalogue-item.component';

describe('ListCatalogueItemComponent', () => {
  let component: ListCatalogueItemComponent;
  let fixture: ComponentFixture<ListCatalogueItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCatalogueItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCatalogueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
