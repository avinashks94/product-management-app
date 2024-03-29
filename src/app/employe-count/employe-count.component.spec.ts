import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeCountComponent } from './employe-count.component';

describe('EmployeCountComponent', () => {
  let component: EmployeCountComponent;
  let fixture: ComponentFixture<EmployeCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
