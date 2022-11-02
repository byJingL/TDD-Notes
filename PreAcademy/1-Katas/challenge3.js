/**
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
 */

//challenge 3 Calculate BMI
function bmi(weight, height) {
  
    let bmi = weight / height ** 2
    
    let info = ""
    if(bmi <= 18.5){
      info = "Underweight"
    }else if(bmi <= 25.0){
      info = "Normal"
    }else if(bmi <= 30.0){
      info = "Overweight"
    }else{
      info = "Obese"
    }
    return info
  
  }