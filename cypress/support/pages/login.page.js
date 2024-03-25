const INPUT_EMAIL = '#email'
const INPUT_SENHA = '#passwd'
const BTN_LOGIN = '#SubmitLogin'

Cypress.Commands.add('realizarLogin', () => {
    cy.get(INPUT_EMAIL).type(Cypress.env('usuario'), {log: false})
    cy.get(INPUT_SENHA).type(Cypress.env('senha'), {log: false})
    cy.get(BTN_LOGIN).click()
})