import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClientComponent } from './filter-client.component';

describe('FilterClientComponent', () => {
  let component: FilterClientComponent;
  let fixture: ComponentFixture<FilterClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
