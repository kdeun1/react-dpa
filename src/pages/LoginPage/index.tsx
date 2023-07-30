import * as S from './styles';

const index = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Center>
          <S.LogoOne src="/images/cta-logo-one.svg" alt="logo-one" />
          <S.SignUpLink>지금 가입</S.SignUpLink>
          <S.Description>
            영화에 대한 프리미어 액세스를 얻으십시오.
            디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
          </S.Description>
          <S.LogoTwo src="images/cta-logo-two.png" alt="logo-two" />
        </S.Center>
        <S.BgImage />
      </S.Content>
    </S.Container>
  )
}

export default index