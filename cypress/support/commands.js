// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
  cy.visit("/")
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => {
  cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
})


Cypress.Commands.add("selectProduct", productName => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    if ($el.text().includes(productName)) {
      cy.wrap($el).click()
    }
  })
})

Cypress.Commands.add("addProductToBasket", productName => {
  cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if($el.text() === productName) {
          cy.log($el.text())
          cy.get('.productcart').eq(index).click();
      }
  });
});

Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
  cy.get('[name="email"]').type(email)
  cy.get('textarea.feedback-input').type(comment)
  cy.get('[type="submit"]').click();
  cy.get($selector).contains(textToLocate)
})

      // Reusable method for inputting text into a text field
      Cypress.Commands.add('typeInTextField', (selector, text) => {
      cy.get(selector).clear().type(text);
     });

    // Reusable method for selecting a value from a dropdown list
    Cypress.Commands.add('selectFromDropdown', (selector, value) => { 
       cy.get(selector).select(value);
      });
       // Reusable method for clicking a button
      Cypress.Commands.add('clickButton', (selector) => {
          cy.get(selector).click();
      });
       // Reusable method for checking if an element is visible
      Cypress.Commands.add('checkIfVisible', (selector) => { 
         cy.get(selector).should('be.visible');
        }); 
        // Reusable method for checking if an element contains expected text
        Cypress.Commands.add('checkTextContent', (selector, text) => {
            cy.get(selector).should('contain', text);
        });
       //Reusable method for drag and drop
        Cypress.Commands.add('dragAndDrop',  (subject, target) => {
            cy.get(subject).trigger('mousedown', { which: 1 });
            cy.get(target).trigger('mousemove').trigger('mouseup', { force: true });
          });

          //Reusable method for double click  
          Cypress.Commands.add('doubleClick', (selector) => {  
            cy.get(selector).dblclick();  
          });

        //Reusable method for Autosuggestion list
        Cypress.Commands.add('autoSuggestTextfield', (selector, value,suggestedlist_sel,inp_txt) => {
          cy.get(selector).type(value)
          cy.get(suggestedlist_sel).each(($el,index,$list) => {    
            const prod =$el.text();    
            const productToSelect=inp_txt;   
             if(prod===productToSelect){    
          // $el.click();    
          $el.trigger("click");  
          } 
       })   
       });
       //Reusble method for confirm alert
       Cypress.Commands.add('confirmAlert', (selector, boolean) => { 
         cy.get(selector).click() 
         cy.on('window:confirm',(str)=>{  
           return boolean;
        }); 
      }); 
      //Reusble method for alert
      Cypress.Commands.add('alert', (selector, text) => {  
        cy.get(selector).click()  
        cy.on('window:alert',(str)=>{expect(str).to.equal(text)   
           return true;
          })
         });
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })