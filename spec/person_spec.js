describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186, system: "metric"});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function() {
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("in need of a few more hamburgers...")
  });
});

describe("Imperial Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight_imperial: 160, height_feet: 5, height_inches: 6, system: "imperial"});
  });

  it("should have a BMI message", function() {
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("in need of a few more hamburgers...")
  });

});
Contact GitHub API Training Shop Blog About
