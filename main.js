const marsCost = 5000;
const moonCost = 2000;
function handleQuantity(planet, operator, planetCost) {
  // input value
  let inputValue = document.getElementById(planet).value;
  let convertInput = parseFloat(inputValue);
  // increment value
  if (operator === "plus") {
    convertInput = convertInput + 1;
    // decrement value
  } else {
    // Error handling
    if (convertInput < 1) {
      return;
    }
    convertInput = convertInput - 1;
  }
  // update input value
  document.getElementById(planet).value = convertInput;

  // cost calculate function
  costColculate(planet, planetCost);
}

let totalMarsCost = 0;
let totalMoonCost = 0;

function costColculate(planet, planetCost) {
  // input value
  let inputValue = document.getElementById(planet).value;
  let convertInput = parseFloat(inputValue);

  // cost
  let cost = document.getElementById(planetCost);
  let convertCost = parseFloat(cost.innerText);

  if (planet === "mars") {
    totalMarsCost = convertInput * marsCost;
    cost.innerText = totalMarsCost;
  } else {
    totalMoonCost = convertInput * moonCost;
    cost.innerText = totalMoonCost;
  }

  updateTotal(totalMarsCost, totalMoonCost);
}

function updateTotal(totalMarsCost, totalMoonCost) {
  const total = totalMarsCost + totalMoonCost;
  console.log((document.getElementById("total-cost").innerText = total));
}
