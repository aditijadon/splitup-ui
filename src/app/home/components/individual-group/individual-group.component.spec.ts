import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualGroupComponent } from './individual-group.component';

describe('IndividualGroupComponent', () => {
  let component: IndividualGroupComponent;
  let fixture: ComponentFixture<IndividualGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
