import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
  effect,
  Inject,
  Injector,
} from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  //SEÑALES GRABABLES:
  // Declaración de la señal con el tipo correcto
  count: WritableSignal<number> = signal(0);
  showCount: WritableSignal<boolean> = signal(false);

  //SEÑALES CALCULADAS
  //Las señales calculadas son señales de solo lectura que derivan su valor de otras señales.
  // Las señales calculadas se definen mediante el computed y especificando una derivación:
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  constructor(private inyector: Injector) {
    // Modificar la señal directamente
    this.count.set(5);

    //los efectos son operaciones que se ejecutan cuando cambia una señal
    effect(() => {
      console.log(`Count changed to: ${this.count()}`);
    });
  }
  // Modificar la señal con una función
  mostrarValorCount(): void {
    this.count.update((value) => value + 1);
  }

  //para crear un efecto fuera del constructor es necesario pasarle un inyector como parametro
  mostrarMensaje(): void {
    effect(
      () => {
        console.log(this.doubleCount() * 2);
      },
      { injector: this.inyector }
    );
  }
}
