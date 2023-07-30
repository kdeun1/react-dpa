import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styles';

const NavHeader = () => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleAuth = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  }

  return (
    <>
      {pathname === "/" ?
        (<S.Login onClick={handleAuth}>Login</S.Login>) :
        <>
          <S.Input
            value={searchValue}
            onChange={handleChange}
            className='nav__input'
            type="text"
            placeholder='검색해주세요.'
          />
        </>
      }
    </>
  )
}

export default NavHeader;