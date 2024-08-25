import React, { useState, useEffect } from "react";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CrearReservaStepper from "./CrearReservaStepper";
import SeleccionarFechaReserva from "./SeleccionarFechaReserva";
import SeleccionarHabitacion from "./SeleccionarHabitacion";
import VerificarReserva from "./VerificarReserva";

const CrearReserva = () => {
  const [activeStep, setActiveStep] = useState(0);

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
