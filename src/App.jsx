import './css/App.css'
import {Route,Routes} from "react-router-dom"
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import {MovieProvider} from "./contexts/MovieContext.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";

/*function App() {
    return (
        <>
            <Text display = "whats up"/>
            <Text display = "hello" />
        </>
    );
}

function Text({display}) {
    return (
        <div>
            <p>{display}</p>
        </div>
    );
}*/

function App() {
    return(
        <MovieProvider>
                <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/movie/:id" element = {<MovieDetails />} />

                </Routes>
            </main>
        </MovieProvider>

    );
}

export default App
