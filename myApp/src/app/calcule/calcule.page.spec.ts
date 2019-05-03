import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculePage } from './calcule.page';

describe('CalculePage', () => {
  let component: CalculePage;
  let fixture: ComponentFixture<CalculePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
