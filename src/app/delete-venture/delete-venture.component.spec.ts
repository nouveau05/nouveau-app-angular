import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVentureComponent } from './delete-venture.component';

describe('DeleteVentureComponent', () => {
  let component: DeleteVentureComponent;
  let fixture: ComponentFixture<DeleteVentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVentureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteVentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
