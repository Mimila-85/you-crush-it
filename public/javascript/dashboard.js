async function fetchinguserdata(){
    const response = await fetch('/api/workout', {
    method: 'GET',
    
    headers: {
      'Content-Type': 'application/json'
    }
  });

 const workout = await response.json();
 console.log(workout);
}

fetchinguserdata();


var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Your reps per month',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 400, 350, 410, 480, 410, 445]
        }]
    },

    // Configuration options go here
    options: {}
});