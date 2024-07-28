import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import HomeContainer from "./HomeContainer";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation } from "react-router-dom";
import "./mainHomeStyles.css";

const TITLES = ["Homepage", "Sobre Nosotros", "Registro", "Login"];

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
            <Grid item xs={4}>
              <img
                src="/Images/Homepage/onsen-logo.png"
                style={{
                  height: "8%",
                  width: "8%",
                  cursor: "pointer",
                }}
                alt="Onsen Logo"
              />
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button variant="text">
                    <b className="button-text">HOME</b>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="text" className="button-text">
                    <b className="button-text">Sobre Nosotros</b>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent="center">
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
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {validateInnerComponent()}
      <AppBar
        position="relative"
        style={{
          background: "black",
          zIndex: 2,
        }}
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" padding={2}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={5}
              >
                <Grid item xs={12} md={4}>
                  <Button>
                    <img
                      src="/Images/Homepage/onsen-logo-red.png"
                      style={{
                        height: "15%",
                        width: "15%",
                        cursor: "pointer",
                      }}
                      alt="Onsen Logo Dark"
                    />
                  </Button>
                </Grid>
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    {TITLES.map((element, key) => {
                      return (
                        <Grid
                          item
                          key={key}
                          xs={4}
                          style={{
                            textAlign: "left",
                          }}
                        >
                          <Button variant="text" style={{ color: "white" }}>
                            <b>{element}</b>
                          </Button>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={12}>
                    <b
                      style={{
                        color: "white",
                        textShadow: "4px 4px #000000",
                      }}
                    ></b>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <b
                  style={{
                    color: "white",
                    textShadow: "4px 4px #000000",
                  }}
                >
                  {new Date().getFullYear()} - Dev: Guillermo Toloza Guzmán
                </b>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default MainHomeRenderer;
