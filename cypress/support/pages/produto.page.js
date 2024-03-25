const LBL_PRODUTO = 'h1'
const LBL_VALOR_PRODUTO = '.our_price_display'

Cypress.Commands.add('validarProduto', () => {
    let vlProduto
    const produto = Cypress.env('cenario').produto
    if (produto == 'Blouse') vlProduto = '$27'
    if (produto == 'Faded Short Sleeve T-shirts') vlProduto = '$17'
    cy.get(LBL_PRODUTO).should('contain', produto)
    cy.get(LBL_VALOR_PRODUTO).should('contain', vlProduto)
})