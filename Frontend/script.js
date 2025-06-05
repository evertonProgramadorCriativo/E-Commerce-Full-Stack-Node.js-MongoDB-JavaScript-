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
}else if (route === '#/admin') {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Administração</h2>
  <button onclick="mostrarFormularioCriacao()">Novo Produto</button>
  <button onclick="listarProdutos()">Listar Produtos</button>
  <button onclick="mostrarFormularioCriacaoAdmin()">Criar Novo Admin</button>
  <br><br>
  <button onclick="listarUsuarios(0)">Listar Usuários Comuns</button>
  <button onclick="listarUsuarios(1)">Listar Admins Nível 1</button>
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

 function listarUsuarios(nivel) {
  const token = localStorage.getItem('token');

  fetch(`http://localhost:3000/api/usuarios/${nivel}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(usuarios => {
    const app = document.getElementById('app');
    app.innerHTML += `<h3>Usuários Nível ${nivel}</h3>`;
    app.innerHTML += usuarios.map(u => `
      <p>
        ${u.usuario} - Nível ${u.nivel}
        <button onclick="deletarUsuario('${u._id}')">Deletar</button>
        <button onclick="mostrarPromocaoUsuario('${u._id}', '${u.usuario}')">Promover</button>
      </p>
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

  const token = localStorage.getItem('token');

  fetch('http://localhost:3000/api/createprodutos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
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
  .then(data => {
    alert(data.mensagem);
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  });
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

function mostrarFormularioCriacaoAdmin() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <h2>Criar Admin</h2>
    <input id="usuarioAdmin" placeholder="Usuário"><br>
    <input id="senhaAdmin" type="password" placeholder="Senha"><br>
    <select id="nivelAdmin">
      <option value="1">Admin</option>
      <option value="2">Super Admin</option>
    </select><br>
    <button onclick="criarAdmin()">Criar</button>
  `;
}

function criarAdmin() {
  const usuario = document.getElementById('usuarioAdmin').value;
  const senha = document.getElementById('senhaAdmin').value;
  const nivel = parseInt(document.getElementById('nivelAdmin').value);

  const token = localStorage.getItem('token');

  fetch('http://localhost:3000/api/createadmin', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ usuario, senha, nivel })
  })
  .then(res => res.json())
  .then(data => alert(data.mensagem));
}

function deletarUsuario(id) {
  const token = localStorage.getItem('token');

  fetch(`http://localhost:3000/api/usuarios/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    alert(data.mensagem);
    window.location.hash = '#/admin';
  });
}


function mostrarPromocaoUsuario(id, usuario) {
  const novoNivel = prompt(`Digite o novo nível para ${usuario}: (0 - comum, 1 - admin, 2 - super admin)`);

  if (novoNivel !== null) {
    promoverUsuario(id, parseInt(novoNivel));
  }
}

function promoverUsuario(id, nivel) {
  const token = localStorage.getItem('token');

  fetch(`http://localhost:3000/api/usuarios/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ nivel })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.mensagem);
    window.location.hash = '#/admin';
  });
}
