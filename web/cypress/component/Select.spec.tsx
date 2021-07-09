import React from "react";
import { mount } from "@cypress/react";

import Select from '../../src/components/Select';
import '../../src/assets/styles/global.css';
import '../../src/components/Select/styles.css';

context('<Select />', () => {
  it('should render successfully without options', () => {
    const name = 'languages';
    const label = 'Languages';
    const options = [];

    mount(
      <Select name={name} label={label} options={options} />
    );

    cy.get('label').as('label');
    cy.get('select').as('select');

    cy.get('@label').should('have.text', label);
    cy.get('@label').invoke('attr', 'for').should('eq', name);

    cy.get('@select').should('have.id', name);
  });
  
  it('should render successfully with options', () => {
    const name = 'languages';
    const label = 'Languages';
    const options = [
      {
        label: 'JavaScript',
        value: 'javascript',
      },
      {
        label: 'HTML',
        value: 'html',
      },
      {
        label: 'CSS',
        value: 'css',
      },
    ];

    mount(
      <Select name={name} label={label} options={options} />
    );

    for(const option of options) {
      cy.get(`option[value="${option.value}"]`).as(option.value);
      cy.get(`@${option.value}`).should('have.text', option.label);
    }
  });
});
