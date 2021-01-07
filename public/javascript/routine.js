let plan = [];
const array_of_exercises = [];

async function newRoutineHandler(event) {
  event.preventDefault();
  const name_routine = document.querySelector('#newRoutine_name').value;
  if (name_routine == null) {
    alert("Give this myRoutine a Name :)")
  } else {
    const response = await fetch(`/api/routine`, {
      method: 'POST',
      body: JSON.stringify({
        name_routine,
        array_of_exercises,
      }),

    });

    //if the routine is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(response.json());

      alert('Failed to add routine');
    };
    array_of_exercises.push(plan);
  };
  goToWorkout();


};

document.querySelector('#newRoutine').addEventListener('click', newRoutineHandler);

async function routineFormHandler(event) {
  event.preventDefault();
  // input by user
  var exercise = $("#exercise option:selected").text();
  var sets = $("#sets").val();
  var reps = $("#reps").val();

  if (exercise === "Choose...") {
    alert("Please choose an Exercise:)")
  } else {
    // append values to #results row in html with appropriate ids
    // main div where I am dumping other divs
    var myDiv = $("<div>");
    myDiv.attr("class", "row align-center plan");

    //exercise div
    var plannedExercise = $("<div>");
    var p = $("<p>");
    p.text(exercise);
    plannedExercise.attr("class", "col-auto");


    // sets div
    var plannedSets = $("<div>");
    plannedSets.attr("class", "col-3");
    plannedSets.text(sets);


    // reps div
    var plannedReps = $("<div>");
    plannedReps.attr("class", "col-3");
    plannedReps.text(reps);


    // append everthing to results div
    plannedExercise.html(p);
    console.log("inserted p element")
    myDiv.append(plannedExercise);
    console.log("appended Exercise")
    myDiv.append(plannedSets);
    console.log("appended Set")
    myDiv.append(plannedReps);
    console.log("appended Reps")

    $(".results").append(myDiv);

    //push each routine segment into holder array with key properties
    plan.push("name", exercise);
    plan.push("sets", sets);
    plan.push("reps", reps);
    console.log(plan);
  };

};
document.querySelector('#addBtn').addEventListener('click', routineFormHandler);

async function goToWorkout(event) {
  event.preventDefault();
  body.empty();
  
}