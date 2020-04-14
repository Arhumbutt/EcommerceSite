import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedproductsComponent } from './listedproducts.component';

describe('ListedproductsComponent', () => {
  let component: ListedproductsComponent;
  let fixture: ComponentFixture<ListedproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
