system = "metric";
  $(document).ready(function () {
    $('#imperial_inputs').hide();

    $('#toggle_system input[type="radio"]').change(function () {
      if ($('#toggle_system input[type="radio"]:checked').val() == "metric") {
        $('#metric_inputs').show();
        $('#imperial_inputs').hide();
        num_toggle = '#toggle_system input[type="number"]'
        $('num_toggle, #weight_imperial').val("");
        $('num_toggle, #height_inches').val("");
        $('num_toggle, #height_feet').val("");
        $('#display_value').html('');
        $('#display_message').html('');
        system = "metric";
      } else {
        $('#metric_inputs').hide();
        $('#imperial_inputs').show();
        $('num_toggle, #weight').val("");
        $('num_toggle, #height').val("");
        $('#display_value').html('');
        $('#display_message').html('');
        system = "imperial";
      };
    });
    $('#calculate').click(function () {
      if ($('#weight').val() == "" && $('#weight_imperial').val() == "" ) {
        alert("Please enter a number in the weight field.")
      };
      if ($('#height').val() == "" && ($('#height_feet').val() == "" )) {
        alert("Please enter a number in the height field(s).")
      };
      if ($('#height_inches').val() == "") {
        var hi = 0
      } else {
        var hi = parseFloat($('#height_inches').val());
      };
      var w = parseFloat($('#weight').val());
      var wi = parseFloat($('#weight_imperial').val());
      var h = parseFloat($('#height').val());

      var hf = parseFloat($('#height_feet').val());



      var person = new Person({weight: w, weight_imperial: wi, height: h, height_feet: hf, height_inches: hi, system: system});
      person.calculate_bmi();
      $('#display_value').html('Your BMI is ' + person.bmiValue);
      $('#display_message').html('and you are '+ person.bmiMessage);
    });

    $('#metric_form').keypress(function(e){
    if(e.which == 13){//Enter key pressed
        $('#calculate').click();
    }});

    $('#imperial_form').keypress(function(e){
    if(e.which == 13){
        $('#calculate').click();
      }
    });
  });
