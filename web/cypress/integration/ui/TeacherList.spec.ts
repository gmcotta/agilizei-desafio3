/// <reference types="cypress" />
import TeacherListPageObject from "../../support/pages/teacherList";

const teacherListPage = new TeacherListPageObject();

context('Teacher List Page', () => {
  it('should register a teacher', () => {
    teacherListPage.accessPage();

    teacherListPage.fillForm();
    teacherListPage.submitForm();

    teacherListPage.checkIfShowsAvailableTeacherList();
  });

  it('should check if createNewConnection was called', () => {
    teacherListPage.interceptPostConnections201();
    teacherListPage.accessPage();

    teacherListPage.fillForm();
    teacherListPage.submitForm();
    teacherListPage.clickOnContactLink();

    teacherListPage.checkIfCreateNewConnectionWasCalled();
  });
});
