
Cypress.Commands.add('requisicaoSpace', () => {
    cy.request({
        method: 'POST',
        url: 'https://spacex-production.up.railway.app/',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            query:`
            query Rockets {
                rockets {
                    type
                    active
                    country
                    name
                }
            }
            `,
        },
    }).then(response => {
        expect(response.status).to.eq(200)
        Cypress.env('responseData', response)
    })
})

Cypress.Commands.add('validarResponse', () => {
const response = Cypress.env('responseData');
const { status, body} = response;

if (status == 200) {
    expect(status).to.eq(200);
    let corpoResponse = JSON.stringify(body);
    cy.log(corpoResponse);
    expect(corpoResponse).to.include('Starship')

}

})