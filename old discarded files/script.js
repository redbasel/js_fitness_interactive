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

let bmrMale = ((9.99 * weight) + (6.25 * length) - (4.92 * age) + 5)

console.log(bmrMale)


document.getElementById('bmrCalculated').value = bmrMale



/* PAL */

let palValue = document.getElementById('palActivity').value

console.log(palValue)

document.getElementById('tdeeCalculated').value = (palValue * bmrMale)

let tdeeValueArithmetic = (palValue * bmrMale)


/* function() palCalculated = (bmrMale * document.getElementById('palActivity').value)
my own code that i usein a different program.
(protein)

    (function(){


        if(fieldname9 == -500) return PREC(fieldname3*2.1, 0);
	
	    if(fieldname9 == -250) return PREC(fieldname3*2.0, 0);
	
        if(fieldname9 == 0) return PREC(fieldname3*2, 0);

        if(fieldname9 == 250) return PREC(fieldname3*2, 0);
	
	    if(fieldname9 == 500) return PREC(fieldname3*2, 0);

    })();
    */
let weightGoalJs = document.getElementById('weightGoal').value

console.log(weightGoalJs);
/*
    function calcOptimalProtein() {

        if(weightGoalJs == -500) return (weight*2.1);
	
	    if(weightGoalJs == -250) return (weight*2.0);
	
        if(weightGoalJs == 0) return (weight*2);

        if(weightGoalJs == 250) return (weight*2);
	
	    if(weightGoalJs == 500) return (weight*2);

    };
*/
/*
    if (weightGoalJs == -500) {
        return (weight*2.1)
    }
    */
/* since js is weakly coded need to clarify the negative vlaues are integers*/

let finalCalorieIntake = parseInt(tdeeValueArithmetic) + parseInt(weightGoalJs)

document.getElementById('optimalCalorieIntake').value = finalCalorieIntake

function calcOptimalProtein() {

    if (weightGoalJs == -500) {
        return (weight * 2.1);
    }

    if (weightGoalJs == -250) {
        return (weight * 2.0);
    }

    if (weightGoalJs == 0) {
        return (weight * 2.0);
    }

    if (weightGoalJs == 250) {
        return (weight * 2.0);
    }

    if (weightGoalJs == 500) {
        return (weight * 2.0);
    }

};

let proteinResult = calcOptimalProtein();

console.log(proteinResult);

document.getElementById('proteinSplit').value = proteinResult;


function calcOptimalFat() {

    if (weightGoalJs == -500) {
        return (weight * 0.9);
    }

    if (weightGoalJs == -250) {
        return (weight * 0.9);
    }

    if (weightGoalJs == 0) {
        return (weight * 0.8);
    }


    if (weightGoalJs == 250) {
        return (weight * 0.8);
    }

    if (weightGoalJs == 500) {
        return (weight * 0.7);
    }

};

let fatResult = calcOptimalFat();

console.log(fatResult);

document.getElementById('fatSplit').value = fatResult;

/* Carb calculation

*/

let carbOptimal = (finalCalorieIntake - ((proteinResult * 4) + (fatResult * 9))) / (4)

console.log(carbOptimal);

document.getElementById('carbSplit').value = carbOptimal;


console.log(finalCalorieIntake);












console.log(calcOptimalProtein);