
And('acesso a categoria Women', () => {
    cy.acessarCategoriaWomen()
})

And('valido a quantidade de produtos em tela', () => {
    cy.validarQtdProdutos()
})

And('acesso o produto', produto => {
    cy.clicarProduto()
})

Then('realizo as validacoes do produto', () => {
    cy.validarProduto()
})