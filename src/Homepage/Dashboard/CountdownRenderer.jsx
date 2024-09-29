import React from "react";

import { Grid, Typography } from "@mui/material";

const Completionist = () => (
  <Typography
    variant="h5"
    style={{
      fontFamily: "Montserrat, sans-serif",
      color: "black",
    }}
  >
    <b>Esta reserva ha sido completada.</b>
  </Typography>
);
const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  // Renderer callback with condition
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Grid container justifyContent="space-evenly" spacing={5}>
        <Grid item xs={3}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                <b>{days}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                Días
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                <b>{hours}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                Horas
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                <b>{minutes}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                Minutos
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                <b>{seconds}</b>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  color: "black",
                }}
              >
                Segundos
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default CountdownRenderer;
