import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

interface Producto {
  nombre: string;
  costo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  productos: Producto[] = [
    { nombre: "yerba", costo: "$20" },
    { nombre: "azúcar", costo: "$50" },
    { nombre: "leche", costo: "$30"}
  ];

  mostrarDatos = false;

  funcMostrarDatos() {
    this.mostrarDatos = !this.mostrarDatos;
  }
}
