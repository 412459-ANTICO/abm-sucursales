import {Component} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';
import {AltaSucursalComponent} from '../../uiComponents/alta-sucursal/alta-sucursal.component';
import {SucursalesListComponent} from '../../uiComponents/sucursales-list/sucursales-list.component';
import {Sucursal} from '../../../models/sucursal';
import {SucursalesService} from '../../../core/sucursales/sucursales.service';

@Component({
  selector: 'app-alta-sucursales-page',
  imports: [
    NgClass,
    NgStyle,
    AltaSucursalComponent,
    SucursalesListComponent
  ],
  templateUrl: './alta-sucursales-page.component.html',
  styleUrl: './alta-sucursales-page.component.css'
})
export class AltaSucursalesPageComponent {

  selected: 'op1' | 'op2' = 'op1';
  sucursales: Sucursal[] = [];

  constructor(private sucursalesService: SucursalesService) {
  }

  onSucursalCreada(sucursal: Sucursal) {
    this.sucursalesService.postSucursal(sucursal).subscribe({
      next: data => {
        if(data){
          alert("La sucursal se ha creado correctamente");
          this.obtenerSucursales();
        }
      },
      error: error => {
        console.log(error);
        alert("Ha habido un error al crear la sucursal");
      }
    });
  }

  obtenerSucursales() {

    this.selected = 'op2';

    this.sucursalesService.getSucursales().subscribe({
      next: (data: Sucursal[]) => {
        this.sucursales = data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
