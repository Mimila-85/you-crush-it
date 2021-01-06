async function newFormHandler(event) {
  event.preventDefault();
  const name_routine = document.querySelector('#routine_name').value;
  const array_of_exercises = [
    {
      type: "PushUps",
      sets: 3,
      repetition: 10,
    },
  ];
  // const set = document.querySelector('#set').value;
  // const repetition = document.querySelector('#repetition').value;
  // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
  // const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
  // Send fetch request to add a new routine
  const response = await fetch(`/api/routine`, {
    method: 'POST',
    body: JSON.stringify({
      name_routine,
      array_of_exercises,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the routine is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace('/');
  } else {
    console.log(response.json());
    
    alert('Failed to add routine');
  }
}

document.querySelector('.routine-form').addEventListener('submit', newFormHandler);