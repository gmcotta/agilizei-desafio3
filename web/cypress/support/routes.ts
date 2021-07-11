class Routes {
  alias: {
    POST_CLASSES_SUCCESS: 'Post-Classes',
    POST_CLASSES_BAD_REQUEST: 'Post-Classes_BadRequest'
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

  initAll() {
    this.initPostClassesSuccess();
    this.initPostClassesBadRequest();
  }
}

export default new Routes();
