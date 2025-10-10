import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/presentation/pages/login/login.component';
import { RegisterCollaboratorComponent } from './features/collaborators/presentation/pages/register-collaborator/register-collaborator.component';

export const routes: Routes = [
  //  Tela de login
  { path: 'login', component: LoginComponent },

  //  Tela de cadastro de colaboradores
  { path: 'collaborators/register', component: RegisterCollaboratorComponent },

  // Redirecionamento padrão
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
