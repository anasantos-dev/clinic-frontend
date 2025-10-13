import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RegisterCollaboratorUseCase } from '../../../application/usecases/register-collaborator.use-case';
import { CollaboratorEntity } from '../../../../../../domain/collaborators/entities/collaborator.entity';


@Component({
  selector: 'app-register-collaborator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-collaborator.component.html',
  styleUrls: ['./register-collaborator.component.css'],
})
export class RegisterCollaboratorComponent {
  collaborator: CollaboratorEntity = {
    fullName: '',
    cpf: '',
    phone: '',
    birthDate: '',
    registration: '',
    position: '',
    specialty: '',
    admissionDate: '',
    corporateEmail: '',
    password: '',
    confirmPassword: '',
    accessLevel: '',
    active: true,
  };

  constructor(private readonly registerUseCase: RegisterCollaboratorUseCase) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.registerUseCase.execute(this.collaborator).subscribe({
      next: (result) => {
        alert(` Colaborador ${result.fullName} cadastrado com sucesso!`);
        form.resetForm();
      },
      error: (error) => {
        console.error(' Erro no cadastro:', error);
        alert('Erro ao cadastrar colaborador.');
      },
    });
  }
}
