import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { ApiService } from "./api.service";

@Component({
  selector: 'app-tela-calcular',
  templateUrl: './tela-calcular.component.html',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  styleUrls: ['./tela-calcular.component.scss']
})
export class TelaCalcularComponent {
  somaForm: FormGroup;
  resultado: any;
  erro: string | null = null;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.somaForm = this.fb.group({
      valor1: [null],
      valor2: [null]
    });
  }

  calcular(): void {
    const formValue = this.somaForm.value;
    if (formValue.valor1 == null || formValue.valor2 == null) {
      this.erro = 'Preencha os valores.';
      return;
    }
    this.apiService.calcularSoma(formValue)
      .then(res => {
        this.resultado = res.resultado;
        console.log(res)
        this.erro = null;
      })
      .catch(() => {
        this.erro = 'Erro ao calcular.';
        this.resultado = null;
      });
  }
  limpar(): void {
    this.somaForm.reset();
    this.resultado = null;
    this.erro = null;
  }
}
