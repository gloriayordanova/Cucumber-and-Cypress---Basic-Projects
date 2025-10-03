Feature: LoginHRM - Login Page

    Scenario Outline: Validate valid login page
        Given I navigate to the SauceDemo login page
        And I type a username "<username>" and password "<password>"
        And I click on the login button
        Then I should see the dashboard page

        Examples:
            | username      | password     |
            | standard_user | secret_sauce |