import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressbarPageComponent } from './progressbar-page.component';

describe('ProgressbarPageComponent', () => {
  let component: ProgressbarPageComponent;
  let fixture: ComponentFixture<ProgressbarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressbarPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressbarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
