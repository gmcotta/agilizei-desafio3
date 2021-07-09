/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import Input from '../../src/components/Input';
import '../../src/assets/styles/global.css';
import '../../src/components/Input/styles.css';

context('<Input />', () => {
  before(() => {
    cy.viewport(1366,768);
  });

  it('should render successfully', () => {
    const label = 'Name';
    const name = 'name';
    const givenName = 'Gustavo';
    
    mount(
      <Input label={label} name={name} />
    );

    cy.get('label').as('label');
    cy.get('input').as('input');

    cy.get('@label').should('have.text', label);
    cy.get('@label').invoke('attr', 'for').should('eq', name);

    cy.get('@input').should('have.id', name);
    cy.get('@input').type(givenName).should('have.value', givenName);
  });
});
