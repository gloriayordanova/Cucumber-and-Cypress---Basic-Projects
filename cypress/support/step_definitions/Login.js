/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.saucedemo.com/";

Given('I navigate to the SauceDemo login page', () => {
    cy.visit(url);
});

When('I type a username {string} and password {string}', (username, password) => {
    cy.get('input[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
});

When('I click on the login button', () => {
    cy.get('[data-test="login-button"]').click();
});

Then('I should see the dashboard page', () => {
    // Check that the URL is correct
    cy.url().should('eq', `${url}inventory.html`);
});

When('I type a username {string}', (username) => {
    cy.get('input[data-test="username"]').type(username);
});

Then('I should see the error message for password required', () => {
    cy.get('.error-message-container').contains('Epic sadface: Password is required');
});