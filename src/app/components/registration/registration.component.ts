import { Component, OnInit, inject } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  standalone: true,
  providers: [
    provideNgxMask()
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {

  updating: boolean = false;
  snack: MatSnackBar = inject(MatSnackBar);
  newUserForm!: FormGroup;

  constructor(
    private service: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

// trazer mensagem de erros dinamicas

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  createUser(): void {
    if (this.newUserForm.valid) {
      this.service.createUser(this.newUserForm.value).subscribe({
        next: (user) => {
          this.snack.open('Usuário cadastrado com sucesso!', 'Fechar', { duration: 3000 });
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.snack.open('Erro ao cadastrar usuário: ' + error.message, 'Fechar', { duration: 3000 });
        }
      });
    } else {
      this.snack.open('Por favor, preencha todos os campos corretamente.', 'Fechar', { duration: 3000 });
    }
  }

  resetForm(): void {
    this.newUserForm.reset();
  }
}
