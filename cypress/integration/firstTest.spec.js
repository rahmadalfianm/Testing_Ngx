/// <reference types="cypress" />

describe('My first test suite', () => {
    it('Testing Inline Form', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card','Inline form').find('[placeholder="Jane Doe"]').click().type("Rahmad Alfian Maskuri");

        cy.contains('nb-card', 'Inline form').find('[placeholder="Email"]').click().type("RahmadAlfian@gmail.com");

        cy.contains('nb-card', 'Inline form').find('.custom-checkbox').click();

        cy.contains('nb-card', 'Inline form').find('[type="submit"]').click();

        cy.url().should('include', 'forms/layouts?')

    }); 
    
    it('Testing Using the Grid',() => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid').find('[data-cy="imputEmail1"]').click().type("RahmadAlfian@gmail.com");
        
        cy.get('#inputPassword2').click().type("Rahmad");

        cy.contains('nb-card', 'Using the Grid').contains("Option 1").parent('nb-radio').find('.inner-circle').click();
        cy.contains('nb-card', 'Using the Grid').contains("Option 2").parent('nb-radio').find('.inner-circle').click();
        cy.contains('nb-card', 'Using the Grid').contains("Disabled Option").parent('nb-radio').find('.inner-circle').click();

        cy.contains('nb-card', 'Using the Grid').find('[type="submit"]').click();
        cy.url().should('include', 'forms/layouts?');

    });

});