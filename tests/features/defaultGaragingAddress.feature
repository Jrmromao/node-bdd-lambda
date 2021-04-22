Feature: Default Garaging Address
    Scenario: A custom garaging address is populated in the event
        Given that the event has a garaging address populated
        When the event is consumed
        Then garaging address is the same as residential address

    Scenario: Garaging address is not present in the event
        Given that garaging address is not a field within the event
        When the event is consumed
        Then garaging address is the same as residential address

    Scenario: Existing garaging address is the same as residential address
        Given garaging address is the same as residential address
        When adding a vehicle
        Then map geographic information values

    Scenario: Existing garaging address is not the same as residential address
        Given garaging address is the not same as residential address
        When adding a vehicle
        Then return an error message

