/// <reference types="cypress" />
import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in as {string} with password {string}', (username, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', 'inventory.html');
});