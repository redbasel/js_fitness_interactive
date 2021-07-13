
function readPalValue() {
    let readValue = document.getElementById('palActivity').value;


    console.log(readValue);
}
/**bmrMale()
 * This is the main function of the calculator.
 * 1. all variables used throughout the form are defined within the formula using the DOM
 * 2. the variables are then fed into the formulas and converted to integers it is more visibly pleasing for the user, absolut eprecison is not required.
 * 3. After the calculations have been ran the values are are replaced using the DOM.value
 * 4. the final part of the function conects bmrMale() to calcOptimalProtein(), calcOptimalFat() and carbOptimal().
 * 5. The functio is called upon when the user fills in the different fields using the onchange attribute. 
 */
function bmrMale() {
    console.log("Function called");
    let weight = document.getElementById('weight').value;
    let length = document.getElementById('length').value;
    let age = document.getElementById('age').value;
    let palValue2 = document.getElementById('palActivity').value;
    let adjustedCalorieIntake = document.getElementById('weightGoal').value;

    let result = parseInt((9.99 * weight) + (6.25 * length) - (4.92 * age) + 5);
    let tdee = parseInt(palValue2 * result);
    let adjustedCalorie = parseInt(tdee) + parseInt(adjustedCalorieIntake);

    document.getElementById('bmrCalculated').value = result;
    document.getElementById('tdeeCalculated').value = tdee;
    document.getElementById('optimalCalorieIntake').value = adjustedCalorie;


    let proteinResult = calcOptimalProtein();
    document.getElementById('proteinSplit').value = proteinResult;


    let fatResult = calcOptimalFat();
    document.getElementById('fatSplit').value = fatResult;



    let carbOptimal = (adjustedCalorie - ((proteinResult * 4) + (fatResult * 9))) / (4);



    document.getElementById('carbSplit').value = parseInt(carbOptimal);


};

/**calOptimalProtein()
 * 1. variables defined that the user have put in
 * 2. based on the pace at which the client wants achieve their goal the allocation is altered as noted by the diferent multiples
 */

function calcOptimalProtein() {
    let weight = document.getElementById('weight').value;
    let weightGoalJs = document.getElementById('weightGoal').value;


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



/**calOptimalFat()
 * 1. variables defined that the user have put in
 * 2. based on the pace at which the client wants achieve their goal the allocation is altered as noted by the diferent multiples
 */

function calcOptimalFat() {
    let weight = document.getElementById('weight').value;
    let weightGoalJs = document.getElementById('weightGoal').value;

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