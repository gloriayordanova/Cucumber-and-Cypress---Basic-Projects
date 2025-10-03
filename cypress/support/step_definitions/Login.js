/// <reference types="cypress" />
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

    Given ('I navigate to the OrangeHRM login page', () => {
        cy.visit(url);
    })

    When ('I type a username {string} and password {string}', (username, password) => {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
    })