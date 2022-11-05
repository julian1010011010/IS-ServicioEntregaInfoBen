import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConComponent } from './info-con.component';

describe('InfoConComponent', () => {
  let component: InfoConComponent;
  let fixture: ComponentFixture<InfoConComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
