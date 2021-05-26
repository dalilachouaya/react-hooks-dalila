import "./Styles.css";
import React, { useState } from "react";
import MovieList from "./components/MovieList/MovieList";
import PostData from "./components/data/posters.json";
import Search from "./components/Search/Search";
import AddMovies from "./components/AddMovies/AddMovies";
import SearchRate from "./components/SearchRate/SearchRate";
import Rating from "./components/Rating/Rating";
import HeaderNav from "./components/Header/HeaderNav";
import FooterApp from "./components/Footer/FooterApp";
import Contact from "./components/Contact/Contact";
function App() {
  const [newMovie, setNewMovie] = useState(PostData);
  const [search, setSearch] = useState("");
  const [searchRating, setSearchRating] = useState(0);

  const searchMovie = (title) => {
    setSearch(title);
  };
  const searchRatingMovie = (rate) => {
    setSearchRating(rate);
  };
  const adMovie = (favoriteMovie) => {
    setNewMovie([...newMovie, favoriteMovie]);
  };

  return (
    <div className="App">
      <HeaderNav />
      <div id="home">
      <Search searchMovie={searchMovie} />
      <SearchRate searchRatingMovie={searchRatingMovie} />
      </div>
      <main>
      <MovieList
        posters={newMovie.filter(
          p =>p.title.toLocaleUpperCase().includes(search.trim().toLocaleUpperCase()) &&
            p.rating >= searchRating
        )} 
      />
      <div  id="add"> <AddMovies adMovie={adMovie}/></div>
      <div  id="rating"> <Rating /> </div>
      <div  id="contact" ><Contact/></div>
      </main>
      <footer> <FooterApp /> </footer>
      </div>
  );
}
export default App;
