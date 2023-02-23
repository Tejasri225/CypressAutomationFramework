describe("Test contact us form via WebdriverUni", () =>{
    it("Should be able to submit a successful submission via contact us form", () => {
   //cypress code
   cy.visit('http://www.webdriveruniversity.com/')
   cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
  // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
   cy.get('[name="first_name"]').type('Jungkook')
   cy.get('[name="last_name"]').type('Jeon')
   cy.get('[name="email"]').type('jk1997@gmail.com')
   cy.get('textarea.feedback-input').type('Hi,I am JK from BTS')
   cy.get('[type="submit"]').click()
   cy.get('h1').should('have.text', 'Thank You for your Message!')

});
      it.only("Shouldn't be able to submit a successful submission via contact us form as all fields are required", () => {
   //cypress code
   cy.visit('http://www.webdriveruniversity.com/')
   cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
   //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
   cy.get('[name="first_name"]').type('Jungkook')
   cy.get('[name="last_name"]').type('Jeon')
   //cy.get('[name="email"]').type('jk1997@gmail.com')
   cy.get('textarea.feedback-input').type('Hi,I am JK from BTS')
   cy.get('[type="submit"]').click()
   cy.get('body').contains('Error: all fields are required')

});
});
