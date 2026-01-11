import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import MovieCarousel from './components/MovieCarousel'
import data from "./data"
import QA from './components/QA'

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
    <h2>Movies we love today</h2>
      <MovieCarousel data={ data } />
    <h2>All Movies</h2>
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

    <div className="faq">
      <h2>Frequently asked questions</h2>
      <QA question="What movies are on Netflix?" answer="All kinds of movies!"></QA>
      <QA question="How to log in to Netflix?" answer="Click the login button in top-right corner."></QA>
      <QA question="How much does Netflix cost?" answer="It's 20 USD per month."></QA>
    </div>
  </>
  )
}

export default App
