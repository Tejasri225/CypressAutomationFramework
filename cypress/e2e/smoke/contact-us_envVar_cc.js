/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(function() {
        cy.fixture('example').then(function(data) {
            //this.data = data;
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        cy.visit("/"+"Contact-Us/contactus.html")
       // cy.visit(Cypress.env("webdriveruni_homepg")+"/Contact-Us/contactus.html")
    });
    it("Should be able to submit a successful submission via contact us form", () => {
        
        //cy.visit("/"+"Contact-Us/contactus.html")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn Cypress?", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        
        // cy.visit("/")
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
       
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');
    });
})