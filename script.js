/*
  Mehdi Jokar 

  This is a JavaScript file for the Calories Tracker assignment.
*/

//this registers the button click events when the
document.getElementById("lbs-to-kgs").onclick = lbsToKgs;
document.getElementById("workout-to-met").onclick = workoutToMet;
document.getElementById("calc-calories").onclick = calculateCalories;

//convert lbs to kgs from the input fields in the page and send output to the console
function lbsToKgs()
{
    //get the lbs value from the textbox, convert to kgs
    //and display using the output() function

    let weightElement = document.getElementById("lbs");
    let lbs = parseFloat(weightElement.value);
    let KGs = lbs * 0.453592;
    KGs = KGs.toFixed(2);
    let resultStr = lbs + " pounds is " + KGs + " kilograms";
    output(resultStr);

    // send the KGs value to the Calories Burned Per Minute kgs field
    document.getElementById("kgs").value = KGs;
}

//determine MET value for exercises in the dropdown list and send output to the console
function workoutToMet()
{
    //write your code here - get the MET value from the dropdown and display using the
    //output() function
    var select = document.getElementById("workouts");
    let METElement = select.options[select.selectedIndex].value;
    let MET = parseFloat(METElement);
    let activity = "";
    if(MET == 5.8){
        activity = "bicycling, leisure, 9.4 mph";
    }
    else if(MET == 7.3){
        activity = "dancing, aerobic, high impact";
    }
    else if(MET == 7){
        activity = "jogging, general";
    }
    else if(MET == 8){
        activity = "basketball, game";
    }
    else if(MET == 6){
        activity = "fencing";
    }
    else if(MET == 3.5){
        activity = "hang gliding";
    }
    let resultStr = activity + " has a MET value of " + MET;
    output(resultStr);

    // send the MET value to the Calories Burned Per Minute MET field
    document.getElementById("met").value = MET;
}

//Calculates the calories burned per minute, given the inputs from the page and sends the output to the console
function calculateCalories()
{
    //get the kgs and MET values from the textboxes and display using the
    //output() function

    let weightElement = document.getElementById("kgs");
    let KGs = parseFloat(weightElement.value);
    
    let METElement = document.getElementById("met");
    let MET = parseFloat(METElement.value);

    let caloriesBurned = (MET * 3.5 * KGs) / 200;
    caloriesBurned = caloriesBurned.toFixed(2);

    let resultStr = "MET " + MET + ", weight " + KGs + " - burns " + caloriesBurned + " calories per minute";
    output(resultStr);
}

//this function takes the provided message and prints it to the console on the page
function output(message)
{
    let console = document.getElementById("console");
    console.innerHTML = message + "\n" + console.innerHTML;
}

