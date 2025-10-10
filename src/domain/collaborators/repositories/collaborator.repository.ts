import { Observable } from 'rxjs';
import { CollaboratorEntity } from '../entities/collaborator.entity';


/**
 * Contrato de repositório responsável pelas operações relacionadas a colaboradores.
 * Define os métodos que a camada de aplicação pode chamar sem conhecer os detalhes da API.
 */
export abstract class CollaboratorRepository {
  /**
   * Registra um novo colaborador no sistema.
   * @param data Dados do colaborador a serem cadastrados.
   * @returns Retorna um Observable com a entidade criada.
   */
  abstract register(data: CollaboratorEntity): Observable<CollaboratorEntity>;
}
