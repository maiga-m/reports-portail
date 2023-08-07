import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPowerBiReportComponent } from './list-power-bi-report.component';

describe('ListPowerBiReportComponent', () => {
  let component: ListPowerBiReportComponent;
  let fixture: ComponentFixture<ListPowerBiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPowerBiReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPowerBiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
