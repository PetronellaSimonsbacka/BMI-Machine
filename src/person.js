function Person(attr) {
  this.weight = attr.weight;
  this.weight_imperial = attr.weight_imperial;
  this.height = attr.height;
  this.height_inches = attr.height_inches;
  this.height_feet = attr.height_feet;
  this.system = attr.system;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  if (this.system == "metric") {
    calculator.metric_bmi(this);
  }else if (this.system == "imperial") {
    calculator.imperial_bmi(this);
  }
  else {
    alert("Please enter a height and weight")
  };
};
