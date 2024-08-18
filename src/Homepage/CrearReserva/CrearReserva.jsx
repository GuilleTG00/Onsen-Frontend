import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CrearReservaStepper from "./CrearReservaStepper";

const CrearReserva = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeStep = (newStep) => () => {
    setActiveStep(newStep);
  };

  return (
    <Grid container paddingTop={5} style={{ minHeight: "100vh" }}>
      <Grid item xs={12}>
        <CrearReservaStepper
          activeStep={activeStep}
          handleChangeStep={handleChangeStep}
        />
      </Grid>
    </Grid>
  );
};

export default CrearReserva;
