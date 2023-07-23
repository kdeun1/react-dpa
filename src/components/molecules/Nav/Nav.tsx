import { NavWrapper, Logo } from './styles' ; 

const Nav = () => {
  return (
    <NavWrapper>
      <Logo>
        <img
          alt="Disney Plus Logo"
          src="/images/logo.svg"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
    </NavWrapper>
  )
}

export default Nav