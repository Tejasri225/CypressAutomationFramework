describe("Test contact us form via automation-teststore", () =>{
    it("Should be able to submit a successful submission via contact us form", () => {

   cy.visit('https://automationteststore.com/');
   //cy.get('.info_links_footer > :nth-child(5) > a').click();
   cy.get("a[href$='contact']").click().then(function(linkText){
    console.log('Clicked on link using text:' +linkText.text())
   });
   //cy.xpath("//afcontains (@href, 'contact')]").click();
 cy.get('#ContactUsFrm_first_name').type("Joe");
 cy.get('#ContactUsFrm_email').type("abc@123gmail.com");
 cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
 cy.get("button[title='Submit']").click();
 cy.get('.mb40 >:nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
  
 

});
     
});
