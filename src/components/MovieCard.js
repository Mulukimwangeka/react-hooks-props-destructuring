import React from "react";

function MovieCard(props)
   {
  return (
    <div className="movie-card">
      {/* <img src={posterSrc} alt={title} /> */}
      <img src={props.posterSrc} alt={props.title} />
      <h2>{props.title}</h2>
      {/* <small>{genres.join(", ")}</small> */}
      <small>{props.genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
