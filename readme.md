# README

Este é um projeto que requer a execução de alguns comandos e a configuração de um arquivo `.env` para ser iniciado corretamente. Por favor, siga as instruções abaixo para configurar e iniciar o projeto.

## Pré-requisitos

Certifique-se de ter o [PNPM](https://pnpm.io/) instalado globalmente na sua máquina antes de prosseguir.

## Instalação

1. Clone este repositório em sua máquina local.
2. Abra um terminal na raiz do projeto.

## Configuração do arquivo .env

Antes de iniciar o projeto, você precisa configurar o arquivo `.env`. Crie um arquivo chamado `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

```
DATABASE_URL=link_da_conexão_com_o_banco_de_dados
JWT_ENCRYPT=chave_de_encriptação_do_JWT
```

Certifique-se de substituir `link_da_conexão_com_o_banco_de_dados` pelo link da sua conexão com o banco de dados e `chave_de_encriptação_do_JWT` por uma chave de encriptação adequada para o JWT.

## Passos para iniciar o projeto

Execute os seguintes comandos na sequência abaixo para instalar as dependências e gerar o Prisma Client:

```bash
pnpm install
pnpm prisma generate
```

Após a instalação das dependências e a geração do Prisma Client, você pode iniciar o projeto usando o seguinte comando:

```bash
pnpm dev
```

Isso iniciará o projeto e você poderá acessá-lo no seu navegador através do endereço `http://localhost:3333`.

## Notas adicionais

Certifique-se de ter uma conexão de internet estável durante o processo de instalação, pois o PNPM precisará baixar as dependências necessárias.

Se você encontrar algum problema durante a instalação ou execução do projeto, verifique se todos os pré-requisitos foram atendidos, incluindo a correta configuração do arquivo `.env`, e consulte a documentação adicional fornecida para obter mais informações.

Divirta-se desenvolvendo o projeto!