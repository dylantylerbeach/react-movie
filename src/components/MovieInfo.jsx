import "../css/MovieInfo.css"

function MovieInfo ({movie}) {




    return (
        <div className="info-container">
            {movie ? (
                <>
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}  alt = {movie.title}/>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p>Release: {movie.release_date}</p>
            </div>
                </>
                ) : (
                    <p>Loading...</p>
                )}
        </div>
    );
}

export default MovieInfo