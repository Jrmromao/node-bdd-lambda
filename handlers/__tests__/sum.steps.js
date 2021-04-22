const { AddNumbers, MultiplyNumbers } = require("../addVehicles/sum.js");
const { defineFeature, loadFeature } = require("jest-cucumber");

const feature = loadFeature("../../tests/features/sum.feature", {
  loadRelativePath: true,
});

defineFeature(feature, (test) => {
  let event = {
    arguments: {
      quoteId: "904f89b5-47b7-4b6b-953e-a2b8e08dcd97",
      vehicle: {
        vehicleIdentificationNumber: "SCBLC37F85CX10207",
      },
    },
  };

  // this method runs before each test
  beforeEach(() => {
    //console.log(`running before the test`);
  });

  // this method runs after each test
  afterEach(() => {
    //console.log('Running after the test');
  });

  // now we start the test
  test("Add a two integers", ({ given, when, then }) => {
    let result;
    given("that the two numbers are integers", () => {});
    when("the function is called", async () => {
      result = AddNumbers(1, 2);
    });
    then("return the result", () => {
      expect(result).toEqual(3);
    });
  });

  // now we start the test
  test("Add one number and one string", ({ given, when, then }) => {
    let result;
    given("that have one number and one string", () => {});
    when("the function is called", async () => {
      result = AddNumbers(1, "test");
    });
    then("return NaN", () => {
      expect(result).toEqual(NaN);
    });
  });

  // now we start the test
  test("Multiply two numbers", ({ given, when, then }) => {
    let result;
    given("that have two numbers", () => {});
    when("the function is called", async () => {
      result = MultiplyNumbers(2, 9);
    });
    then("return the result", () => {
      expect(result).toEqual(18);
    });
  });
});
