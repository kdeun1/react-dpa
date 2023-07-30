import { useEffect, useState } from 'react';
import * as S from './styles'; 
import NavSearch from '../NavSearch/NavSearch';

const NavIcon = () => {
  const NAV_HEIGHT_PX = 50;
  const [show, setShow] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > NAV_HEIGHT_PX) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <S.NavWrapper $show={show}>
      <S.Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </S.Logo>

      <NavSearch />
    </S.NavWrapper>
  )
}

export default NavIcon;