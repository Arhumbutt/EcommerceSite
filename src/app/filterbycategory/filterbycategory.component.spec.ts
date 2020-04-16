import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterbycategoryComponent } from './filterbycategory.component';

describe('FilterbycategoryComponent', () => {
  let component: FilterbycategoryComponent;
  let fixture: ComponentFixture<FilterbycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterbycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
