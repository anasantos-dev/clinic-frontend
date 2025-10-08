# 🖥️ Clinic Frontend

Aplicação **frontend** do sistema de gestão de clínica** 🏥  
Desenvolvida em **Angular 20+**, responsável pela interface utilizada por **médicos, colaboradores e pacientes**, garantindo uma experiência fluida, moderna e integrada ao backend.

---

## 🚀 Tecnologias Utilizadas / Tech Stack

- [Angular](https://angular.dev/) (v20+)
- TypeScript
- Angular Forms (template-driven e reactive)
- Angular Router
- CSS / SCSS
- Integração com o backend via **HttpClient**
- Gerenciamento de ambiente com arquivos `.env` ou `environment.ts`

---

## ⚙️ Como Rodar o Projeto Localmente / How to Run Locally

```bash
# Clone o repositório
git clone https://github.com/sua-org/clinic-frontend.git
cd clinic-frontend

# Instale as dependências
npm install

🧩 Executar o projeto / Run the app

Você pode usar qualquer um dos comandos abaixo, conforme sua configuração local:
# Opção 1 (padrão Angular)
ng serve

# Opção 2 (caso tenha script "start" configurado)
npm run start

Após a compilação, o app ficará disponível em:
👉 http://localhost:4200

📂 Estrutura de Pastas / Folder Structure
src/
├── app/
│   ├── core/               # Serviços centrais, interceptors, guards
│   ├── shared/             # Componentes e módulos reutilizáveis
│   ├── features/
│   │   ├── login/          # Tela de login e autenticação
│   │   ├── dashboard/      # Painel principal após login
│   │   ├── patients/       # Módulo de gestão de pacientes
│   │   └── schedule/       # Agenda médica
│   ├── app.component.ts
│   ├── app.module.ts
│   └── app-routing.module.ts
└── assets/                 # Imagens, ícones e estilos globais

Principais Funcionalidades / Core Features
✅ Tela de Login Responsiva
Integração direta com a API de autenticação do backend (/auth/login)
