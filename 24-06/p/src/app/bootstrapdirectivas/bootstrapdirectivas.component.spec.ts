import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapdirectivasComponent } from './bootstrapdirectivas.component';

describe('BootstrapdirectivasComponent', () => {
  let component: BootstrapdirectivasComponent;
  let fixture: ComponentFixture<BootstrapdirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapdirectivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapdirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
