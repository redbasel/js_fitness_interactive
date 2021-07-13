/* Setting the variables for the BMR calculation age, weight lengh.. */
/*
let age = document.getElementById('age').value;
let length = document.getElementById('length').value;
let weight = document.getElementById('weight').value;

console.log(age);
console.log(weight);
console.log(length);
*/

/* fist we will try only with the male formula, whne hti s works we will do a 
if else becuase the formula differs from male and female
(Male BMR = (9.99 x kg) + (6.25 x cm) - (4.92 x ålder) + 5 )
*/

/* first try of event istner
weight.addEventListener('input', bmrMale(){
    resultBmr2.textContent = this.value,
});
*/




/*
function bmrMale() {
    console.log("Function called");
    let weight = document.getElementById('weight').value;
    let length = document.getElementById('length').value;
    let age = document.getElementById('age').value;
    
    return parseInt((9.99 * weight) + (6.25 * length) - (4.92 * age) + 5);
    
}
*/
function readPalValue() {
    let readValue = document.getElementById('palActivity').value;


    console.log(readValue)
}

function bmrMale() {
    console.log("Function called");
    let weight = document.getElementById('weight').value;
    let length = document.getElementById('length').value;
    let age = document.getElementById('age').value;
    let palValue2 = document.getElementById('palActivity').value;
    let adjustedCalorieIntake = document.getElementById('weightGoal').value;

    let result = parseInt((9.99 * weight) + (6.25 * length) - (4.92 * age) + 5);
    let tdee = parseInt(palValue2 * result)
    let adjustedCalorie = parseInt(tdee) + parseInt(adjustedCalorieIntake);

    document.getElementById('bmrCalculated').value = result
    document.getElementById('tdeeCalculated').value = tdee
    document.getElementById('optimalCalorieIntake').value = adjustedCalorie


    let proteinResult = calcOptimalProtein();
    document.getElementById('proteinSplit').value = proteinResult;


    let fatResult = calcOptimalFat();
    document.getElementById('fatSplit').value = fatResult;



    let carbOptimal = (adjustedCalorie - ((proteinResult * 4) + (fatResult * 9))) / (4)



    document.getElementById('carbSplit').value = parseInt(carbOptimal);


};

let weightGoalJs = document.getElementById('weightGoal').value

function calcOptimalProtein() {
    let weight = document.getElementById('weight').value;
    let weightGoalJs = document.getElementById('weightGoal').value


    if (weightGoalJs == -500) {
        return parseInt(weight * 2.1);
    }

    if (weightGoalJs == -250) {
        return parseInt(weight * 2.0);
    }

    if (weightGoalJs == 0) {
        return parseInt(weight * 2.0);
    }

    if (weightGoalJs == 250) {
        return parseInt(weight * 2.0);
    }

    if (weightGoalJs == 500) {
        return parseInt(weight * 2.0);
    }

};





function calcOptimalFat() {
    let weight = document.getElementById('weight').value;
    let weightGoalJs = document.getElementById('weightGoal').value

    if (weightGoalJs == -500) {
        return parseInt(weight * 0.9);
    }

    if (weightGoalJs == -250) {
        return parseInt(weight * 0.9);
    }

    if (weightGoalJs == 0) {
        return parseInt(weight * 0.8);
    }


    if (weightGoalJs == 250) {
        return parseInt(weight * 0.8);
    }

    if (weightGoalJs == 500) {
        return parseInt(weight * 0.7);
    }
}



/*let bmrResultP = document.getElementById('bmrResult2');
bmrResultP.addEventListener('change', bmrMale)*/

/*bmrMaleResult = bmrMale();

console.log(bmrMaleResult);*/



/*let bmrMale = ((9.99 * weight) + (6.25 * length) - (4.92 * age) + 5)*/

/*console.log(bmrMaleResult)*/


/*document.getElementById('bmrCalculated').value = bmrMaleResult*/



/* PAL */

/* only testing now

let palValue = document.getElementById('palActivity').value
let bmrMaleResult = document.getElementById('bmrCalculated').value


console.log(palValue)

/*document.getElementById('tdeeCalculated').value = parseInt((palValue * bmrMaleResult))*/
/* crucial
document.getElementById('tdeeCalculated').innerHTML = (parseInt(palValue * bmrMaleResult))

let tdeeValueArithmetic = (palValue * bmrMaleResult)

end of test!! */






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


/* console.log(weightGoalJs); */
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


/* not needed just yet
let finalCalorieIntake = parseInt(tdeeValueArithmetic) + parseInt(weightGoalJs)



document.getElementById('optimalCalorieIntake').value = finalCalorieIntake
 */





/*

let proteinResult = calcOptimalProtein(); xxx */

/*console.log(proteinResult);*/

//xx document.getElementById('proteinSplit').value = proteinResult; 




//xx let fatResult = calcOptimalFat();

/*console.log(fatResult);*/

//xx document.getElementById('fatSplit').value = fatResult;

/* Carb calculation

*/

//xx let carbOptimal = (finalCalorieIntake - ((proteinResult * 4) + (fatResult * 9))) / (4)

/*console.log(carbOptimal);*/

//xxx document.getElementById('carbSplit').value = parseInt(carbOptimal);


/*console.log(finalCalorieIntake);*/














/*console.log(calcOptimalProtein);*/