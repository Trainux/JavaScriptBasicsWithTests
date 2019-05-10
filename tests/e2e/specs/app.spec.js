
describe('Button Tests', function() {
  it('View Rafa Info', function() {
    cy.visit('/');
    cy.get('.js-searchName').type('Rafa');
    cy.get('.js-userInfo').click();
    cy.get('.js-userDetail').contains('Name: Rafa');
    cy.get('.js-userDetail').contains('Role: senior');
    cy.get('.js-userDetail').contains('Level:');

  });
  it('View Trino Info', function() {
    cy.visit('/');
    cy.get('.js-searchName').type('Trino');
    cy.get('.js-userInfo').click();

    cy.get('.js-userDetail').contains('Name: Trino');
    cy.get('.js-userDetail').contains('Role: senior');
    cy.get('.js-userDetail').contains('Level:');
  });
  it('Generate Users', function() {
    cy.visit('/');
    cy.get('.js-generateGroups').click();
    cy.wait(10000);
    cy.get('.js-group1').contains('Rafa');
    cy.get('.js-group1').contains('Trino');
    cy.get('.js-group2').contains('Oscar');
    cy.get('.js-group2').contains('Mandarina');
    cy.get('.js-group3').contains('Sergio');
    cy.get('.js-group3').contains('Escopinyes');
    cy.get('.js-group4').contains('Patri');
    cy.get('.js-group4').contains('Sky');
  });
  it('Click User', function() {
    cy.visit('/');
    cy.get('#user_5').click();
    cy.get('.js-userDetail').contains('Name: Oscar');
    cy.get('.js-userDetail').contains('Role: senior');
    cy.get('.js-userDetail').contains('Level:');

  });
});
