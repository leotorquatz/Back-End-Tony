/****************************************************************************************************************************************************
 * Objetivo: Construção de API funcional para site TONY PIZZARIA
 * Data: 11/12/2023
 * Autor: Leonardo Torquato
 * Versão: 2.0
****************************************************************************************************************************************************/

var categoria = {
    categoria: [
      { id: 1, nome: "Pizzas", imagem: "" },
      { id: 2, nome: "Bebidas", imagem: "" },
      { id: 3, nome: "Frutas", imagem: "" },
      { id: 4, nome: "Brotinhos", imagem: "" },
      { id: 5, nome: "Sorvetes", imagem: "" },
      { id: 6, nome: "Sobremesas", imagem: "" }
    ]
  }
  
  var produtos = [
    {
      id: 1,
      nome: 'Pizza de calabreza com queijo',
      preco: 'R$ 16,00',
      imagem: 'Pizza1',
      descricao: 'Uma deliciosa combinação de calabresa suculenta e queijo muçarela derretido, perfeita para os amantes de sabores tradicionais.',
      categoria: 1,
      comentarios: [
        { usuario: "Carlos Eduardo", comentario: "Pizza show de bola!", estrelas: 4 },
      ]


    },
    {
      id: 2,
      nome: 'Pizza de pepperoni com queijo',
      preco: 'R$ 19,00',
      imagem: 'Pizza2',
      descricao: 'Delicie-se com a intensidade do pepperoni combinada com a cremosidade do queijo, uma explosão de sabor em cada mordida.',
      categoria: 1,
      comentarios: [
        { usuario: "Vitor Kolle", comentario: "Sabor meio estranho não gostei não, fiz até cara feia", estrelas: 1 },
        { usuario: "Ana Clara", comentario: "Amei muito.", estrelas: 5 },
      ]
    },
    {
      id: 3,
      nome: 'Pizza de calabreza com queijo',
      preco: 'R$ 26,00',
      imagem: 'Pizza3',
      descricao: 'Uma opção irresistível que une a suavidade do frango ao sabor marcante do catupiry, proporcionando uma experiência única.',
      categoria: 1,
      comentarios: [
        { usuario: "Vanderley Alves", comentario: "Pura bucha", estrelas: 3 }
      ]
    },
    {
      id: 4,
      nome: 'Pizza de mussarela',
      preco: 'R$ 22,00',
      imagem: 'Pizza4',
      descricao: 'A clássica pizza de mussarela, com ingredientes frescos e muçarela de alta qualidade.',
      categoria: 1,
      comentarios: [
        { usuario: "Marisa Torquato", comentario: "deliciosa.", estrelas: 4 },
        { usuario: "Cassia", comentario: "muita qualidade em uma só pizza", estrelas: 5 }
      ]
    },
    {
      id: 5,
      nome: 'Pizza vegetariana',
      preco: 'R$ 20,00',
      imagem: 'Pizza5',
      descricao: 'Uma opção saudável e deliciosa, com uma variedade de legumes frescos e queijo derretido.',
      categoria: 1,
      comentarios: [
        { usuario: "Iara Vieira", comentario: "Me lembra a pizza da bahia.", estrelas: 4 },
        { usuario: "Carlão DiPower", comentario: "Pizza meio sem sal", estrelas: 2 }
      ]
    }
  ]
  
  var usuarios = {
    cadastro: [
      {
        nomeUsuario: "Carlos Eduardo",
        email: "carloseduardo@gmail.com",
        senha: "carlaodofute",
        senhaConfirmacao: "carlaodofute",
        telefone: "1192747382",
        localizacao: {
          cidade: "Itapevi",
          estado: "SP",
          rua: "Rua das Rosas",
          complemento: "-",
        }
      },
      {
        nomeUsuario: "Marisa Torquato",
        email: "marisatorquato@gmail.com",
        senha: "marisa123",
        senhaConfirmacao: "marisa123",
        telefone: "11959435434",
        localizacao: {
          cidade: "Jandira",
          estado: "SP",
          rua: "Rua Sebastião Belo",
          complemento: "Casa 187",
        }
      },
      {
        nomeUsuario: "Matheus Alberto",
        email: "matheusalberto@gmail.com",
        senha: "9a8dasd4",
        senhaConfirmacao: "9a8asda654",
        telefone: "119873242342",
        localizacao: {
          cidade: "Jandira",
          estado: "SP",
          rua: "Rua Gabriella",
          complemento: "Casa 783",
        }
      },
      {
        nomeUsuario: "Leonardo Torquato",
        email: "leotorquatto1508@gmail.com",
        senha: "leotorquatto",
        senhaConfirmacao: "leotorquatto",
        telefone: "11987577456",
        localizacao: {
          cidade: "Jandira",
          estado: "SP",
          rua: "Rua Sebastião Belo 407",
          complemento: "-",
        }
      },
      {
        nomeUsuario: "Ana Clara Santos Rocha",
        email: "anaclarasantosrocha@icloud.com",
        senha: "anaclaradoleo",
        senhaConfirmacao: "anaclaradoleo",
        telefone: "11974328234",
        localizacao: {
          cidade: "Jandira",
          estado: "SP",
          rua: "Praia do Esquinovenica",
          complemento: "Apto 2",
        }
      }
    ]
  }
  
  module.exports = {
    produtos,
    categoria,
    usuarios
  }
   