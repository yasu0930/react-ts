import { useState, useEffect } from "react"
import ModalItem from './ModalItem'
import axios from "../../../api/axios"
import "../../styles/Row.scss"

const base_url = "https://image.tmdb.org/t/p/original"

type Props = {
  title: string
  fetchUrl: string
  isLargeRow?: boolean
};

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
  overview: string
}

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [trailerUrl, setTrailerUrl] = useState<string | null>("")
  const [isOverView, setIsOverView] = useState<string>("")
  const [isTitle, setIsTitle] = useState<string>("")
  const [isCheck, setIsCheck] = useState(false)

  //urlが更新される度に
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie:Movie) => {
    if (trailerUrl) {
      setTrailerUrl("")
    } else {
      setIsCheck(true)
      setIsTitle(movie.name)
      setIsOverView(movie.overview)
    }
  };

  const handleClick2 = () => {
    setIsCheck(false)
  }

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {/* ポスターコンテンツ */}
        {movies.map((movie) => (
            <>
              <img
                key={movie.id}
                className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onMouseOver={() => handleClick(movie)}
                onMouseLeave={() => handleClick2()}
              />
            </>
        ))}
      </div>
      {isCheck && <ModalItem title={isTitle} overview={isOverView}/>}
    </div>
  )
}