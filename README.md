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
│   ├── app.js         # Configuração do servidor Express
│   ├── routes.js      # Definição das rotas da API
│   ├── controllers.js # Lógica dos endpoints
│   └── models.js      # Modelos do MongoDB
│
├── /frontend
│   ├── index.html     # Página principal
│   ├── style.css      # Estilos globais
│   └── script.js      # Lógica frontend (carrinho, login, etc.)
│
├── package.json       # Dependências e scripts
└── .gitignore         # Arquivos ignorados pelo Git   