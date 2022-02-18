// import React from 'react';¥
import './styles/Row.scss'

type Movie = {
  id: string
  name: string
  title: string
  original_name: string
  poster_path: string
  backdrop_path: string
  overview: String
}

const modal = (movie:Movie) => {
  return(
    <div className='aaa'>{movie.overview}</div>
  )
}

export default modal