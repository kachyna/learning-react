import "./MovieCarousel.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";

const MovieCarousel = ( { data } ) => {

    const [ movie_idx, setIdx ] = useState( 0 );
    const movie = data[ movie_idx ]

    const changeMovie = ( x ) => {
        const nextIdx = (movie_idx + (x > 0 ? 1 : -1) + data.length) % data.length;
        setIdx( nextIdx );
    }

    if ( ! data || data.lenght === 0 ) return null
    else 
    return(
        <div className="movie-carousel">
            <div className="movie-container">
                <img src={movie.image} alt="" />
                <h3>{movie.title}</h3>  
                <p>{movie.description}</p>
            </div>
            <div className="carousel-buttons">
                <button onClick = { () => changeMovie( -1 ) }> <FaArrowAltCircleLeft /> </button>
                <button onClick = { () => changeMovie( 1 ) } > <FaArrowAltCircleRight /> </button>
            </div>
        </div>
    )
}

export default MovieCarousel