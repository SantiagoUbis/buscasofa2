import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a {string}', (ruta) => {
  cy.visit(ruta, { failOnStatusCode: false });
});

Then('debería ver el texto {string}', (texto) => {
  cy.contains(texto).should('be.visible');
});