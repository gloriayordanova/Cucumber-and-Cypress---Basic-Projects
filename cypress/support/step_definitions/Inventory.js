/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am logged in as {string} with password {string}', (username, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', 'inventory.html');
});

When('I click on the product {string}', (product) => {
  cy.get('[data-test="inventory-item-name"]').contains(product).click();
})

When('I add it to my shopping cart', () => {
  cy.get('[data-test="add-to-cart"]').click();
})


When('I click on the shopping cart', () => {
  cy.get('[data-test="shopping-cart-link"]').click();
})

Then('I should see {string} in my shopping cart', (product) => {
  cy.get('[data-test="inventory-item"]').contains(product).should('be.visible');
})

Then('I should see an empty basket', () => {
  cy.get('.cart_contents_container .cart_item').should('not.exist');
})