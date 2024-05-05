import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import HomeContainer from "./HomeContainer";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./mainHomeStyles.css";

const MainHomeRenderer = () => {
  const { pathname } = useLocation();
  const parsedPathname = pathname.replace("/", "");

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,500,600,700,800,900"],
      },
    });
  }, []);

  //Función para renderizar dependiendo de la URL que se encuenre el usuario.

  const validateInnerComponent = () => {
    switch (parsedPathname) {
      case "home":
        return <HomeContainer />;
      default:
        return <HomeContainer />;
    }
  };

  return (
    <Grid
      container
      style={{
        padding: 0,
      }}
    >
      {/**AppBar que se verá en cada una de las vistas */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#D9D9D9",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <Button variant="text" className="button-text">
                <b className="button-text">Sobre Nosotros</b>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text">
                <b className="button-text">HOME</b>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" className="button-text">
                <b className="button-text">Ingreso</b>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="text" className="button-text">
                <b className="button-text">Registro</b>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {validateInnerComponent()}
    </Grid>
  );
};

export default MainHomeRenderer;
