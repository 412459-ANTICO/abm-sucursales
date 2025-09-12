import {Component, Input} from '@angular/core';
import {Sucursal} from '../../models/sucursal';

@Component({
  selector: 'app-sucursales-table',
  imports: [
  ],
  templateUrl: './sucursales-table.component.html',
  styleUrl: './sucursales-table.component.css'
})
export class SucursalesTableComponent {
  @Input() sucursales!: Sucursal[];
}
