import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVentureComponent } from './create-venture.component';

describe('CreateVentureComponent', () => {
  let component: CreateVentureComponent;
  let fixture: ComponentFixture<CreateVentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVentureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
