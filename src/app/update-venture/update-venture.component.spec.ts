import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVentureComponent } from './update-venture.component';

describe('UpdateVentureComponent', () => {
  let component: UpdateVentureComponent;
  let fixture: ComponentFixture<UpdateVentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVentureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
