import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/presentation/pages/login/login.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // funciona com standalone
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
