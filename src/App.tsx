import './App.css';
import styled from 'styled-components';
import Nav from '@components/molecules/Nav/Nav';
import Banner from '@components/molecules/Banner/Banner';

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

const App = () => {
  return (
    <Container>
      <Nav />
      <Banner />
    </Container>
  );
}

export default App;
