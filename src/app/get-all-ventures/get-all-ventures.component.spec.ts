import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVenturesComponent } from './get-all-ventures.component';

describe('GetAllVenturesComponent', () => {
  let component: GetAllVenturesComponent;
  let fixture: ComponentFixture<GetAllVenturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllVenturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllVenturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
