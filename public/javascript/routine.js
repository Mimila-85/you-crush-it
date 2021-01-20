let array_of_exercises = [];

//POST NEW ROUTINE
async function newRoutineHandler(event) {
  event.preventDefault();
  let name_routine = document.querySelector("#newRoutineName").value;
  if (!name_routine) {
    alert("Give this myRoutine a Name :)");
  } else {
    const response = await fetch("/api/routine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name_routine,
        array_of_exercises,
      }),

    });
    if (response.ok) {
      document.location.replace("/routine");
      alert("myRoutine Added");
    } else {
      alert("Failed to add routine");
    }
  }
}

document.querySelector("#newRoutine").addEventListener("click", newRoutineHandler);

//BUILD ROUTINE
async function routineFormHandler(event) {
  event.preventDefault();
  // input by user
  const exercise = $("#exercise option:selected").text();
  const sets = $("#sets").val();
  const reps = $("#reps").val();
  const weight = $("#weight").val();

  if (exercise === "Choose...") {
    alert("Please choose an Exercise:)");
  } else {
    // append values to #results row in html with appropriate ids
    // main div where I am dumping other divs
    const myDiv = $("<div>");
    myDiv.attr("class", "row align-items-center plan");

    //exercise div
    const plannedExercise = $("<div>");
    // const p = $("<p>");
    // p.attr("class", "align-middle");
    // p.text(exercise);
    plannedExercise.text(exercise);
    plannedExercise.attr("class", "col-auto");

    // sets div
    const plannedSets = $("<div>");
    plannedSets.attr("class", "col-2");
    plannedSets.text(sets);

    // reps div
    const plannedReps = $("<div>");
    plannedReps.attr("class", "col-2");
    plannedReps.text(reps);

    // weight div
    const plannedWeight = $("<div>");
    plannedWeight.attr("class", "col-2");
    plannedWeight.text(weight);

    // append everything to results div
    // plannedExercise.html(p);
    myDiv.append(plannedExercise);
    myDiv.append(plannedSets);
    myDiv.append(plannedReps);
    myDiv.append(plannedWeight);

    $(".results").append(myDiv);

    array_of_exercises.push({
      name: exercise,
      sets: sets,
      reps: reps,
      weight: weight,
    });
  }
}
document.querySelector("#addBtn").addEventListener("click", routineFormHandler);







