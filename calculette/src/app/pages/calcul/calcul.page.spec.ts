import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculPage } from './calcul.page';

describe('CalculPage', () => {
  let component: CalculPage;
  let fixture: ComponentFixture<CalculPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
