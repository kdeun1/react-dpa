import { useState, useEffect } from 'react'
import './Banner.css';
import { truncate } from '@/utils';
import { getMovieDetailsApi } from '@/api/movies';
import { getMovieNowPlayingApi } from '@/api/movieLists';

const Banner = () => {
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await getMovieNowPlayingApi();
    const results: any[] = data?.results || [];
    const randomMovieId = results[Math.floor(Math.random() * results.length)]?.id;

    const { data: movieDetail } = await getMovieDetailsApi(
      randomMovieId,
      { append_to_response: 'movie' }
    );
    setMovie(movieDetail);
  }
  
  return (
    <header
        className='banner'
        style={movie?.backdrop_path && {
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div style={{ fontSize: 10 }} className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.title || movie?.name || movie?.original_name}
          </h1>

          <p className='banner__description'>
            { movie?.overview ? truncate(movie.overview, 100) : ''}
          </p>
        </div>
        <div className='banner--fadeBottom' />
      </header>
  )
}

export default Banner;