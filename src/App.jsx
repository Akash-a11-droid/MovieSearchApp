import React, {useState, useRef} from 'react';
import MovieRequestApp from './MovieRequestApp';

function App() {
  const searchBox = useRef(null);
  const [searchedMovie, setSearchedMovie] = useState("");

  const handleClick=()=> {
    const newMovie = searchBox.current.value;
    setSearchedMovie(newMovie.toLowerCase().replace(/\s/g,''));
  }

      return (
        <div>
          <label>Enter the movie name : </label><br />
          <input ref={searchBox} type="text" placeholder='Eg., Interstellar'/>
          <button onClick={handleClick}>Get details</button><br />
          {searchedMovie !== "" && 
                <MovieRequestApp movieName={searchedMovie}/>
          }
        </div>
      );
  }

export default App;