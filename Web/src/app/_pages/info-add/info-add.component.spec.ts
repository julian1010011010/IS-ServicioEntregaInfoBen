import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAddComponent } from './info-add.component';

describe('InfoAddComponent', () => {
  let component: InfoAddComponent;
  let fixture: ComponentFixture<InfoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
