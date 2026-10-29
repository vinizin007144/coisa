const produtos = [
    {
      nome: "Notebook",
      categoria: "Eletrônicos",
      quantidade: 10,
      preco: 3500.00
    },
    {
        nome: "Mouse",
      categoria: "Acessórios",
      quantidade: 25,
      preco: 89.90
    },
    {
        nome: "Teclado",
      categoria: "Acessórios",
      quantidade: 15,
      preco: 149.90
    },
    {
        nome: "Monitor",
      categoria: "Eletrônicos",
      quantidade: 8,
      preco: 1200.00
    },
    {
        nome: "Cadeira",
      categoria: "Móveis",
      quantidade: 12,
      preco: 750.00
    },
    {
        nome: "Mesa",
      categoria: "Móveis",
      quantidade: 5,
      preco: 950.00
    },
    {
        nome: "Fone de ouvido",
      categoria: "Áudio",
      quantidade: 20,
      preco: 199.90
    },
    {
        nome: "Webcam",
      categoria: "Eletrônicos",
      quantidade: 10,
      preco: 279.90
    }
  ];

  const corpoTabela = document.getElementById("corpoTabela")

  for (let produto of produtos){
    const linha = document.createElement("tr")

    linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    corpoTabela.appendChild(linha)
  }