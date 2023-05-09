function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

alert(calculateBMI = weight/((height*0.01)^2));

if (calculateBMI < 18.5) {
  alert("Underweight");
}
else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) 
{
  alert("Healthy Weight");
}
else if (calculateBMI >= 25.0 && calculateBMI <= 29.9) 
{
  alert("Overweight");
}
else if(calculateBMI >= 30) 
{
  alert("Above Obesity");
}

if(age >= 19 && age <= 24)
{
 if (calculateBMI >= 19 && calculateBMI <= 24)
 alert("Healthy")
 else(alert("Not Healthy"))
}
if(age >= 25 && age <= 34)
{
  if (calculateBMI >= 20 && calculateBMI <= 25)
  alert("Healthy")
  else(alert("Not Healthy"))
}
if(age >= 35 && age <= 44)
{
  if(calculateBMI >= 21 && calculateBMI <= 26)
  alert("Healthy")
  else(alert("Not Healthy"))
}
if(age >= 45 && age <=54)
{
  if(calculateBMI >= 22 && calculateBMI <= 27)
  alert("Healthy")
  else(alert("Not Healthy"))
}
if(age >= 55 && age <= 64)
{
  if(calculateBMI >= 23 && calculateBMI <= 28)
  alert("Healthy")
  else(alert("Not Healthy"))
}
if(age >= 65)
{
  if(calculateBMI >= 24 && calculateBMI <= 29)
  alert("Healthy")
  else(alert("Not Healthy"))
}
else(age )
}

