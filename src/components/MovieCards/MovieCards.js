import React from "react";
import "./MovieCards.css";
import StarRatingComponent from 'react-star-rating-component';
import { Card, Button } from "react-bootstrap";
export const MovieCards = ({ film }) => {
  return (
    <div className="MovieCards">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film.poster} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{film.title}</Card.Title>
          <div className="cardtext">
            <Card.Text>{film.Storyline}</Card.Text>
            <Card.Text>{film.year} </Card.Text>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={film.rating}
          emptyStarColor={"white"}
        />
            </div>
          <Button className="button" href={film.Trailer} > Trailer </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

