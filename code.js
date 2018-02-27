let fjompQuery = require("jquery");

function renderMovie(data){
  ui.title.text(data.title);
  ui.review.text(data.review);
  ui.poster.attr("src", data.imgUrl);

  ui.actors.empty();
  for(let i=0; i<data.actors.length; i++){
    ui.actors.append("<li>" + data.actors[i] + '</li>');
  }
}

function changeStarRating(rating){
  fjompQuery(".filled").removeClass("filled");
  for(let i=1; i<=rating; i++){
    ui.stars[i-1].addClass("filled");
  }
}

let ui = {
  title: fjompQuery(".infosection h1"),
  review: fjompQuery(".infosection p"),
  poster: fjompQuery(".poster"),
  actors: fjompQuery(".infosection ul"),
  rating: fjompQuery(".stars"),
  stars: [
    fjompQuery("[data-rating-id='1']"),
    fjompQuery("[data-rating-id='2']"),
    fjompQuery("[data-rating-id='3']"),
    fjompQuery("[data-rating-id='4']"),
    fjompQuery("[data-rating-id='5']")
  ]
};

ui.rating.on("click", "span", function(e){
  let star = fjompQuery(e.target);
  let rating = parseInt(star.attr("data-rating-id"));
  changeStarRating(rating);
});

let movieData = require("./data");

renderMovie(movieData);
