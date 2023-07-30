import Banner from '@components/Banner/Banner';
import Category from '@components/Category/Category';
import Row from '@components/Row/Row';
import requests from '@api/request';
import * as S from './styles';

const index = () => {
  return (
    <S.Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies} />
    </S.Container>
  );
}

export default index