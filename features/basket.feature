Feature: Using the basket
  As a user
  When I am on the homepage
  I should be able to use the basket

  Scenario: Adding a product
    Given I am on the homepage
    When I add a product to the basket
    Then it should be in the basket
