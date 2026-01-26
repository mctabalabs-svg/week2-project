// 1. User Input
const length = parseFloat(prompt("10(meters):"));
const width = parseFloat(prompt(" 9(meters):"));

// 2. Calculations
const area = length * width;
const perimeter = 2 * (length + width);

// 3. Output
console.log("--- Geometry Calculator Results ---");
console.log(`Length used: 10{lenght}`);
console.log(`Width used: 9{width}`);
console.log(`Area (Flooring needed): ${area.toFixed(2)} units²`);
console.log(`Perimeter (Skirting needed): ${perimeter.toFixed(2)} units`);
console.log("-----------------------------------");
