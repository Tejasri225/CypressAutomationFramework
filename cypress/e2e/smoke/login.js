///<reference types="Cypress" />
describe("Test contact us form via webdriveruni",() =>{  
        
     it("should be able to submit a successful submission via contact us formas all requrired",()=>{ 

            cy.fixture('testData.json').then((records) => {                       
            const filteredRecords = records.filter((record) =>           
             record.status === 'Yes');  
                     
              filteredRecords.forEach((record)=>{
                                
                  cy.visit("http://www.webdriveruniversity.com")               
                  cy.get('#contact-us').invoke('removeAttr','target').click({force:true})             
                  cy.typeInTextField('[name="first_name"]',record.first_name)
                  cy.typeInTextField('[name="last_name"]',record.last_name)
                  cy.typeInTextField('[name="email"]',record.email)
                  cy.typeInTextField('textarea.feedback-input',record.body)
                  cy.checkIfVisible('[type="submit"]')
                  cy.clickButton('[type="submit"]')
                  cy.checkTextContent('h1','Thank You for your Message!')   
                 });
                })
            });
        });