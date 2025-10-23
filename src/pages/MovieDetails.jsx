import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieById} from "../services/api.js";
import MovieInfo from "../components/MovieInfo.jsx";


function MovieDetails() {

    const {id} = useParams();
    const [error,setError] = useState(null);
    const [movie,setMovie] = useState(null);

    useEffect( () => {

            const fetchMovie = async () => {
                try {
                    console.log("Fetching movie with id:",id);
                const movie = await getMovieById(id);
                console.log("Api response:" , movie);
                setMovie(movie);

            } catch (err)
            {
                console.log(err)
                setError("Error finding movie details")
            }
        }

        fetchMovie();
    }, [id])

    useEffect(() => {
        console.log(movie)
    },[movie])

    return (
        <div>
            <MovieInfo movie = {movie}></MovieInfo>
        </div>
    )
}

export default MovieDetails
