function router() {
  const app = document.getElementById('app');
  const route = window.location.hash;

  if (route === '#/produtos') {
    app.innerHTML = '<h2>Lista de Produtos</h2><div id="produtos"></div>';
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
  fetch(`http://localhost:3000/api/produtos/${id}`, { method: 'DELETE' })
    .then(() => listarProdutos());
}

