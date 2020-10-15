/// <reference types="cypress" />

describe('My first test suite', () => {
    // it('Testing Inline Form', () => {
    //     cy.visit('/');
    //     cy.contains('Forms').click();
    //     cy.contains('Form Layouts').click();

    //     cy.contains('nb-card','Inline form').get('[placeholder="Jane Doe"]').type("Rahmad Alfian Maskuri");
    //     cy.contains('nb-card', 'Inline form').find('[placeholder="Email"]').type("RahmadAlfian@gmail.com");
    //     cy.contains('nb-card', 'Inline form').find('.custom-checkbox').click();
    //     cy.contains('nb-card', 'Inline form').find('[type="submit"]').click();
    //     cy.url().should('include', 'forms/layouts?')

    // }); 
    
    // it('Testing Using the Grid',() => {
    //     cy.visit('/');
    //     cy.contains('Forms').click();
    //     cy.contains('Form Layouts').click();
    //     cy.contains('nb-card', 'Using the Grid').get('[data-cy="imputEmail1"]').type("RahmadAlfian@gmail.com");
    //     cy.get('#inputPassword2').click().type("Rahmad");
    //     cy.contains('nb-card', 'Using the Grid').contains("Option 1").parent('nb-radio').find('.inner-circle').click();
    //     cy.contains('nb-card', 'Using the Grid').contains("Option 2").parent('nb-radio').find('.inner-circle').click();
    //     cy.contains('nb-card', 'Using the Grid').contains("Disabled Option").parent('nb-radio').find('.inner-circle').click();
    //     cy.contains('nb-card', 'Using the Grid').find('[type="submit"]').click();
    //     cy.url().should('include', 'forms/layouts?');
    // });

    // it('Testing Form without labels',() => {
    //     cy.visit('/');
    //     cy.contains('Forms').click();
    //     cy.contains('Form Layouts').click();
    //     cy.contains('nb-card', 'Form without labels').get('[placeholder = "Recipients"]').type("RahmadAlfian");
    //     cy.contains('nb-card', 'Form without labels').get('[placeholder = "Subject"]').type("Subjek Testing");
    //     cy.contains('nb-card', 'Form without labels').get('[placeholder = "Message"]').type("Pesan Testing");
    //     cy.contains('nb-card', 'Form without labels').find('[type="submit"]').click();
    //     cy.url().should('include', 'forms/layouts?');
    // });

});