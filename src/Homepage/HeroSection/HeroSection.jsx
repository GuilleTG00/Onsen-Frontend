import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./heroClasses.css";

const HeroSection = () => {
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
              }}
            >
              DOGO ONSEN
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="center">
              <Grid item xs={12}>
                <Button
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
