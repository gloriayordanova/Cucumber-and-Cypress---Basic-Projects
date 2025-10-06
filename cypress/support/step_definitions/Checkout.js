/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I add inventory to my shopping cart', () => {
    cy.url().should('include', 'inventory.html');
    cy.get('[data-test="inventory-item-name"]').contains('Sauce Labs Backpack').click();
    cy.get('[data-test="add-to-cart"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="inventory-item"]').contains('Sauce Labs Backpack').should('be.visible');
});

When('I click on the Checkout button', () => {
    cy.get('[data-test="checkout"]').click();
});