import React, { useEffect, useState } from 'react';

import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import './App.css';



const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const App = () => {


  // '' means that the search term will be empty initially
  const [searchTerm, setSearchTerm] = useState('');
  // in this use state we have used [] because there is an array of movies in api.
  const [movies, setMovies] = useState([]);
  //for searching we using another use state
  

  //to call our movies
 
  useEffect(() => {
    searchMovies('spider');
  }, []);

 //async means asynchorounous data which means it will take some time
  //to fetch these movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  

  return (
    <div className='app'>
      <h1>Moviezone</h1>

      <div className='search'>
        <input
        value={searchTerm}
        // e is for event
        onChange={(e)=> setSearchTerm(e.target.value)}
        placeholder='Search for movies'
        />

        <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)} 
        />
      </div>

      {movies?.length > 0 ? (
          <div className='container'>
            {movies.map((movie) =>(
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No Movies found</h2>
            </div>
        )}
    </div>
  );
};

export default App;

































// learning basics

// const Person= (props) => {
//   return (
//     <>
//       <h1>Name: {props.name}</h1>
//       <h2>Last Name: {props.LastName}</h2>
//       <h2>Age: 20</h2>
//     </>
//   )
// }

// const App = () => {
//   const [counter, setCounter] = useState(0);
  
//   useEffect(() => {
//     alert('you have changed it to ' + counter);
//   }, [counter])

//   return (
//     <div className='App'>
//     <button onClick={() => setCounter((prevCount) => prevCount -1)}>-</button>
//     <h1>{counter}</h1>
//     <button onClick={() => setCounter((forwCount) => forwCount + 1)}>+</button>
//     </div>
//   );
// }

// export default App;
