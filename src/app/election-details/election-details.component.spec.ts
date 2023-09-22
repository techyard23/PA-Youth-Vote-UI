import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionDetailsComponent } from './election-details.component';

describe('ElectionDetailsComponent', () => {
  let component: ElectionDetailsComponent;
  let fixture: ComponentFixture<ElectionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectionDetailsComponent]
    });
    fixture = TestBed.createComponent(ElectionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
