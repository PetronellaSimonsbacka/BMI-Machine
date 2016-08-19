ddescribe("BMICalculator", function() {
  var calculator, person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmiValue).toEqual(26.01);
  });

});

describe("BMICalculator", function(){
  beforeEach(function() {
    person = new Person({weight_imperial: 160, height_feet: 5, height_inches: 6});
    calculator = new BMICalculator();
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator.imperial_bmi(person);
    expect(person.bmiValue).toEqual(25.82);
  });

});
