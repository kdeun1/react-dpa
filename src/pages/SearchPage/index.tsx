import { useLocation, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import React, { useEffect, useState } from 'react'
import { getSearchMultiApi } from '@/api/search';

const SearchPage = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get("q");

  const fetchSearchMovie = async (searchTerm: string) => {
    try {
      const { data } = await getSearchMultiApi({ query: searchTerm });
      setSearchResults(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);
  
  return (
    <>
      {searchResults?.length ? (
        <section className='search-container'>
          {searchResults.map((movie) => {
            if (movie.backdrop_path !== null
              && movie.media_type !== "person"
            ) {
              const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
              return (
                <div className='movie' key={movie.id}>
                  <div className='movie__column-poster' onClick={() => navigate(`/${movie.id}`)} >
                    <img src={movieImageUrl} alt="movie" className='movie__poster' />
                  </div>
                </div>
              );
            }
            return <></>;
          })}
        </section>
       ) : (
        <section className='no-results'>
          <div className='no-results__text'>
            <p>
              찾고자하는 검색어 "{searchTerm}" 에 맞는 영화가 없습니다.
            </p>
          </div>
        </section>
      )}
    </>
  )
}

export default SearchPage;