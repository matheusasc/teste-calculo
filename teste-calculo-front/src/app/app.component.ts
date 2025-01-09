import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {TelaCalcularComponent} from "./tela-calcular/tela-calcular.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TelaCalcularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
