/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {

        
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })
    it("Should be able to submit a successful submission via contact us form", () => {

        // cy.visit("http://www.webdriveruniversity.com")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        
        cy.typeInTextField('[name="first_name"]',data.first_name);
        cy.typeInTextField('[name="last_name"]',data.last_name);
        cy.typeInTextField('[name="email"]',data.email);
        cy.typeInTextField('textarea.feedback-input',data.body);
        cy.checkIfVisible('[type="submit"]');
        cy.clickButton('[type="submit"]');
        cy.checkTextContent('h1', 'Thank You for your Message!');
    });
})