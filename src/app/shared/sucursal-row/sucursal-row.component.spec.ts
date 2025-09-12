import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalRowComponent } from './sucursal-row.component';

describe('SucursalRowComponent', () => {
  let component: SucursalRowComponent;
  let fixture: ComponentFixture<SucursalRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SucursalRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucursalRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
