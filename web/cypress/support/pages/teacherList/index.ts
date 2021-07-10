import el from './elements';

class TeacherList {
  accessPage() {
    cy.visit('/study');
  }

  fillForm() {
    cy.get(el.selectSubject).select('Geografia');
    cy.get(el.selectWeekday).select('4');
    cy.get(el.inputTime).type('12:00');
  }

  submitForm() {
    cy.get(el.buttonSearch).click();
  }

  checkIfShowsAvailableTeacherList() {
    cy.get(':nth-child(1) > header > img')
      .invoke('attr', 'src')
      .should('contain', 'https://cdn.fakercloud.com/avatars/mrxloka_128.jpg');
    cy.get(':nth-child(1) > header > img')
      .invoke('attr', 'alt')
      .should('contain', 'Pedro Moraes');
    
    cy.get(':nth-child(1) > header > div>strong')
      .should('contain.text', 'Pedro Moraes');

    cy.get(':nth-child(1) > header > div > span')
      .should('contain.text', 'Geografia');

    cy.get(':nth-child(1) > p')
      .should('contain.text', 'Occaecati rem dolores dignissimos aliquam placeat ducimus laborum veniam. Ab eum neque unde beatae est ipsum nihil aliquam.');
    
    cy.get(':nth-child(1) > footer > p > strong')
      .should('contain.text', 'R$58');

    cy.get(':nth-child(1) > footer > a')
      .invoke('attr', 'href')
      .should('contain', 'https://wa.me/(77) 01403-0500');
  }
}

export default TeacherList;
