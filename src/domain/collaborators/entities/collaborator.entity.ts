/**
 * Entidade de domínio que representa um Colaborador.
 *
 * Essa camada é totalmente isolada da infraestrutura ou framework.
 * Ela define apenas os dados e comportamentos centrais do domínio.
 */
export interface CollaboratorEntity {
  // 🧍‍♂️ Dados pessoais
  nomeCompleto: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;

  // 💼 Dados profissionais
  matricula: string;
  cargo: string;
  especialidade: string;
  dataAdmissao: string;

  // 🔐 Dados de acesso
  emailCorporativo: string;
  senha: string;
  confirmacaoSenha: string;
  nivelAcesso: string;

  // ⚙️ Dados adicionais
  ativo: boolean;
}
