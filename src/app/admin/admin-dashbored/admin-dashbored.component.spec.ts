import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboredComponent } from './admin-dashbored.component';

describe('AdminDashboredComponent', () => {
  let component: AdminDashboredComponent;
  let fixture: ComponentFixture<AdminDashboredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminDashboredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDashboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
