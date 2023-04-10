import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding-block-end: 0;
box-sizing:border-box;
font-family: 'Poppins', sans-serif;
}
h1{
  color: tomato;
  text-align: center;
}
body{
  background-color: black;
  font-family: 'Poppins', sans-serif;
}
`;

const Container = styled.main`
  border: solid;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92vh;
`;
const PratoBox = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  background-color: #1f1f1f;
  padding: 10px;
  border-radius: 10px;

  img {
    width: 18vw;
    height: 26vh;
  }

  h2 {
    color: #ffffff;
    text-align: center;
  }
  p {
    color: #ffffff;
  }
 
  }
`;

export const Button = styled.button`
  width: 10vw;
  height: 6vh;
  background-color: ${(props) => props.ButtonColor || "aqua"};
  color: black;
  border-radius: 10px;
  font-size: 1em;
  :hover {
    cursor: pointer;
    opacity: 70%;
    transition: 1.1s;
    background-color: black;
    color: #ffffff;
    font-weight: 700;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Bem vindo ao Restaurante</h1>

      <Container>
        <PratoBox>
          <h2>Entrada</h2>
          <img
            src="https://static.wixstatic.com/media/d811f7_406fc35f2e4749cd95f2cf27f4cee3d4~mv2.png/v1/fill/w_540,h_462,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Quem%20ama%20PASTEL-02.png"
            alt="Churras"
          />
          <p>Preço: R$: 20,00</p>
          <p>Sabores: frango, camarão, carne e romeu e julieta.</p>
          <Button ButtonColor="orange">Comprar Agora</Button>
        </PratoBox>
        <PratoBox>
          <h2>Prato Principal</h2>
          <img
            src="https://www.swift.com.br/arquivos/rnk-churrasco-picanha-farofa-queijo-mel-img-seo.png?v=637958183309000000"
            alt="Pastel"
          />
          <p>Preço: R$: 60,00</p>
          <Button ButtonColor="red">Comprar Agora</Button>
        </PratoBox>
        <PratoBox>
          <h2>Bebidas</h2>
          <img
            src="https://s.cornershopapp.com/product-images/2102696.png?versionId=y3.ytFYdn0nvo.0Hc2v6Hp2gdIcNjs1V"
            alt="Pastel"
          />
          <p>Preço: R$: 10,00</p>
          <Button ButtonColor="green">Comprar Agora</Button>
        </PratoBox>
      </Container>
    </>
  );
}
