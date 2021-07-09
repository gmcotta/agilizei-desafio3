/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
  it('POST - should register a new teacher', () => {
    const body = {
      name: "Professor João",
      avatar: "https://pickaface.net/gallery/avatar/20160625_050020_889_FAKE.png",
      whatsapp: "11 1234156789",
      bio: "Alguma bio aí...",
      subject: "Matemática",
      cost: 50,
      schedule: [
        {
          "week_day":"5",
          "from":"19:00",
          "to":"20:00"
        },
        {
          "week_day":"6",
          "from":"10:00",
          "to":"12:00"
        }
      ]
    };

    cy.api({
      url: `${Cypress.config().apiUrl}/classes`,
      method: 'POST',
      body,
    }).then(response => {
      expect(response.status).to.equal(201);
      expect(response.duration).lessThan(300);
      expect(response.headers)
        .to.have.property('content-type')
        .an('string')
        .equal('application/json; charset=utf-8')

      response.body.map((data, index) => {
        expect(data.week_day).an('string').equal(body.schedule[index].week_day);
      });
    });
  });
});
