import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';  
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.email && this.password) {  
      this.authService.login(this.email, this.password).subscribe({  
        next: (response) => {
          console.log('Login bem-sucedido!', response);
          alert('Login feito com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao fazer login', err);
          alert('Falha no login. Verifique suas credenciais.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}