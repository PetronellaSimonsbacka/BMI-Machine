describe("BMICalculator", function() {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 85, height: 185});
  });

  it("calculates BMI for a person using metric method", function() {
    // calculator.metric_bmi(person);
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(24.84);
  });
});
Contact GitHub API Training Shop Blog About
