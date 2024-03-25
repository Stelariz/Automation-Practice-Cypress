Given('que gero uma requisicaoa spaceX', () => {
    cy.requisicaoSpace()
})

Then('valido as informacoes no response', () => {
    cy.validarResponse()
})