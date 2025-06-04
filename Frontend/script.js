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
  } else if (route === '#/login') {
    app.innerHTML = '<h2>Login</h2><input placeholder="Usuário"/><br><input type="password" placeholder="Senha"/>';
  } else {
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
        </div>
      `).join('');
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
