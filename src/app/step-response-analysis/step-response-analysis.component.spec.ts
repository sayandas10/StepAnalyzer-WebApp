import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepResponseAnalysisComponent } from './step-response-analysis.component';

describe('StepResponseAnalysisComponent', () => {
  let component: StepResponseAnalysisComponent;
  let fixture: ComponentFixture<StepResponseAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepResponseAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepResponseAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
