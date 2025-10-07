Feature: Checkout - SauceDemo

    Scenario: Checkout Process
        Given I am logged in as "standard_user" with password "secret_sauce"
        When I add inventory to my shopping cart
        And I click on the Checkout button
        And I enter my First Name
        And I enter my Last Name
        And I enter my Postal Code
        And I click on the Continue button
        And I finalise my order
        Then I should be presented with a successful checkout message