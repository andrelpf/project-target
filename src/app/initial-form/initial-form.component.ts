import { User, Errors } from './../interfaces/initial-form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.scss']
})
export class InitialFormComponent implements OnInit {
  public form!: FormGroup;
  public errors: Errors[] = [];
  public users: User[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      tel: ['', Validators.required]
    });
  }

  /**
   * Método de enviar formulário
   */
  onSubmit(): void {
    // Valida o formulário
    this.validateForm();
    // Se não tiver erros
    if (!this.errors?.length) {
      // Insere novo user
      this.users.push(this.form.value);
      // Limpa form
      this.limparForm();
    }
  }

  /**
   * Validar formulário
   */
  validateForm(): void {
    // Reset de erros
    this.errors = [];
    // Controls do form
    const controls = this.form.controls;
    // Campos
    const keys = Object.keys(controls);
    // Para cada campo
    keys.forEach((key) => {
      // Encontra os erros
      let errors = controls[key].errors;
      // tem erro?
      if (errors !== null) {
        // Para cada error
        Object.keys(errors).forEach((errorKey) => {
          // Inserimos no nosso array
          this.errors.push({ field: key, error: errorKey })
        })
      }
    })
  }

  /**
   * Recuperar erro
   * @param field campo string
   * @returns erro
   */
  getError(field: string): string | undefined {
    // Busca o campo na variavel de erros
    let error = this.errors?.find((err) => err.field === field)?.error;
    // Caso seja um erro required
    if (error == 'required') {
      return `Campo obrigatório`;
    }
    // Retorna o erro
    return error;
  }

  /**
   * Limpar formulário
   */
  limparForm(): void {
    this.form.reset();
  }

}
