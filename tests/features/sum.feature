Feature: Adding two numbers
  Scenario: Add a two integers
    Given that the two numbers are integers
    When the function is called
    Then return the result

  Scenario: Add one number and one string
    Given that have one number and one string
    When the function is called
    Then return NaN

  Scenario: Multiply two numbers
    Given that have two numbers
    When the function is called
    Then return the result

