import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtureSetupComponent } from './fixture-setup.component';

describe('FixtureSetupComponent', () => {
  let component: FixtureSetupComponent;
  let fixture: ComponentFixture<FixtureSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixtureSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixtureSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
