/// <reference types="cypress" />

import React from 'react';
import { mount } from '@cypress/react';
import { BrowserRouter } from 'react-router-dom';

import PageHeader from '../../src/components/PageHeader';
import '../../src/assets/styles/global.css';
import '../../src/components/PageHeader/styles.css';


context('<PageHeader />', () => {
  before(() => {
    cy.viewport(1366,768);
  });
  
  it('should render successfully', () => {
    const title = "Que incrível que você quer dar aulas." ;
    const description = "O primeiro passo é preencher esse formulário de inscrição.";
    mount(
      <BrowserRouter>
        <PageHeader 
          title={title}
          description={description}
        />
      </BrowserRouter>
    );

    cy.get('strong').as('title');
    cy.get('p').as('description');
    cy.get('.page-header').as('header');

    // cy.get('@header').find('strong').as('title');
    // cy.get('@header').children('p').as('description');

    cy.get('@title').should('have.text', title);
    cy.get('@description').should('have.text', description);
    cy.get('@header').then($element => {
      expect($element.css('background-color'))
        .to.be.equal('rgb(130, 87, 229)');
    });
  });
});
