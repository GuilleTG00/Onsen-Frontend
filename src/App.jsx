import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

// Implementacion de Lazy Loading para su carga únicamente al ser usado.

const MainRenderer = React.lazy(() => import("./Homepage/MainHomeRenderer"));

//Creamos tema de colores para usar dentro de la aplicación.

const theme = createTheme({
  palette: {
    ochre: {
      main: "#000000",
      light: "#C0C0C0",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

function App() {
  return (
    <>
      <div style={{ margin: 0 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<MainRenderer />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
