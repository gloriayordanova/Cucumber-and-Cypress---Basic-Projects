Feature: Inventory - SauceDemo

    Background:
        Given I am logged in as "standard_user" with password "secret_sauce"

    Scenario: Adding Inventory to my shopping cart
        When I click on the product "Sauce Labs Backpack"
        And I add it to my shopping cart
        And I click on the shopping cart
        Then I should see "Sauce Labs Backpack" in my shopping cart