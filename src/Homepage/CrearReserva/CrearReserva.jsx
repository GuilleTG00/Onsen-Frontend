import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CrearReservaStepper from "./CrearReservaStepper";
import SeleccionarFechaReserva from "./SeleccionarFechaReserva";
import SeleccionarHabitacion from "./SeleccionarHabitacion";
import VerificarReserva from "./VerificarReserva";

const CrearReserva = () => {
  const [activeStep, setActiveStep] = useState(2);

  const handleChangeStep = (newStep) => () => {
    setActiveStep(newStep);
  };

  const validateActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <SeleccionarFechaReserva />;
      case 1:
        return <SeleccionarHabitacion />;
      case 2:
        return <VerificarReserva />;
    }
  };

  return (
    <Grid container spacing={10} paddingTop={5}>
      <Grid item xs={12}>
        <CrearReservaStepper
          activeStep={activeStep}
          handleChangeStep={handleChangeStep}
        />
      </Grid>
      <Grid item xs={12}>
        {validateActiveStep()}
      </Grid>
    </Grid>
  );
};

export default CrearReserva;
