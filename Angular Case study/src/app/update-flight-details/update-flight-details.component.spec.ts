import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlightDetailsComponent } from './update-flight-details.component';

describe('UpdateFlightDetailsComponent', () => {
  let component: UpdateFlightDetailsComponent;
  let fixture: ComponentFixture<UpdateFlightDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlightDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
