import {Component, Input} from '@angular/core';
import {Sucursal} from '../../../models/sucursal';

@Component({
  selector: 'app-sucursales-list',
  imports: [],
  templateUrl: './sucursales-list.component.html',
  styleUrl: './sucursales-list.component.css'
})
export class SucursalesListComponent {
  @Input() sucursales!: Sucursal[];
}
