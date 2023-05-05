var age = 10;
if (age >= 65) {
  console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
  console.log("Each month you get a salary");
} else if (age < 18) {
  console.log("You get an allowance");
} else {
  console.log("The value of the age variable is not numerical");
}

var day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Study HTML");
    break;
  case "Tuesday":
    console.log("Study CSS");
    break;
  case "Wednesday":
    console.log("Study Bootstrap");
    break;
  case "Thursday":
    console.log("Study JavaScript");
    break;
  case "Friday":
    console.log("Study React");
    break;
  case "Saturday":
    console.log("Study Svelte");
    break;
  case "Sunday":
    console.log("Study Git");
    break;
  default:
    console.log("There is no such day");
}
