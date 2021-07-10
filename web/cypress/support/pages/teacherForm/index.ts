import faker from 'faker';

import el from './elements';
import Routes from '../../routes';

faker.locale = 'pt_BR';

class TeacherForm {
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
    cy.get(el.selectWeekday).select(weekDay);
    cy.get(el.inputFrom).type("12:00");
    cy.get(el.inputTo).type("14:00");
  }

  submitForm() {
    cy.get(el.buttonSubmit).click();
  }

  checkIfClassWasCreated() {
    cy.wait(`@${Routes.alias.POST_CLASSES}`).then(({ response }) => {
      expect(response.statusCode).to.equal(201);
    });
    cy.url().should('include', '/');
  }
}

export default TeacherForm;
