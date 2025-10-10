import { CollaboratorEntity } from '../../../../../domain/collaborators/entities/collaborator.entity';

/**
 * Model que representa o formato esperado pela API e
 * serve de ponte entre a Entity (domínio) e a camada de dados (HTTP).
 */
export interface CollaboratorModel {
  // 🧍‍♂️ Dados pessoais
  nome_completo: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;

  // 💼 Dados profissionais
  matricula: string;
  cargo: string;
  especialidade: string;
  data_admissao: string;

  // 🔐 Dados de acesso
  email_corporativo: string;
  senha: string;
  confirmacao_senha: string;
  nivel_acesso: string;

  // ⚙️ Dados adicionais
  ativo: boolean;
}

/**
 * Mapper utilitário para converter entre o domínio (Entity)
 * e o formato da API (Model).
 */
export class CollaboratorMapper {
  static toModel(entity: CollaboratorEntity): CollaboratorModel {
    return {
      nome_completo: entity.nomeCompleto,
      cpf: entity.cpf,
      telefone: entity.telefone,
      data_nascimento: entity.dataNascimento,
      matricula: entity.matricula,
      cargo: entity.cargo,
      especialidade: entity.especialidade,
      data_admissao: entity.dataAdmissao,
      email_corporativo: entity.emailCorporativo,
      senha: entity.senha,
      confirmacao_senha: entity.confirmacaoSenha,
      nivel_acesso: entity.nivelAcesso,
      ativo: entity.ativo,
    };
  }

  static toEntity(model: CollaboratorModel): CollaboratorEntity {
    return {
      nomeCompleto: model.nome_completo,
      cpf: model.cpf,
      telefone: model.telefone,
      dataNascimento: model.data_nascimento,
      matricula: model.matricula,
      cargo: model.cargo,
      especialidade: model.especialidade,
      dataAdmissao: model.data_admissao,
      emailCorporativo: model.email_corporativo,
      senha: model.senha,
      confirmacaoSenha: model.confirmacao_senha,
      nivelAcesso: model.nivel_acesso,
      ativo: model.ativo,
    };
  }
}
