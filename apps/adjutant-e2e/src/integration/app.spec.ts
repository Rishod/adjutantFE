import { getGreeting } from '../support/app.po';

describe('adjutant', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to adjutant!');
  });
});
