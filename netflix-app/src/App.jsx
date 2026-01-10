import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import data from "./data"

function App() {
  const [movies, setMovies] = useState( data )

  const deleteMovie = ( id ) => {
    setMovies( movies.filter( (movie) => { return movie.id != id } ))
  }

  const deleteAllHandler = () => setMovies( [] )

  const reloadAllHandler = () => setMovies( data )

  return ( 
  <>
    <h1>MyFlix Movie Library</h1>
     <div className="all-movies">
      { movies.map( ( movie ) => { return <MovieCard key={movie.id} movie={movie} onDelete={ () => deleteMovie( movie.id )}/> }) }
    </div>
    
    <div className="bts-movies-managament">
      <button type="button" onClick={ deleteAllHandler }>Delete all movies</button>
      <button type="button" onClick={ reloadAllHandler }>Reload all movies</button>
    </div>
  </>
  )
}

export default App
