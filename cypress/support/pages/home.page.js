const BTN_ACESSA_LOGIN = '.login'
const BTN_CONTA = '.account'
const BTN_WOMEN = 'a[title="Women"]'

Cypress.Commands.add('acessarLogin', () => {
    cy.get(BTN_ACESSA_LOGIN).click ()
})

Cypress.Commands.add('validarLogin', () => {
    cy.get(BTN_CONTA).should('be.visible')
    cy.screenshot('usuario_logado')
})

Cypress.Commands.add('acessarCategoriaWomen', () => {
    cy.get(BTN_WOMEN).should('be.visible')
    cy.get(BTN_WOMEN).click()
    cy.url().should('contain', 'index.php?id_category=3&controller=category')
    cy.screenshot(`${Cypress.spec.name}/tela_women`)
})