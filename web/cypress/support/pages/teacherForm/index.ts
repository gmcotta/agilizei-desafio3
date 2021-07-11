import faker from 'faker';

import el from './elements';

faker.locale = 'pt_BR';

class TeacherForm {
  interceptPostClasses201() {
    cy.intercept('POST', '/classes').as('Post-Classes');
  }
  
  interceptPostClasses400() {
    cy.intercept('POST', '/classes', {
      statusCode: 400
    }).as('Post-Classes_BadRequest');
  }

  accessPage() {
    cy.visit('/give-classes');
  }

  fillForm() {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const avatar = faker.internet.avatar();
    const whatsapp = faker.phone.phoneNumber();
    const bio = faker.lorem.paragraph(1);
    const subject = 'Geografia';
    const cost = faker.datatype.number(150).toString();
    const weekDay = faker.datatype.number(6).toString();

    cy.get(el.inputName).type(name);
    cy.get(el.inputAvatar).type(avatar);
    cy.get(el.inputWhatsapp).type(whatsapp);
    cy.get(el.textareaBio).type(bio);
    cy.get(el.selectSubject).select(subject);
    cy.get(el.inputCost).type(cost);
    cy.get(el.selectWeekdayWithIndex(0)).select(weekDay);
    cy.get(el.inputFromWithIndex(0)).type("12:00");
    cy.get(el.inputToWithIndex(0)).type("14:00");
  }

  fillFormWithTwoSchedules() {
    const name = `${faker.name.firstName()} ${faker.name.lastName()}`;
    const avatar = faker.internet.avatar();
    const whatsapp = faker.phone.phoneNumber();
    const bio = faker.lorem.paragraph(1);
    const subject = 'Geografia';
    const cost = faker.datatype.number(150).toString();
    const weekDay1 = faker.datatype.number(6).toString();
    const weekDay2 = faker.datatype.number(6).toString();

    cy.get(el.buttonNewSchedule).click();
    cy.get(el.inputName).type(name);
    cy.get(el.inputAvatar).type(avatar);
    cy.get(el.inputWhatsapp).type(whatsapp);
    cy.get(el.textareaBio).type(bio);
    cy.get(el.selectSubject).select(subject);
    cy.get(el.inputCost).type(cost);

    cy.get(el.selectWeekdayWithIndex(0)).select(weekDay1);
    cy.get(el.inputFromWithIndex(0)).type("12:00");
    cy.get(el.inputToWithIndex(0)).type("14:00");
    
    cy.get(el.selectWeekdayWithIndex(1)).select(weekDay2);
    cy.get(el.inputFromWithIndex(1)).type("12:00");
    cy.get(el.inputToWithIndex(1)).type("14:00");

  }

  submitForm() {
    cy.get(el.buttonSubmit).click();
  }

  checkIfClassWasCreated() {
    cy.wait('@Post-Classes').then(({ response }) => {
      expect(response.statusCode).to.equal(201);
    });

    cy.on('window:alert', str => {
      expect(str).to.equal('Cadastro realizado com sucesso!');
    });

    cy.url().should('include', '/');
  }

  checkIfErrorHasOccurredWhileRegisterTeacher() {
    cy.wait('@Post-Classes_BadRequest').then(({ response }) => {
      expect(response.statusCode).to.equal(400);
    });

    cy.on('window:alert', str => {
      expect(str).to.equal('Erro no cadastro.');
    });
  }
}

export default TeacherForm;
