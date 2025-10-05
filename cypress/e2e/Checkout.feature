Feature: Checkout - SauceDemo

    Background:
        Given I am logged in as "standard_user" with password "secret_sauce"

    Scenario: Adding Inventory to my shopping cart
        When I click on the product "Sauce Labs Backpack"
        And I add it to my shopping cart
        And I click on the shopping cart
        Then I should see "Sauce Labs Backpack" in my shopping cart

    Scenario: Checking out the Inventory added in my cart
# Given I have items in my shopping cart
# When I click on the Checkout button
# And I enter my First Name
# And I enter my Last Name
# And I enter my Zip/Postal Code
# And I click on the Continue button
# And I Finalise my order
# Then I should see a message saying "Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!"