import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { SignalsComponent } from '../../components/signals/signals.component';
import { CompartirDatosComponent } from '../../components/compartir-datos/compartir-datos.component';

@Component({
  selector: 'app-home',
  imports: [SignalsComponent, CompartirDatosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corregido: styleUrl -> styleUrls
})
export class HomeComponent {
  title: string;
  mensaje: string;
  msjHijo: string;

  constructor() {
    this.title = 'Hola';
    this.mensaje = 'Tu';
    this.msjHijo = '';
  }

  recibirMensaje(mensaje: string) {
    this.msjHijo = mensaje;
  }
}
