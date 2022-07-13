const productsCart = [
  {
    id: 1,
    name: "Coca cola Zero",
    price: 7.0,
  },
  {
    id: 2,
    name: "Salgadinho Pippos",
    price: 7.5,
  },
  {
    id: 3,
    name: "Água de coco",
    price: 5.5,
  },
  {
    id: 4,
    name: "Goiaba verde",
    price: 5.8,
  },
  {
    id: 5,
    name: "Água de 5L",
    price: 6.0,
  },
];

let carrinho = [];

let vitrine = document.querySelector(".productTable");
showProducts(vitrine);

let lista = document.querySelector(".productList");
listProduct(productsCart, lista);

function createProduct(produto) {
  const nome = produto.name;
  const valor = produto.price;

  let li = document.createElement("li");
  let pNome = document.createElement("p");
  let spanValor = document.createElement("span");

  li.classList.add("productItem");

  pNome.innerText = nome;
  spanValor.innerText = `R$ ${valor}`;

  li.appendChild(pNome);
  li.appendChild(spanValor);

  return li;
}

function soma(soma) {
  let total = 0;
  for (let i = 0; i < soma.length; i++) {
    total += soma[i].price;
  }

  let totalBR = total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  return `${totalBR}`;
}

function showProducts(vitrine) {

    let total = soma(productsCart)
    console.log(total)
    let main = document.createElement("main");
    let ul = document.createElement("ul");
    let section = document.createElement("section");
    let pTotal = document.createElement("p")
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    let span = document.createElement("span");
    let spanPreco = document.createElement("span");
    let buttonFinalizar = document.createElement("button");

    section.classList.add("finalizeOrder");
    ul.classList.add("productList");
    p.classList.add("nameTable")

    spanPreco.innerText = total;
    h1.innerText = "Virtual Market";
    p.innerText = "Item";
    span.innerText = "Valor";
    pTotal.innerText = "Total";
    buttonFinalizar.innerText = "Finalizar compra";

    main.append(h1, p, ul, section);
    p.append(span)
    section.append(pTotal, buttonFinalizar);
    pTotal.append(spanPreco)
    vitrine.append(main);

    return vitrine;
}

function listProduct(produtos, vitrine) {
  for (let i = 0; i < produtos.length; i++) {
    let storage = produtos[i];
    let create = createProduct(storage);

    vitrine.appendChild(create);
  }
}


