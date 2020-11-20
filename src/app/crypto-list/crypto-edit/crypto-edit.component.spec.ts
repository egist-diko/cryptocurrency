import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoEditComponent } from './crypto-edit.component';

describe('CryptoEditComponent', () => {
  let component: CryptoEditComponent;
  let fixture: ComponentFixture<CryptoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
