import './Row.css';
import axiosInstance from '@/api/instance';
import MovieModal from '@/components/MovieModal/MovieModal';
import { useState, useEffect, useCallback } from 'react'
import * as S from './styles';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

interface RowProps {
  title: string;
  id: string;
  fetchUrl: string;
};

const MOVED_WIDTH = 80;
const SWIPER_BREAKPOINTS = {
  // when window width is >= 1378px
  1378: {
    slidesPerView: 6, //한번에 보이는 슬라이드 개수 
    slidesPerGroup: 6,
  },
  998: {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
  625: {
    slidesPerView: 4,
    slidesPerGroup: 4,
  },
  0: {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
};

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
    <S.Container>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={ true } //loop 기능을 사용할 것인지
        navigation // arrow 버튼 사용 유무
        pagination={{ clickable: true }} //페이지 버튼 보이게 할지
        breakpoints={SWIPER_BREAKPOINTS}
      >
        <S.Content id={id}>
          {movies?.length && movies.map((movie) => (
            <SwiperSlide>
              <S.Wrap>
                <img
                  key={movie.id}
                  className="row__poster"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </S.Wrap>
            </SwiperSlide>
          ))}
        </S.Content>
      </Swiper>

      {modalOpen && (
        <MovieModal
          {...selectedMovie}
          setModalOpen={setModalOpen}
        />
      )}
    </S.Container>
  )
}

export default Row