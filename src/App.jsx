import React, { useState, useEffect } from "react";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Light, Dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

// Crear el contexto de tema
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light"); // Inicializamos el tema con "light"

  // Seleccionar el tema correcto con base en la cadena
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Container className={sidebarOpen ? "sidebarState active" : ""}>
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <MyRoutes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};  /* Aquí aplicamos el fondo del tema */
  transition: all 0.3s;
  &.active {
    grid-template-columns: 300px auto;
  }
  color: ${({ theme }) => theme.text};  /* Aplicamos el color del texto del tema */
`;

export default App;
