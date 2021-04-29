// Scenario: Common search

Given(/^I'm at Google$/, () => {
    cy.visit('/')
    cy.contains('button','Aceito').click({ waitForAnimations: false })
});

When('I type search word {string}', (query) => {
    cy.get('input[type=text]') // 2 seconds
        .type(query);
});

And(/^Press 'Search'$/, () => {

    cy.get('input[value="Pesquisa Google"]').first().click();
});

Then(/^I have some results$/, () => {
    cy.get('h3').its('length').then((length) => {
        expect(length).to.be.greaterThan(5);
    });
});
