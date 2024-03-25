import { cenarios } from '../fixtures/cenarios.fixture'
 
before(() => {
    const nomeSpec = Cypress.spec.name
    const id = nomeSpec.replace(/\D/g, '')
    const func = nomeSpec.replace(/\d/g, '').replace('-.feature', '')
    if (cenarios[func] != undefined) Cypress.env('cenario', cenarios[func][id])
})