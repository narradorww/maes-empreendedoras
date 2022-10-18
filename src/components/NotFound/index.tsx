import * as S from './styles'

export default function NotFound() {

  return (
    <S.Wrapper>
      <p>404 - page not found </p>
     <S.Title> Puxa, não encontramos a página solicitada...</S.Title>

      <S.Description>Mas pode ser uma ótima oportunidade de encontrar um novo caminho!</S.Description>
      <S.Container>

      <S.Illustration src="/img/404Illustration.svg" alt="Página não encontrada" />
      <S.Description>
        <S.Link href="/">Voltar para a Home</S.Link>
        <S.Link href="/">Atibaia para Crianças</S.Link>
        <S.Link href="/">Saúde da Mulher Atibaia</S.Link>
      </S.Description>
      </S.Container>
    </S.Wrapper>


  );
}
