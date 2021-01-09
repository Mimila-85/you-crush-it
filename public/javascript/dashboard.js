async function fetchinguserdata() {
  const response = await fetch("/api/workout", {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
    },
  });

  const { workouts } = await response.json();
  console.log(workouts);

  const workoutData = {
    dates: [],
    totals: [],
  };

  workouts.map((workout) => {
    const array_of_results = workout.array_of_results;
    console.log(array_of_results);

    const totalReps = array_of_results.reduce((total, results) => {
      return total + parseInt(results.sets) * parseInt(results.reps);
    }, 0);

    console.log({ totalReps });

    workoutData.dates.push(new Date(workout.date).toLocaleDateString());
    workoutData.totals.push(totalReps);
  });
  console.log({ workoutData });

  var ctx = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
      labels: workoutData.dates,
      datasets: [
        {
          label: "Your reps per day",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: workoutData.totals,
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}

fetchinguserdata();

