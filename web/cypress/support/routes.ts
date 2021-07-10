class Routes {
  alias = {
    POST_CLASSES: 'Post-Classes',
  }

  init() {
    cy.intercept('POST', '**/classes').as(this.alias.POST_CLASSES);
  }
}

export default new Routes();
