import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('el usuario navega a la home', () => {
  cy.visit('/');
});

Then('debería ver el logo de la aplicación', () => {
  // Usa el selector que corresponda a tu logo:
  // - Si usas data-testid: cy.get('[data-testid="logo"]')
  // - Si usas alt: cy.get('img[alt="Logo Buscasofa2"]')
  // - Si usas clase: cy.get('.logo')
  cy.get('[data-testid="logo"], img[alt="Logo Buscasofa2"], .logo').should('be.visible');
});

Then('debería ver el enlace {string}', (enlace) => {
  // Busca un enlace <a> que contenga el texto exacto
  cy.contains('a', enlace).should('be.visible');
});