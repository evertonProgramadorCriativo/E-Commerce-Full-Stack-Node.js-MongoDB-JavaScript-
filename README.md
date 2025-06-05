# 🛍️ E-Commerce Full Stack (Node.js + MongoDB + JavaScript)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-brightgreen)](https://www.mongodb.com/)

Um projeto **full-stack** de e-commerce desenvolvido com **Node.js (Express)**, **MongoDB** e frontend em **JavaScript puro**.  

🔗 **Demo** (se disponível): [](#)  

---

## 📌 Visão Geral  

Este projeto simula um e-commerce completo, incluindo:  
✔️ Autenticação de usuários e admin  
✔️ CRUD de produtos  
✔️ Carrinho de compras  
✔️ Simulação de pagamento via **PIX**  

---

## 📌 Descrição:

- Backend completo com Express, Mongoose, JWT.
- Níveis de usuário (cliente, admin, super admin).
- Frontend com SPA básica e área exclusiva de administração.
- CRUD de produtos, comentários e usuários.
- Autenticação e autorização via JWT.
- Preparado para expansão: carrinho de compras, pagamento Pix.

## 🛠️ Tecnologias  

| Backend         | Frontend       | Banco de Dados | Outros         |  
|-----------------|----------------|----------------|----------------|  
| Node.js + Express | HTML5 + CSS3   | MongoDB        | Git (GitHub)   |  
|                 | JavaScript (Vanilla) |                |                |  

---

## ⚙️ Funcionalidades  

### **1️⃣ Estrutura Básica**  
- Configuração inicial do backend (Express) e frontend estático.  

### **2️⃣ CRUD de Produtos**  
- **Create, Read, Update e Delete** de produtos (painel admin).  

### **3️⃣ Sistema de Login**  
- Autenticação de **usuário comum** e **administrador**.  

### **4️⃣ Carrinho de Compras**  
- Adicionar/remover produtos e cálculo de total.  

### **5️⃣ Pagamento via PIX (Simulado)**  
- Fluxo de checkout com simulação de pagamento.  

### **6️⃣ UI Responsiva**  
- Design adaptável para diferentes telas.  

---

## 🚀 Como Executar o Projeto  

### **Pré-requisitos**  
- Node.js (v18+)  
- MongoDB (local ou Atlas)  
- Git  

### **Passo a Passo**  

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/evertonProgramadorCriativo/E-Commerce-Full-Stack-Node.js-MongoDB-JavaScript-.git
   
   cd nome-do-repositorio 

2. **Rodando o Projeto**  
   ```bash

   node backend/app.js 

   #  Servidor funcionando: node backend/app.js
   #  Front-End acessível: index.html aberto no navegador

## 📂 Estrutura do Projeto

```bash
/ecommerce
├── /backend
│   ├── app.js              # Configuração do servidor Express
│   ├── routes.js          # Rotas da API para produtos
│   ├── routesUser.js      # Rotas da API para usuários e admins
│   ├── controllers.js     # Lógica dos endpoints de produtos
│   ├── controllersUser.js # Lógica dos endpoints de usuários e admins
│   ├── models.js          # Modelos do MongoDB (Produto, Comentário, etc.)
│   ├── modelsUser.js      # Modelo do MongoDB para Usuário com níveis
│   ├── authMiddleware.js  # Middleware de autenticação via JWT
│   └── autorizarNivel.js  # Middleware de autorização por nível de usuário
│
├── /frontend
│   ├── index.html         # Página principal
│   ├── style.css         # Estilos globais
│   ├── script.js         # Lógica frontend (carrinho, login, admin, etc.)
│   ├── /admin            # Páginas exclusivas do administrador
│   │   ├── painel.html   # Painel de administração
│   │   ├── painel.css    # Estilo do painel admin
│   │   └── painel.js     # Lógica de CRUD de produtos/admins
│   ├── /components       # Componentes reutilizáveis
│   │   ├── header.html   # Cabeçalho
│   │   └── footer.html   # Rodapé
│   └── /pages
│       ├── carrinho.html # Página do carrinho de compras
│       ├── login.html    # Página de login e registro
│       └── produtos.html # Página de listagem de produtos
│
├── package.json          # Dependências e scripts
├── .gitignore            # Arquivos ignorados pelo Git
├── README.md             # Documentação do projeto
└── .env                  # Variáveis de ambiente (como JWT_SECRET)
  
