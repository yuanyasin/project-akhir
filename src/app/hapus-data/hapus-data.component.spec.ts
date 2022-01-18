import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusDataComponent } from './hapus-data.component';

describe('HapusDataComponent', () => {
  let component: HapusDataComponent;
  let fixture: ComponentFixture<HapusDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HapusDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
