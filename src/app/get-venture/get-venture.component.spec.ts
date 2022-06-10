import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetVentureComponent } from './get-venture.component';

describe('GetVentureComponent', () => {
  let component: GetVentureComponent;
  let fixture: ComponentFixture<GetVentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetVentureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
