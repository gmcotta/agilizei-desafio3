/// <reference types="cypress" />

import React from "react";
import { mount } from "@cypress/react";

import TeacherItem from '../../src/components/TeacherItem';
import { Teacher } from "../../src/components/TeacherItem";
import '../../src/assets/styles/global.css';
import '../../src/components/TeacherItem/styles.css';

context('<TeacherItem />', () => {
  it('should render successfully', () => {
    const teacher: Teacher = {
      id: 1,
      avatar: 'teacher avatar',
      bio: 'Simple Bio',
      cost: 50,
      name: 'Teacher name',
      subject: 'Teacher subject',
      whatsapp: 123456789,
    };

    mount(
      <TeacherItem teacher={teacher} />
    );

    cy.get('header > img').as('teacherImage');
    cy.get('div > strong').as('teacherName');
    cy.get('span').as('teacherSubject');
    cy.get('.teacher-item > :nth-child(2)').as('teacherBio');
    cy.get('p > strong').as('teacherCost');
    cy.get('a').as('teacherContact');

    cy.get('@teacherImage').invoke('attr', 'src').should('eq', teacher.avatar);
    cy.get('@teacherImage').invoke('attr', 'alt').should('eq', teacher.name);
    cy.get('@teacherSubject').should('have.text', teacher.subject);
    cy.get('@teacherName').should('have.text', teacher.name);
    cy.get('@teacherBio').should('have.text', teacher.bio);
    cy.get('@teacherCost').should('have.text', `R$${teacher.cost}`);
    cy.get('@teacherContact').invoke('attr', 'href')
      .should('eq', `https://wa.me/${teacher.whatsapp}`);
  });
});
