import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CollaboratorRepository } from '../../../../../domain/collaborators/repositories/collaborator.repository';
import { CollaboratorEntity } from '../../../../../domain/collaborators/entities/collaborator.entity';

@Injectable({ providedIn: 'root' })
export class RegisterCollaboratorUseCase {
  private readonly collaboratorRepository = inject(CollaboratorRepository);

  /**
   * Executa o cadastro de um novo colaborador.
   * @param data Dados do colaborador a serem cadastrados.
   * @returns Observable com o colaborador criado.
   */
  execute(data: CollaboratorEntity): Observable<CollaboratorEntity> {
    if (!data.emailCorporativo || !data.senha) {
      return throwError(() => new Error('Email e senha são obrigatórios.'));
    }

    return this.collaboratorRepository.register(data).pipe(
      map((result: CollaboratorEntity) => {
        console.log('[RegisterCollaboratorUseCase] Cadastro realizado com sucesso:', result);
        return result;
      }),
      catchError((error) => {
        console.error('[RegisterCollaboratorUseCase] Erro ao cadastrar colaborador:', error);
        return throwError(() => new Error('Falha ao cadastrar colaborador.'));
      })
    );
  }
}
