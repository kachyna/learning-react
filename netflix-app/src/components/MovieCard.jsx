import "./MovieCard.css"

const MovieCard = ( {movie, onDelete} ) => {
    return (
        <div className="movie-card">
            <img className="movie-image" src={movie.image} alt="" />
            <h4 className="movie-title">{movie.title}</h4>
            <p className="movie-age">{movie.age}</p>
            <p className="movie-tags">{movie.tags}</p>
            <p className="movie-description">{movie.description}</p>
            <button className="movie-delete-btn" onClick={ onDelete }>Delete this movie</button>
        </div>
    )
}

export default MovieCard