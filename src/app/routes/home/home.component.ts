import {
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { SignalsComponent } from '../../components/signals/signals.component';

@Component({
  selector: 'app-home',
  imports: [SignalsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Corregido: styleUrl -> styleUrls
})
export class HomeComponent {}
