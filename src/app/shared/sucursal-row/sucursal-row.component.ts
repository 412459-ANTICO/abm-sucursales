import {Component, Input} from '@angular/core';
import {Sucursal} from '../../models/sucursal';

@Component({
  selector: 'app-sucursal-row',
  imports: [],
  templateUrl: './sucursal-row.component.html',
  styleUrl: './sucursal-row.component.css'
})
export class SucursalRowComponent {
  @Input() sucursal!: Sucursal;
}
