/// <reference types="cypress" />
import TeacherFormPageObject from "../../support/pages/teacherForm";

const teacherFormPage = new TeacherFormPageObject();

context('Teacher Form Page', () => {
  context('should register a teacher', () => {
    it('with a single schedule', () => {
      teacherFormPage.interceptPostClasses201();
      teacherFormPage.accessPage();
      
      teacherFormPage.fillForm();
      teacherFormPage.submitForm();
      
      teacherFormPage.checkIfClassWasCreated();
    });
    
    it('with multiple schedules', () => {
      teacherFormPage.interceptPostClasses201();
      teacherFormPage.accessPage();
  
      teacherFormPage.fillFormWithTwoSchedules();
      teacherFormPage.submitForm();
  
      teacherFormPage.checkIfClassWasCreated();
    });
  });
  it('should give an error response while register a teacher', () => {
    teacherFormPage.interceptPostClasses400();
    teacherFormPage.accessPage();

    teacherFormPage.fillForm();
    teacherFormPage.submitForm();

    teacherFormPage.checkIfErrorHasOccurredWhileRegisterTeacher();
  });
});
