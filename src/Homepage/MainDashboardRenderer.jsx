import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { Grid, Button, Toolbar, AppBar, Divider } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "./mainHomeStyles.css";

import HomeContainer from "./HomeContainer";
import LoginPage from "../Login/LoginPage";
import SignupPage from "../Register/SignUpPage";
import DashboardPage from "./Dashboard/DashboardPage";
import CrearReserva from "./CrearReserva/CrearReserva";
import ListadoReservas from "./ListadoReservas/ListadoReservas";
import ListadoInventario from "./ListadoInventario/ListadoInventario";

const TITLES = [
  "Homepage",
  "Sobre Nosotros",
  "Ingreso",
  "Registro",
  "Sobre el Desarrollador",
];

const MainHomeRenderer = () => {
  const { pathname } = useLocation();
  const parsedPathname = pathname.replace("/", "");
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState(parsedPathname);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"));

  useEffect(() => {
    setSelectedView(parsedPathname);
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,500,600,700,800,900"],
      },
    });
  }, []);

  //Función para renderizar dependiendo de la URL que se encuenre el usuario.

  const validateInnerComponent = () => {
    switch (parsedPathname) {
      case "inicio":
        return <HomeContainer />;
      case "crear-reserva":
        return <CrearReserva />;
      case "signup":
        return <SignupPage />;
      case "dashboard":
        return <DashboardPage />;
      case "listado-reservas":
        return <ListadoReservas />;
      case "listado-inventario":
        return <ListadoInventario />;
      default:
        return <HomeContainer />;
    }
  };

  const onClickDeveloper = () => {
    window
      .open("https://www.linkedin.com/in/guillermo-toloza-guzman/", "_blank")
      .focus();
  };

  const navigateReservas = () => {
    navigate("/listado-reservas");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const navigateCrearReserva = () => {
    navigate("/crear-reserva");
  };

  const navigateListadoInventario = () => {
    navigate("/listado-inventario");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    navigate("/home");
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
          <Grid
            container
            paddingTop={1}
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={2}>
              <img
                onClick={navigateHome}
                src="/Images/Homepage/onsen-logo.png"
                style={{
                  height: "35px",
                  width: "35px",
                  cursor: "pointer",
                }}
                alt="Onsen Logo"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button
                    onClick={navigateReservas}
                    variant="text"
                    className="button-text"
                  >
                    <b className="button-text">Mis Reservas</b>
                  </Button>
                  {["listado-reservas"].includes(parsedPathname) && (
                    <Divider
                      style={{
                        background: "#68b9ff",
                        borderBottomWidth: 3,
                      }}
                    />
                  )}
                </Grid>
                {isAdmin && (
                  <>
                    <Grid item>
                      <Button
                        onClick={navigateListadoInventario}
                        variant="text"
                        className="button-text"
                      >
                        <b className="button-text">Listado Inventario</b>
                      </Button>
                      {["listado-inventario"].includes(parsedPathname) && (
                        <Divider
                          style={{
                            background: "#68b9ff",
                            borderBottomWidth: 3,
                          }}
                        />
                      )}
                    </Grid>
                  </>
                )}
                <Grid item>
                  <Button onClick={navigateHome} variant="text">
                    <b className="button-text">INICIO</b>
                  </Button>
                  {["home"].includes(parsedPathname) && (
                    <Divider
                      style={{
                        background: "#68b9ff",
                        borderBottomWidth: 3,
                      }}
                    />
                  )}
                </Grid>
                <Grid item>
                  <Button onClick={navigateDashboard} variant="text">
                    <b className="button-text">Dashboard</b>
                  </Button>
                  {["dashboard"].includes(parsedPathname) && (
                    <Divider
                      style={{
                        background: "#68b9ff",
                        borderBottomWidth: 3,
                      }}
                    />
                  )}
                </Grid>
                <Grid item>
                  <Button
                    onClick={navigateCrearReserva}
                    variant="text"
                    className="button-text"
                  >
                    <b className="button-text">Crear Reserva</b>
                  </Button>
                  {["crear-reserva"].includes(parsedPathname) && (
                    <Divider
                      style={{
                        background: "#68b9ff",
                        borderBottomWidth: 3,
                      }}
                    />
                  )}
                </Grid>
                <Grid item>
                  <Button
                    onClick={handleLogout}
                    variant="text"
                    className="button-text"
                  >
                    <b className="button-text">Logout</b>
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
                          <Button
                            variant="text"
                            onClick={
                              element === "Sobre el Desarrollador"
                                ? onClickDeveloper
                                : () => {}
                            }
                            style={{ color: "white" }}
                          >
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
