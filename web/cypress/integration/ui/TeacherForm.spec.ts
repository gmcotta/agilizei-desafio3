/// <reference types="cypress" />
import TeacherFormPageObject from "../../support/pages/teacherForm";
import routes from "../../support/routes";

const teacherFormPage = new TeacherFormPageObject();

context('Teacher Form Page', () => {
  context('should register a teacher', () => {
    it('with a single schedule', () => {
      routes.initPostClassesSuccess();
      teacherFormPage.accessPage();
      
      teacherFormPage.fillForm();
      teacherFormPage.submitForm();
      
      teacherFormPage.checkIfClassWasCreated();
    });
    
    it('with multiple schedules', () => {
      routes.initPostClassesSuccess();
      teacherFormPage.accessPage();
  
      teacherFormPage.fillFormWithTwoSchedules();
      teacherFormPage.submitForm();
  
      teacherFormPage.checkIfClassWasCreated();
    });
  });
  it('should give an error response while register a teacher', () => {
    routes.initPostClassesBadRequest();
    teacherFormPage.accessPage();

    teacherFormPage.fillForm();
    teacherFormPage.submitForm();

    teacherFormPage.checkIfErrorHasOccurredWhileRegisterTeacher();
  });
});
