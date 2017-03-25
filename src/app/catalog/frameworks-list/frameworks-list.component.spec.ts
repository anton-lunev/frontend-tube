import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksListComponent } from './frameworks-list.component';

xdescribe('FrameworksListComponent', () => {
  let component: FrameworksListComponent;
  let fixture: ComponentFixture<FrameworksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
