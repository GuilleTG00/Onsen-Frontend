import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import "./mainHomeStyles.css";

import HomeContainer from "./HomeContainer";
import LoginPage from "../Login/LoginPage";
import SignupPage from "../Register/SignUpPage";
import useMediaQuery from "@mui/material/useMediaQuery";

const TITLES = [
  "Homepage",
  "Sobre Nosotros",
  "Ingreso",
  "Registro",
  "Sobre el Desarrollador",
];

const MainHomeRenderer = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const parsedPathname = pathname.replace("/", "");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,500,600,700,800,900"],
      },
    });
  }, []);

  const validateInnerComponent = () => {
    switch (parsedPathname) {
      case "home":
        return <HomeContainer />;
      case "login":
        return <LoginPage />;
      case "signup":
        return <SignupPage />;
      default:
        return <HomeContainer />;
    }
  };

  const onClickDeveloper = () => {
    window
      .open("https://www.linkedin.com/in/guillermo-toloza-guzman/", "_blank")
      .focus();
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const navigateHome = () => {
    navigate("/home");
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("token");
    navigate("/home");
  };

  return (
    <Grid container>
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
            <Grid item xs={12} md={4}>
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
                  <Button onClick={navigateHome} variant="text">
                    <b className="button-text">HOME</b>
                  </Button>
                </Grid>
                {isLoggedIn && (
                  <Grid item>
                    <Button
                      onClick={navigateDashboard}
                      variant="text"
                      className="button-text"
                    >
                      <b className="button-text">Dashboard</b>
                    </Button>
                  </Grid>
                )}
                {!isLoggedIn && (
                  <>
                    <Grid item>
                      <Button
                        onClick={navigateLogin}
                        variant="text"
                        className="button-text"
                      >
                        <b className="button-text">Ingreso</b>
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={navigateSignup}
                        variant="text"
                        className="button-text"
                      >
                        <b className="button-text">Registro</b>
                      </Button>
                    </Grid>
                  </>
                )}
                {isLoggedIn && (
                  <Grid item>
                    <Button
                      onClick={logoutHandler}
                      variant="text"
                      className="button-text"
                    >
                      <b className="button-text">Logout</b>
                    </Button>
                  </Grid>
                )}
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
      >
        <Toolbar>
          <Grid container alignItems="center" padding={isSmallScreen ? 0 : 2}>
            <Grid item xs={12}>
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={isSmallScreen ? 5 : 5}
              >
                <Grid item xs={12} md={4}>
                  <Button>
                    <img
                      src="/Images/Homepage/onsen-logo-red.png"
                      style={{
                        height: "50px",
                        width: "50px",
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
                          xs={12}
                          md={4}
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
