import { getMovieDetailsApi } from '@/api/movies';
import type { MovieDetailResponse } from '@/api/movies/types';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  let { movieId: movie_id } = useParams();
  const [movie, setMovie] = useState<MovieDetailResponse>();

  useEffect(() => {
    async function fetchData() {
      const { data } = await getMovieDetailsApi(Number(movie_id));
      setMovie(data);
    }
    fetchData();
  }, [movie_id])
  
  if(!movie) return null;

  return (
    <section>
      <img 
        className='modal__poster-img'
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="img"
      />
    </section>
  )
}

export default DetailPage;