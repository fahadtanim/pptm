import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterProjectComponent } from './filter-project.component';

describe('FilterProjectComponent', () => {
  let component: FilterProjectComponent;
  let fixture: ComponentFixture<FilterProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
