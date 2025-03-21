import { Component, Input, input, output } from '@angular/core';
import { emit } from 'process';

@Component({
  selector: 'app-compartir-datos',
  imports: [],
  templateUrl: './compartir-datos.component.html',
  styleUrl: './compartir-datos.component.css',
})
export class CompartirDatosComponent {
  mensaje = input.required<string>();
  @Input() title: string;
  msjPadre = output<string>();

  constructor() {
    this.title = '';
  }

  enviarMsjPadre() {
    this.msjPadre.emit('Hola desde el HIJO');
  }
}
