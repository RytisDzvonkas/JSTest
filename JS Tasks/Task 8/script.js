/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(num1, num2, operator) {
  if (!1 || !num2) {
    return "Invalid number";
  }
  if (!["*", "-", "/", "+"].includes(operator)) {
    return "Invalid operator";
  }
  switch (operator) {
    case "+":
      return num1 + num2;
    case "/":
      return num1 * num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
  }
}
console.log(Calculator(3, 6, "*"));
