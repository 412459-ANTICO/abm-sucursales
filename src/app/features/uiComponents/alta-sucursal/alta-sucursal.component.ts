import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Sucursal} from '../../../models/sucursal';

@Component({
  selector: 'app-alta-sucursal',
  imports: [
    FormsModule
  ],
  templateUrl: './alta-sucursal.component.html',
  styleUrl: './alta-sucursal.component.css'
})
export class AltaSucursalComponent {

  @Output() sucursal: EventEmitter<Sucursal> = new EventEmitter();

  nombre?: string;
  direccion?: string;


  submitForm(){
    if(!this.nombre || !this.direccion){
      alert("Por favor, rellene todos los campos");
      return;
    }

    const sucursal: Sucursal = {
      nombre: this.nombre,
      direccion: this.direccion,
    }

    this.sucursal.emit(sucursal);
  }
}
