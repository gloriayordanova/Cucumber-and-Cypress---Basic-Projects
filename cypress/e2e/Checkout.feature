Feature: Checkout - SauceDemo

    Scenario: Checkout Process
        Given I am logged in as "standard_user" with password "secret_sauce"
        When I add inventory to my shopping cart
        And I click on the Checkout button
# And I enter my First Name
# And I enter my Last Name
# And I enter my Zip/Postal Code
# And I click on the Continue button
# And I finalise my order
# Then I should see a message saying "Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!"