import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdtComponent } from './info-adt.component';

describe('InfoAdtComponent', () => {
  let component: InfoAdtComponent;
  let fixture: ComponentFixture<InfoAdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAdtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
