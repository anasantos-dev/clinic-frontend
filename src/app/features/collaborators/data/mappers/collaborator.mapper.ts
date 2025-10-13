import { CollaboratorEntity } from "../../../../../domain/collaborators/entities/collaborator.entity";

export class CollaboratorMapper {
  /**
   * Transforma a resposta da API (DTO ou JSON cru) em uma entidade de domínio.
   */
  static toEntity(response: any): CollaboratorEntity {
    return new CollaboratorEntity({
      fullName: response.fullName || response.nomeCompleto,
      cpf: response.cpf,
      phone: response.phone || response.telefone,
      birthDate: response.birthDate || response.dataNascimento,
      registration: response.registration || response.matricula,
      position: response.position || response.cargo,
      specialty: response.specialty || response.especialidade,
      admissionDate: response.admissionDate || response.dataAdmissao,
      corporateEmail: response.corporateEmail || response.emailCorporativo,
      password: response.password || response.senha,
      confirmPassword: response.confirmPassword || response.confirmacaoSenha,
      accessLevel: response.accessLevel || response.nivelAcesso,
      active: response.active ?? response.ativo ?? true,
    });
  }

  /**
   * Transforma a entidade de domínio em um objeto pronto para envio (request) à API.
   */
  static toRequest(entity: CollaboratorEntity): any {
    return {
      fullName: entity.fullName,
      cpf: entity.cpf,
      phone: entity.phone,
      birthDate: entity.birthDate,
      registration: entity.registration,
      position: entity.position,
      specialty: entity.specialty,
      admissionDate: entity.admissionDate,
      corporateEmail: entity.corporateEmail,
      password: entity.password,
      confirmPassword: entity.confirmPassword,
      accessLevel: entity.accessLevel,
      active: entity.active,
    };
  }
}
