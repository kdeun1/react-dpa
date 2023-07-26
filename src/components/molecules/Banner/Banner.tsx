import { useState, useEffect } from 'react'
import './Banner.css';
import axiosInstance from '@/api/axios';
import requests from '@/api/request';
import { truncate } from '@/utils';

interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: unknown;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: any[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Banner = () => {
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const { data } = await axiosInstance.get(requests.fetchNowPlaying);
    const results: any[] = data?.results || [];
    const randomMovieId = results[Math.floor(Math.random() * results.length)]?.id;

    const { data: movieDetail } = await axiosInstance.get(`movie/${randomMovieId}`, {
      params: { append_to_response: 'movie' }
    })
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