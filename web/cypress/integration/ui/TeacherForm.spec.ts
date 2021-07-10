/// <reference types="cypress" />
import TeacherFormPageObject from "../../support/pages/teacherForm";

const teacherFormPage = new TeacherFormPageObject();

context('Teacher Form Page', () => {
  it('should register a teacher', () => {
    teacherFormPage.accessPage();

    teacherFormPage.fillForm();
    teacherFormPage.submitForm();

    teacherFormPage.checkIfClassWasCreated();
  });
});
