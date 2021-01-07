async function newFormHandler(event) {
  event.preventDefault();
  const name_routine = document.querySelector('#routine_name').value;
  const array_of_exercises = [];

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


};

// Send a POST request to the API endpoint
// const response = fetch('/api/', {
//   method: 'POST',
//   body: JSON.stringify({ email, password }),
//   headers: { 'Content-Type': 'application/json' },
// });


// const request = fetch('/api/routine', {
//   method: 'GET',
// });

// document.querySelector('.routine-form').addEventListener('submit', newFormHandler);

// var selectedOption = "";

// $("#selector").on("click", "li", function(event) {
//     selectedOption =$(this).attr("id");
//     $(".option").text($(this).text());
// });

async function routineFormHandler(event) {
  event.preventDefault();

  // $("#addbtn").on("click", function (event) {
  //   event.preventDefault();
  //   console.log("clicked");
    // input by user
    var exercise = $("#exercise").val();
    var sets = $("#sets").val();
    var reps = $("#reps").val();

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


    // reps div
    var plannedReps = $("<div>");
    plannedReps.attr("class", "col-2");


    // append everthing to results div
    plannedExercise.append(p);
    myDiv.append(plannedExercise);
    myDiv.append(plannedSets);
    myDiv.append(plannedReps);

    $("#results").append(myDiv);

    // let plan = [];
    // plan.push(exercise);
    // plan.push(sets);
    // plan.push(reps);
    // array_of_exercises.push(plan);
  // });
};
document.querySelector('#addbtn').addEventListener('submit', routineFormHandler);