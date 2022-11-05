import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBenComponent } from './info-ben.component';

describe('InfoBenComponent', () => {
  let component: InfoBenComponent;
  let fixture: ComponentFixture<InfoBenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
