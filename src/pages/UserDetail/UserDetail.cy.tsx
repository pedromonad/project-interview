import React from 'react';
import { Route, MemoryRouter, Routes } from 'react-router-dom';

import { UserDetail } from './UserDetail';

const arrangeTest = () => {
  return cy.mount(
    <MemoryRouter initialEntries={['/users/pedromonad']}>
      <Routes>
        <Route path="/users/:username" element={<UserDetail />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('UserDetail', () => {
  it('renders properly', () => {
    arrangeTest();

    cy.contains('Pedro Monad').should('exist');
    cy.contains('undefined').should('exist');

    cy.contains('company').should('exist');
    cy.contains('Toptal').should('exist');

    cy.contains('location').should('exist');
    cy.contains('Brazil').should('exist');

    cy.contains('email').should('exist');
    cy.contains('pedrobarrostech@gmail.com').should('exist');

    cy.contains('public_repos').should('exist');
    cy.contains(347).should('exist');

    cy.contains('public_gists').should('exist');
    cy.contains(45).should('exist');

    cy.contains('followers').should('exist');
    cy.contains(68).should('exist');
  });
});
