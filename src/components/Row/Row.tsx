import './Row.css';
import axiosInstance from '@/api/instance';
import MovieModal from '@/components/MovieModal/MovieModal';
import { useState, useEffect, useCallback } from 'react'

interface RowProps {
  title: string;
  id: string;
  fetchUrl: string;
};

const MOVED_WIDTH = 80;

const Row = ({ title, id, fetchUrl }: RowProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  
  const fetchMovieData = useCallback(async () => {
    const res = await axiosInstance.get(fetchUrl);
    setMovies(res.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

  const handleClickArrow = (domId: string, arrow: 'left' | 'right') => {
    switch (arrow) {
      case 'right': {
        document.getElementById(domId)!.scrollLeft += window.innerWidth - MOVED_WIDTH;
        break;
      }
      case 'left': {
        document.getElementById(domId)!.scrollLeft -= window.innerWidth - MOVED_WIDTH;
        break;
      }
      default:
        break;
    }
  };


  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<any>({});

  const handleClick = (movie: unknown) => {
    setModalOpen(true);
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h2>{title}</h2>
      <div className="slider">
        <div
          className='slider__arrow-left'
          onClick={() => handleClickArrow(id, 'left')}
        >
          <span className='arrow'>
            {"<"}
          </span>
        </div>
        <div id={id} className='row__posters'>
          {movies?.length && movies.map((movie) => (
            <img
              key={movie.id}
              className="row__poster"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
        <div
          className='slider__arrow-right'
          onClick={() => handleClickArrow(id, 'right')}
        >
          <span className='arrow'>
            {">"}
          </span>
        </div>
      </div>

      {modalOpen && (
        <MovieModal
          {...selectedMovie}
          setModalOpen={setModalOpen}
        />
      )}
    </div>
  )
}

export default Row