const BTN_PRODUTO = '.product-container'

Cypress.Commands.add('validarQtdProdutos', () => {
    cy.get(BTN_PRODUTO).should('have.length', Cypress.env('cenario').qtdProdutos)
})

Cypress.Commands.add('clicarProduto', () => {
    cy.intercept('index.php?rand=**').as('telaProduto')
    cy.get(BTN_PRODUTO).contains(Cypress.env('cenario').produto).click()
    //cy.wait('@telaProduto').its('response.statusCode').should('eq', 200)
})