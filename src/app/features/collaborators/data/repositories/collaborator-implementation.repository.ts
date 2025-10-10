import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../../environments/environment';

import { CollaboratorRepository } from '../../../../../domain/collaborators/repositories/collaborator.repository';
import { CollaboratorEntity } from '../../../../../domain/collaborators/entities/collaborator.entity';
import { CollaboratorMapper } from '../models/collaborator.model';

/**
 * Implementação concreta do CollaboratorRepository,
 * responsável por integrar com a API real via HttpClient.
 */
@Injectable({ providedIn: 'root' })
export class CollaboratorImplementationRepository implements CollaboratorRepository {
  private readonly baseUrl = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  register(data: CollaboratorEntity): Observable<CollaboratorEntity> {
    const model = CollaboratorMapper.toModel(data);

    return this.http.post(`${this.baseUrl}/collaborators`, model).pipe(
      map((response: any) => {
        console.log('[CollaboratorRepository] Resposta da API:', response);
        return CollaboratorMapper.toEntity(response);
      })
    );
  }
}
