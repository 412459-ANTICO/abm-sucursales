import {Component, Input} from '@angular/core';
import {Sucursal} from '../../models/sucursal';
import {SucursalRowComponent} from '../sucursal-row/sucursal-row.component';

@Component({
  selector: 'app-sucursales-table',
  imports: [
    SucursalRowComponent
  ],
  templateUrl: './sucursales-table.component.html',
  styleUrl: './sucursales-table.component.css'
})
export class SucursalesTableComponent {
  @Input() sucursales!: Sucursal[];
}
