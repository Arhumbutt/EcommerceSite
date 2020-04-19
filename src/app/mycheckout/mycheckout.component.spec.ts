import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycheckoutComponent } from './mycheckout.component';

describe('MycheckoutComponent', () => {
  let component: MycheckoutComponent;
  let fixture: ComponentFixture<MycheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
