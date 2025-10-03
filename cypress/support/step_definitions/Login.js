/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

Given ('I navigate to the OrangeHRM login page', () => {
    cy.visit(url);
})