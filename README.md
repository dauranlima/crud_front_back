# React + Vite - CRUD de Produtos

Este é um projeto básico de CRUD (Create, Read, Update, Delete) de produtos utilizando React, Vite, Tailwind e Shadcn UI no frontend, e Express e MongoDB no backend.

## Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Edição de produtos
* Exclusão de produtos

## Tecnologias utilizadas

* Frontend:
	+ React
	+ Vite
	+ Tailwind
	+ Shadcn UI
* Backend:
	+ Express
	+ MongoDB

## Instalação e execução

### Frontend

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o comando `npm run dev` para iniciar o servidor de desenvolvimento

### Backend

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Execute o comando `npm start` para iniciar o servidor

## Rotas

* `/`: Página inicial com listagem de produtos
* `/produtos`: Página de cadastro de produtos
* `/produtos/:id`: Página de edição de produtos
* `/produtos/:id/excluir`: Página de exclusão de produtos

## API

* `GET /api/produtos`: Retorna a lista de produtos
* `POST /api/produtos`: Cadastra um novo produto
* `PUT /api/produtos/:id`: Edita um produto existente
* `DELETE /api/produtos/:id`: Exclui um produto existente

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum erro ou tiver alguma sugestão, por favor, abra uma issue ou faça um pull request.

## Licença

Este projeto é licenciado sob a licença MIT.