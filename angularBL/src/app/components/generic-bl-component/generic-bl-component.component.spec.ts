import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericBLComponentComponent } from './generic-bl-component.component';

describe('GenericBLComponentComponent', () => {
  let component: GenericBLComponentComponent;
  let fixture: ComponentFixture<GenericBLComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericBLComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericBLComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
