import React from "react";
import Countdown from "react-countdown";

import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const Completionist = () => <span>Webinar is already finished!</span>;
const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
  // Renderer callback with condition
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={2}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
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
                Days
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
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
                Hours
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
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
                Minutes
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Grid
            container
            style={{ backgroundColor: "white" }}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography
                variant="h4"
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
                Seconds
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
};

export default CountdownRenderer;
