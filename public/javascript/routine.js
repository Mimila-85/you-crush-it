async function newFormHandler(event) {
  event.preventDefault();
  const name_routine = document.querySelector('#routine_name').value;
  const array_of_exercises = [
    // {
    //   type: "Pushups",
    //   sets: 3,
    //   repetition: 10,
    // },
    // {
    //   type: "Pushups",
    //   sets: document.querySelector('#routine_name').value,
    //   repetition: 10,
    // },
  ];
 
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

// var selectedOption = "";

// $("#selector").on("click", "li", function(event) {
//     selectedOption =$(this).attr("id");
//     $(".option").text($(this).text());
// });


        //     // main div where I am dumping other divs and p tags
        //     var myDiv = $("<div>");
        //     myDiv.attr("id", `${bizname}`);
        //     myDiv.attr("class", "cell small-2 medium-cell-block-container btnGroup myDiv");

        //     // framework div
        //     var frameworkDiv = $("<div>");
        //     frameworkDiv.attr("class", "grid-x")

        //     //thumbnail div
        //     var thumbnail = $("<div>");
        //     thumbnail.attr("class", "small-3");
        //     var img = $("<img>");
        //     img.attr("class", "thumbnail").attr("src", `${imgURL}`).attr("id", "thumb");
        //     thumbnail.append(img);

        //     // p tag with business name
        //     var p = $("<p>");
        //     p.attr("class", "small-6");
        //     // p.attr("id", "");
        //     p.text(`${bizname}`);

        //     // third div
        //     var ratingDisplay = $("<div>");
        //     // var reviewCount = $("<p>").text(reviewCount);
        //     ratingDisplay.attr("class", "small-3");
        //     var rateImg = $("<img>");
        //     rateImg.attr("class", "rating").attr("id","stars");

        //     if (rating == 4) {
        //         rateImg.attr("src", "./assets/small_4.png");
        //     } else if (rating == 4.5) {
        //         rateImg.attr("src", "./assets/small_4_half.png");
        //     } else {
        //         rateImg.attr("src", "./assets/small_5.png");
        //     }
        //     ratingDisplay.append(rateImg);
        //     // ratingDisplay.append(reviewCount);

        //     // append everthing to main div
        //     frameworkDiv.append(thumbnail);
        //     frameworkDiv.append(p);
        //     frameworkDiv.append(ratingDisplay);

        //     myDiv.append(frameworkDiv);

        //     $("#results").append(myDiv);     
        // };