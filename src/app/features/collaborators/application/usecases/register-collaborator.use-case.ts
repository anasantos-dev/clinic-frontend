import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { CollaboratorRepository } from '../../../../../domain/collaborators/repositories/collaborator.repository';
import { CollaboratorEntity } from '../../../../../domain/collaborators/entities/collaborator.entity';
import { CollaboratorMapper } from '../../data/mappers/collaborator.mapper';

@Injectable({ providedIn: 'root' })
export class RegisterCollaboratorUseCase {
  private readonly collaboratorRepository = inject(CollaboratorRepository);

  /**
   * Executes the registration of a new collaborator.
   * @param data Collaborator information to be registered.
   * @returns Observable with the created collaborator entity.
   */
  execute(data: CollaboratorEntity): Observable<CollaboratorEntity> {
    if (!data.corporateEmail || !data.password) {
      return throwError(() => new Error('Corporate email and password are required.'));
    }

    return this.collaboratorRepository.register(data).pipe(
      map((response) => {
        console.log('[RegisterCollaboratorUseCase] Registration successful:', response);
        return CollaboratorMapper.toEntity(response);
      }),
      catchError((error) => {
        console.error('[RegisterCollaboratorUseCase] Error while registering collaborator:', error);
        return throwError(() => new Error('Failed to register collaborator.'));
      }),
    );
  }
}
