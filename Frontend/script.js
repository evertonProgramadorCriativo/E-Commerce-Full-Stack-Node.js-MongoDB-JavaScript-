function router() {
  const app = document.getElementById('app');
  const route = window.location.hash;

  if (route === '#/produtos') {
    app.innerHTML = `
      <h2>Lista de Produtos</h2>
      <button onclick="mostrarFormularioCriacao()">Novo Produto</button>
      <div id="produtos"></div>
    `;
    listarProdutos();
  }else if (route === '#/login') {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Login</h2>
    <input id="usuario" placeholder="Usuário"/><br>
    <input id="senha" type="password" placeholder="Senha"/><br>
    <button onclick="login()">Entrar</button>
    <br>
    <h2>Registrar</h2>
    <input id="usuarioReg" placeholder="Usuário"/><br>
    <input id="senhaReg" type="password" placeholder="Senha"/><br>
    <button onclick="registrar()">Registrar</button>
  `;
}
else {
    app.innerHTML = '<h2>Bem-vindo ao E-commerce</h2>';
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

function listarProdutos() {
  fetch('http://localhost:3000/api/produtos')
    .then(res => res.json())
    .then(produtos => {
      const div = document.getElementById('produtos');
      div.innerHTML = produtos.map(p => `
        <div>
          <p>${p.nome} - R$ ${p.preco}</p>
          <button onclick="deletarProduto('${p._id}')">Deletar</button>
          <button onclick="mostrarFormularioEdicao('${p._id}', '${p.nome}', '${p.descricao}', '${p.preco}')">Editar</button>
        </div>
      `).join('');
    });
}
function mostrarFormularioEdicao(id, nome, descricao, preco) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Editar Produto</h2>
    <input id="nome" value="${nome}" placeholder="Nome"><br>
    <input id="descricao" value="${descricao}" placeholder="Descrição"><br>
    <input id="preco" value="${preco}" placeholder="Preço" type="number"><br>
    <button onclick="editarProduto('${id}')">Salvar</button>
    <br>
    <button onclick="window.location.hash = '#/produtos'">Voltar</button>
  `;
}

function editarProduto(id) {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const preco = parseFloat(document.getElementById('preco').value);

  fetch(`http://localhost:3000/api/produtos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, descricao, preco })
  })
    .then(() => {
      alert('Produto atualizado com sucesso!');
      window.location.hash = '#/produtos';
    });
}


function deletarProduto(id) {
  fetch(`http://localhost:3000/api/deleteprodutos/${id}`, { method: 'DELETE' })
    .then(() => listarProdutos());
}

function mostrarFormularioCriacao() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Criar Produto</h2>
    <input id="nome" placeholder="Nome"><br>
    <input id="descricao" placeholder="Descrição"><br>
    <input id="preco" placeholder="Preço" type="number"><br>
    <button onclick="criarProduto()">Criar</button>
    <br>
    <button onclick="window.location.hash = '#/produtos'">Voltar</button>
  `;
}

function criarProduto() {
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const preco = parseFloat(document.getElementById('preco').value);

  fetch('http://localhost:3000/api/createprodutos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, descricao, preco })
  })
    .then(() => {
      alert('Produto criado com sucesso!');
      window.location.hash = '#/produtos';
    });
}

function login() {
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, senha })
  })
  .then(res => res.json())
  .then(data => alert(data.mensagem));
}

function registrar() {
  const usuario = document.getElementById('usuarioReg').value;
  const senha = document.getElementById('senhaReg').value;

  fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ usuario, senha })
  })
  .then(res => res.json())
  .then(data => alert(data.mensagem));
}
