import "./styles/App.css";
import { Row } from "./organism/movie/Row";
import { Banner } from "./organism/movie/Banner";
import { Nav } from "./organism/movie/Nav";
import { requests } from "../api/request";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUINALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.feactTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.feactActionMovies} /> */}
      <Row title="Comedy Movies" fetchUrl={requests.feactComedyMovies} />
      {/* <Row title="Horror Movies" fetchUrl={requests.feactHorrorMovies} /> */}
      <Row title="Romance Movies" fetchUrl={requests.feactRomanceMovies} />
      <Row title="DOcumentaries" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;