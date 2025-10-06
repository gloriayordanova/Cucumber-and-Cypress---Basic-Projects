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

When('I enter my First Name', () => {
    cy.get('[data-test="firstName"]').type('Gloria')
});

When('I enter my Last Name', () => {
    cy.get('[data-test="lastName"]').type('Yordanova')
});

When('I enter my Postal Code', () => {
    cy.get('[data-test="postalCode"]').type('GL53 7EZ')
});

When('I click on the Continue button', () => {
    cy.get('[data-test="continue"]').click()
});

When('I finalise my order', () => {
    cy.get('[data-test="finish"]').click()
});

// Then('')