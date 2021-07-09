
/* Setting the variables for the BMR calculation age, weight lengh.. */

let age = document.getElementById('age').value;
let length = document.getElementById('length').value;
let weight = document.getElementById('weight').value;

console.log(age);
console.log(weight);
console.log(length);

/* fist we will try only with the male formula, whne hti s works we will do a 
if else becuase the formula differs from male and female
(Male BMR = (9.99 x kg) + (6.25 x cm) - (4.92 x ålder) + 5 )
*/

let bmrMale = ((9.99 * weight) + (6.25 * length) - (4.92 * age) +5)

console.log(bmrMale)


document.getElementById('bmrCalculated').innerHtml = "lol"




