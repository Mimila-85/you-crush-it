async function fetchinguserdata(){
    const response = await fetch('/api/workout', {
    method: 'GET',
    
    headers: {
      'Content-Type': 'application/json'
    }
  });

 const work = await response.json();
 console.log(work);
}

// for (let i=0; i<workouts.workouts.length; i++){
// const rep = workouts.workouts[i].routine.array_of_exercises[i].reps
// const set = workouts.workouts[i].routine.array_of_exercises[i].set
// const subTotal = rep*set    
// }

// console.log(subTotal)
fetchinguserdata();


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});