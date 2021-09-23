Feature: end to end ecommerce validation

    application regression


    @regression
    Scenario: Ecommerce Product delivery
    Given I open ecommerce page
    When I add item to cart
    And Validate the total prices
    Then Select the country submit and varify Thank You 

@smoke
    Scenario: Filling form to shop
    Given I open ecommerce page
    When  I fill the Form details
         |name| genfer|
         |bobz| Male|
    Then validate the form behaviour
    And seclect the shop page



    