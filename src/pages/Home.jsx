import styled from "styled-components";
import { useState } from "react";

export function Home() {
  const [contador, setContador] = useState(0);

  return (
    <Container>
      <h1>Home</h1>
      <StyledButton onClick={() => setContador(contador + 1)}>
        Aumentar
      </StyledButton>
      <p>Contador: {contador}</p>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh; /* Altura al 100% de la ventana del navegador */
  width: 100vw; /* Ancho al 100% de la ventana del navegador */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
border: none;
border: 1px solid ${(props) => props.theme.inputBorder};
background: ${(props) => props.theme.inputBg};
color: ${(props) => props.theme.text};
cursor: pointer;
transition: background 0.3s, color 0.3s;

  &:hover {
    background: ${(props) => props.theme.buttonHoverBg}; /* Color en hover del tema */
  }
`;
