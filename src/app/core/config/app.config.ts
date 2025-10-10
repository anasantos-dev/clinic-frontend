import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from '../../app.routes';
import { CollaboratorRepository } from '../../../domain/collaborators/repositories/collaborator.repository';
import { CollaboratorImplementationRepository } from '../../features/collaborators/data/repositories/collaborator-implementation.repository';

//  Importa o repositório abstrato e sua implementação concreta


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideHttpClient(withFetch()),

    //  Aqui registramos o provider do repositório
    { provide: CollaboratorRepository, useClass: CollaboratorImplementationRepository },
  ],
};
