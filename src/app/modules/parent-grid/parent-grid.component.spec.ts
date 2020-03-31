import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentGridComponent } from './parent-grid.component';

describe('ParentGridComponent', () => {
  let component: ParentGridComponent;
  let fixture: ComponentFixture<ParentGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
