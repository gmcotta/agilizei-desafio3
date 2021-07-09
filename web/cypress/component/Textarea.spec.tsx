/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import Textarea from '../../src/components/Textarea';
import '../../src/assets/styles/global.css';
import '../../src/components/Textarea/styles.css';

context('<Textarea />', () => {
  it('should render successfully', () => {
    const label = 'Description';
    const name = 'description';
    const textareaValue = 'Some description';

    mount(
      <Textarea label={label} name={name} />
    );

    cy.get('label').as('label');
    cy.get('textarea').as('textarea');

    cy.get('@label').should('have.text', label);
    cy.get('@label').invoke('attr', 'for').should('eq', name);

    cy.get('@textarea').should('have.id', name);
    cy.get('@textarea').type(textareaValue).should('have.value', textareaValue);
  });
});

