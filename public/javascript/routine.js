let plan = [];
let array_of_exercises = [];

//POST NEW ROUTINE
async function newRoutineHandler(event) {
  event.preventDefault();
  let name_routine = document.querySelector('#newRoutineName').value;
  if (!name_routine) {
    alert("Give this myRoutine a Name :)");
  } else {
    const response = await fetch(`/api/routine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name_routine,
        array_of_exercises,
      }),

    });
    if (response.ok) {
      document.location.replace('/');
      console.log(response.json());
      if (confirm("New myRoutine added!! Would you like to workout now?")) {
        console.log("y");
        window.open("/workout", "_self")
    
      } else {
        console.log("n");
        window.open("/routine", "_self")
      };
    } else {
      alert('Failed to add routine');
    };
    console.log(array_of_exercises);
  };
  saveToStorage();
 
};

document.querySelector('#newRoutine').addEventListener('click', newRoutineHandler);

//BUILD ROUTINE

async function routineFormHandler(event) {
  event.preventDefault();
  let name_routine = document.querySelector('#newRoutineName').value;
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
    myDiv.attr("class", "row align-middle text-center plan");

    //exercise div
    var plannedExercise = $("<div>");
    var p = $("<p>");
    p.attr("class", "align-middle")
    // p.attr("style", "margin-top: 8%;",)
    p.text(exercise);
    plannedExercise.attr("class", "col-auto align-middle");


    // sets div
    var plannedSets = $("<div>");
    plannedSets.attr("class", "col-2");
    plannedSets.text(sets);


    // reps div
    var plannedReps = $("<div>");
    plannedReps.attr("class", "col-2");
    plannedReps.text(reps);

    //delete button div
    // var delBtn = $("<button>");
    // var delDiv = $("<div>");
    // delDiv.attr("class", "col-1 rounded");
    // delBtn.attr("class", "btn rounded")
    // delBtn.text("X");
    // delDiv.append(delBtn);


    // append everything to results div
    plannedExercise.html(p);
    // console.log("inserted p element")
    myDiv.append(plannedExercise);
    // console.log("appended Exercise")
    myDiv.append(plannedSets);
    // console.log("appended Set")
    myDiv.append(plannedReps);
    // console.log("appended Reps")
    // myDiv.append(delDiv);

    $(".results").append(myDiv);

    //push each routine segment into holder array with key properties "plan" is the segment of routine ie 1 exercise and planned sets and reps. "pod" is that plan tunred into and object.
    plan = []
    plan.push({ "name": exercise });
    plan.push({ "sets": sets });
    plan.push({ "reps": reps });
    let pod = Object.assign({}, plan);



    array_of_exercises.push({
      name: exercise,
      sets: sets,
      reps: reps,
    });

    console.log(plan);
    console.log(pod);
    console.log(name_routine);
    console.log({ array_of_exercises });
  };

};
document.querySelector('#addBtn').addEventListener('click', routineFormHandler);

//save routine mane to storage function
async function saveToStorage() {
  let name_routine = document.querySelector('#newRoutineName').value;
  //remove before deploy --
  localStorage.setItem('lastRoutine', JSON.stringify(array_of_exercises));
  // --
  localStorage.setItem('lastRoutineName', JSON.stringify(name_routine));

};
//routine name selected from dropdown passes to local storage for workout
async function savedRoutineSelect(event) {
  event.preventDefault();
  let name_routine = $("#savedRoutine option:selected").text();
  if (!name_routine === "Choose...") {
    saveToStorage();
    populateSelectedRoutineForEditing();
  };
};
//get routine populate results
async function populateSelectedRoutineForEditing(event) {
  event.preventDefault();
  const response = await fetch(`/api/routine`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      array_of_exercises,
    }),
  });
  if (response.ok) {
    document.location.replace('/');

  } else {
    alert('Failed to Find routine');
  };

  console.log(array_of_exercises);
  return response.json();
};







