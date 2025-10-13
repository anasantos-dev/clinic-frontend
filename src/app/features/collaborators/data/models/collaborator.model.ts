import { CollaboratorEntity } from '../../../../../domain/collaborators/entities/collaborator.entity';

/**
 * Model que representa o formato esperado pela API e
 * serve de ponte entre a Entity (domínio) e a camada de dados (HTTP).
 */
export interface CollaboratorModel {
  // Dados pessoais
  nome_completo: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;

  // Dados profissionais
  matricula: string;
  cargo: string;
  especialidade: string;
  data_admissao: string;

  // Dados de acesso
  email_corporativo: string;
  senha: string;
  confirmacao_senha: string;
  nivel_acesso: string;

  // Dados adicionais
  ativo: boolean;
}

/**
 * Mapper utilitário para converter entre o domínio (Entity)
 * e o formato da API (Model).
 *
 * O objetivo é alinhar o front (português) com o back (inglês).
 */
export class CollaboratorMapper {
  static toModel(entity: CollaboratorEntity): CollaboratorModel {
    return {
      nome_completo: entity.fullName,
      cpf: entity.cpf,
      telefone: entity.phone,
      data_nascimento: entity.birthDate,
      matricula: entity.registration,
      cargo: entity.position,
      especialidade: entity.specialty,
      data_admissao: entity.admissionDate,
      email_corporativo: entity.corporateEmail,
      senha: entity.password,
      confirmacao_senha: (entity as any).confirmPassword ?? '',
      nivel_acesso: entity.accessLevel,
      ativo: entity.active,
    };
  }

  static toEntity(model: CollaboratorModel): CollaboratorEntity {
    return {
      fullName: model.nome_completo,
      cpf: model.cpf,
      phone: model.telefone,
      birthDate: model.data_nascimento,
      registration: model.matricula,
      position: model.cargo,
      specialty: model.especialidade,
      admissionDate: model.data_admissao,
      corporateEmail: model.email_corporativo,
      password: model.senha,
      confirmPassword: model.confirmacao_senha,
      accessLevel: model.nivel_acesso,
      active: model.ativo,
    };
  }
}
