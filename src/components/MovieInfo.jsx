import "../css/MovieInfo.css"

function MovieInfo({movie}) {


    return (
        <div className="info-container">
            {movie ? (
                <>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                    <div className="movie-info">
                        <h2 className="bg-red-500 text-white text-2xl p-4">{movie.title}</h2>
                        <p>{movie.overview}</p>
                        <p>
                            <span className="font-bold">Genre: </span>
                            {movie.genres && movie.genres.length > 0
                                ? movie.genres.map((genre, index) => (
                                    <span key={genre.id}>
          {genre.name}{index < movie.genres.length - 1 ? ", " : ""}
        </span>
                                ))
                                : "N/A"}
                        </p>
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