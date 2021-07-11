/// <reference types="cypress" />
class Routes {
  alias = {
    POST_CLASSES_SUCCESS: 'Post-Classes',
    POST_CLASSES_BAD_REQUEST: 'Post-Classes_BadRequest',
    POST_CONNECTIONS_SUCCESS: 'Post-Connections',
  }

  initPostClassesSuccess() {
    cy.intercept('POST', '/classes')
      .as(this.alias.POST_CLASSES_SUCCESS);
  }

  initPostClassesBadRequest() {
    cy.intercept('POST', '/classes', {
      statusCode: 400
    }).as(this.alias.POST_CLASSES_BAD_REQUEST);
  }

  initPostConnectionsSuccess() {
    cy.intercept('POST', '/connections')
      .as(this.alias.POST_CONNECTIONS_SUCCESS);
  }

  initAll() {
    this.initPostClassesSuccess();
    this.initPostClassesBadRequest();
    this.initPostConnectionsSuccess();
  }
}

export default new Routes();
