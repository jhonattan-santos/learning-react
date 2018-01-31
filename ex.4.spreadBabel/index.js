const produto = {
    name: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.name = 'Caneta Bic Azul'
novoProduto.preco = 2.00

console.log(produto, novoProduto)