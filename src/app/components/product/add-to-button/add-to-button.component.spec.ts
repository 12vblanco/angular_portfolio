import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToButtonComponent } from './add-to-button.component';

describe('AddToButtonComponent', () => {
  let component: AddToButtonComponent;
  let fixture: ComponentFixture<AddToButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
