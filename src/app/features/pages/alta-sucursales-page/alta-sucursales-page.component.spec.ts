import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSucursalesPageComponent } from './alta-sucursales-page.component';

describe('AltaSucursalesPageComponent', () => {
  let component: AltaSucursalesPageComponent;
  let fixture: ComponentFixture<AltaSucursalesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaSucursalesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaSucursalesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
