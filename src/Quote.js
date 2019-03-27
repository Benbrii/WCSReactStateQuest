import React from "react";

const Quote = ({ quote, character, image, star}) => (
  <figure style = {{backgroundColor: star ? '':''}}>
    <img src={
        image || "https://via.placeholder.com/350x150"
        } alt={character} />
    <figcaption>
      <blockquote>{quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;