import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import data from "./data"

function App() {
  const [movies, setMovies] = useState( data )

  const deleteMovie = ( id ) => {
    setMovies( movies.filter( (movie) => { return movie.id != id } ))
  }

  const filterMoviesByTag = ( tag ) => {
    setMovies( data.filter( ( movie ) => { return movie.tags.includes( tag ) }))
  }

  return ( 
  <>
    <h1>MyFlix Movie Library</h1>
    <div className="filters">
      <button type="button" onClick={ () => filterMoviesByTag("Vtipný") }>Comedy</button>
      <button type="button" onClick={ () => filterMoviesByTag("Romantický") }>Romance</button>
      <button type="button" onClick={ () => filterMoviesByTag("Gangster") }>Action</button>
    </div>
     <div className="all-movies">
      { movies.map( ( movie ) => { return <MovieCard key={movie.id} movie={movie} onDelete={ () => deleteMovie( movie.id )}/> }) }
    </div>
    
    <div className="bts-movies-managament">
      <button type="button" onClick={ () => setMovies( [] ) }>Delete all movies</button>
      <button type="button" onClick={ () => setMovies( data ) }>Show all movies</button>
    </div>
  </>
  )
}

export default App
