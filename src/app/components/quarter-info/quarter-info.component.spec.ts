import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuarterInfoComponent } from './quarter-info.component';

describe('QuarterInfoComponent', () => {
  let component: QuarterInfoComponent;
  let fixture: ComponentFixture<QuarterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuarterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuarterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
