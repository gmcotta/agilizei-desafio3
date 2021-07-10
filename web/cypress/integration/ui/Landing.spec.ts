/// <reference types="cypress" />

// const widths = [1200, 1090];

// widths.forEach(width => {
//   context('Landing Page', () => {
//     beforeEach(() => {
//       cy.viewport(width, 900);
//       cy.visit('/');
//       cy.log('Width: ', width);
//     });
//     it('should navigate to class registration', () => {
//       cy.get('div a.give-classes').click();
//       cy.url().should('contain', 'give-classes');
//     });
  
//     it('should navigate to teacher search', () => {
//       cy.get('div a.study').click();
//       cy.url().should('contain', 'study');
//     });
//   });
// });

context('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to class registration', () => {
    cy.get('div a.give-classes').click();
    cy.url().should('contain', 'give-classes');
  });

  it('should navigate to teacher search', () => {
    cy.get('div a.study').click();
    cy.url().should('contain', 'study');
  });
})
