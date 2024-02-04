import React from "react";


// component named moviecard --file and component name are same its a good practice
const MovieCard = ({movie: { b6003d8a, Year, Poster, Title, Type }}) => {
    return (
        <div className='movie' key={b6003d8a}>
          <div>
            <p>{Year}</p>
          </div>

          <div>
            <img
            src={Poster !== 'N/A' ? Poster : 
            'https://via.placeholder.com/400'}
            alt={Title} />
          </div>

          <div>
            <span>{Type}</span>
            <h3>{Title}</h3>
          </div>
        </div>
    );
}

export default MovieCard;