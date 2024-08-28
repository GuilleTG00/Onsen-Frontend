import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./heroClasses.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      className="hero-container"
    >
      <Grid item xs={12}>
        <Grid
          container
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h1"
              sx={{
                color: "#000000",
                textAlign: "center",
                letterSpacing: "20px",
                fontFamily: "montserrat, sans-serif",
              }}
            >
              DOGO ONSEN
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Button
                  onClick={navigateDashboard}
                  style={{
                    backgroundColor: "white",
                  }}
                  variant="contained"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#000000",
                      textAlign: "center",
                      letterSpacing: "1px",
                      fontFamily: "montserrat, sans-serif",
                    }}
                  >
                    Reserva Aquí
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
