import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRespComponent } from './system-resp.component';

describe('SystemRespComponent', () => {
  let component: SystemRespComponent;
  let fixture: ComponentFixture<SystemRespComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemRespComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemRespComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
