/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
  it('GET- should fetch total number of connections', () => {
    cy.api({
      url: `${Cypress.config().apiUrl}/connections`,
      method: 'GET'
    }).then(response => {
      expect(response.status).to.equal(200);
      expect(response.duration).lessThan(20);

      expect(response.body)
        .to.have.property('total')
        .to.be.a('number')
        .greaterThan(5);
      expect(response.body.total)
        .an('number')
        .satisfy(totalValue => totalValue >= 5);

      expect(response.headers)
        .to.have.property('content-type')
        .an('string')
        .equal('application/json; charset=utf-8')
    });
  });
});
