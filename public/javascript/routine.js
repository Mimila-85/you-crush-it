let plan = [];
const array_of_exercises = [];
const name_routine = document.querySelector('#newRoutine_name').value;

async function newRoutineHandler(event) {
  event.preventDefault();
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
      console.log(response.json());
    } else {
      alert('Failed to add routine');
    };
    array_of_exercises.push(plan);
    console.log(array_of_exercises)
  };
  saveToStorage();
  if (confirm("New myRoutine added!! Would you like to workout now?")) {
    console.log("y");
    window.open("/workout" , "_self")

  } else {
    console.log("n");
    window.open("/routine" , "_self")
  };
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
    plan.push({"name": exercise});
    plan.push({"sets": sets});
    plan.push({"reps": reps});
    let pod = plan.reduce();
    console.log(pod)

    console.log(plan);
  };

};
document.querySelector('#addBtn').addEventListener('click', routineFormHandler);

async function saveToStorage() {
  localStorage.setItem('lastRoutine', JSON.stringify(array_of_exercises));
  localStorage.setItem('lastRoutineName', JSON.stringify(name_routine));

};




