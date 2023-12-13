//Leonardo Torquato em sua décima tentativa disso funcionar faltando 5h para a aula

const { produtos, categoria, usuarios } = require('./pizzaria');

const getUsuarios = function() {
  const usuariosLocais = [];
  const jsonUsuarios = {};
  let status = false;

  usuarios.cadastro.forEach(usuario => {
    usuariosLocais.push({
      nomeUsuario: usuario.nomeUsuario,
      email: usuario.email,
      telefone: usuario.telefone,
      localizacao: usuario.localizacao
    });
    status = true;
  });

  jsonUsuarios.usuarios = usuariosLocais;

  if (status) {

    return jsonUsuarios;
  } else {
    return false;
  }
};

console.log(getUsuarios)

const getCategorias = function() {
  const categoriasLocais = [];
  const jsonCategorias = {};
  let status = false;

  categoria.categoria.forEach(categoriaItem => {

    categoriasLocais.push({
      id: categoriaItem.id,
      nome: categoriaItem.nome,
      imagem: categoriaItem.imagem
    });
    status = true;
  })

  jsonCategorias.categorias = categoriasLocais;


  if (status) {

    return jsonCategorias;
  } else {
    return false;
  }
};



const getCardapio = function() {
  const pizzasLocais = [];
  const jsonCardapio = {};
  let status = false;



  produtos.forEach(pizza => {
    pizzasLocais.push({
      id: pizza.id,
      nome: pizza.nome,
      preco: pizza.preco,
      imagem: pizza.imagem,
      descricao: pizza.descricao
    });
    status = true;
  });


  jsonCardapio.pizzas = pizzasLocais;

  if (status) {
    return jsonCardapio;
  } else {
    return false;
  }
};
console.log(getCardapio()); 
console.log(getUsuarios()); 

console.log(getCategorias()); 

