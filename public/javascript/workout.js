const newWorkout = async (event) => {
  event.preventDefault();

  const routine_id = $("#savedRoutine option:selected").attr("data-routineId");
  console.log(routine_id);
  const response = await fetch(`/api/routine/${routine_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const routine = await response.json();
  const { array_of_exercises } = routine;
  console.log(routine);
  console.log(array_of_exercises);

  const array_of_results = array_of_exercises;
  const buildWorkOut = async () => {
    const responseWorkout = await fetch("/api/workout", {
      method: "POST",
      body: JSON.stringify({ routine_id, array_of_results }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (responseWorkout.ok) {
      document.location.replace("/workout");
    } else {
      alert("Failed to create workout");
    }
  };
  buildWorkOut();
};

$(document).on("click", "#goBtn", newWorkout);