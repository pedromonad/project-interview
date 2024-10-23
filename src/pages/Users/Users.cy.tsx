import React from 'react';
import { Users } from './Users';

const arrangeTest = () => {
  return cy.mount(<Users />);
};

describe('Users', () => {
  describe('when searches by username shows the user found ', () => {
    it('redirects to users detail page after clicks on it', () => {
      arrangeTest();

      cy.get('input[placeholder="Search by github username"]').type('pedromonad');

      cy.contains('Pedro Monad').should('exist');
      cy.contains('undefined').should('exist');

      cy.contains('Pedro Monad').click();

      cy.url().should('include', '/users/pedromonad');
    });
  });
});
