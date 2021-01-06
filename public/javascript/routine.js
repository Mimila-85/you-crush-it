async function newFormHandler(event) {
    event.preventDefault();
    const routine_name = document.querySelector('#routine_name').value;
    const set = document.querySelector('#set').value;
    const repetition = document.querySelector('#repetition').value;
    // The following is a ternary operator. It checks to see if has_nuts is checked. If it is, it will return true, otherwise, it will return false.
    // const has_nuts = document.querySelector('#has_nuts:checked') ? true : false;
    // Send fetch request to add a new dish
    const response = await fetch(`/api/`, {
      method: 'POST',
      body: JSON.stringify({
        routine_name,
        set,
        repetition,
        duration_min,
        exercise_id,
        user_id,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to add dish');
    }
  }
  
  document.querySelector('.new-dish-form').addEventListener('submit', newFormHandler);