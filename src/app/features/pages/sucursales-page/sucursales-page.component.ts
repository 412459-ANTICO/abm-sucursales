import {Component, OnInit} from '@angular/core';
import {MetricCardComponent} from '../../../shared/metric-card/metric-card.component';
import {SucursalesTableComponent} from '../../../shared/sucursales-table/sucursales-table.component';
import {SucursalesService} from '../../../core/sucursales/sucursales.service';
import {Sucursal} from '../../../models/sucursal';
import {SucursalFormComponent} from '../../../shared/sucursal-form/sucursal-form.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-sucursales-page',
  imports: [
    MetricCardComponent,
    SucursalesTableComponent
  ],
  templateUrl: './sucursales-page.component.html',
  styleUrl: './sucursales-page.component.css'
})
export class SucursalesPageComponent implements OnInit {

  constructor(private sucrusalesService: SucursalesService, private dialog: MatDialog) {}

  sucursales: Sucursal[] = [];
  responsables: number = 0;
  emails: number = 0;

  abrirModal() {
    this.dialog.open(SucursalFormComponent, {
      width: '500px'
    });
  }

  ngOnInit() {
    this.sucrusalesService.getSucursales().subscribe({
      next: sucursales => {
        this.sucursales = sucursales;

        const responsablesUnicos = new Set(sucursales.map(s => s.responsable));
        this.responsables = responsablesUnicos.size;

        const emailsUnicos = new Set(sucursales.map(s => s.email));
        this.emails = emailsUnicos.size;
      },
      error: error => {
        console.log(error);
      }
    });

  }

  protected readonly String = String;
}
