import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import CrearReservaStepper from "./CrearReservaStepper";
import SeleccionarFechaReserva from "./SeleccionarFechaReserva";
import SeleccionarHabitacion from "./SeleccionarHabitacion";
import VerificarReserva from "./VerificarReserva";
import { useLocation } from "react-router-dom";

const CrearReserva = ({}) => {
  const { state } = useLocation();
  const companionsState =
    state && state.companions
      ? state.companions
      : {
          adultos: 1,
          jovenes: 0,
          niños: 0,
        };

  const fechaCheckInState =
    state && state.fechaCheckIn ? state.fechaCheckIn : null;

  const fechaCheckOutState =
    state && state.fechaCheckOut ? state.fechaCheckOut : null;

  const activeStepState = state && state.step ? state.step : 0;

  const [activeStep, setActiveStep] = useState(activeStepState);
  const [fechaInicio, setFechaInicio] = useState(fechaCheckInState);
  const [fechaFinal, setFechaFinal] = useState(fechaCheckOutState);
  const [companions, setCompanions] = useState(companionsState);

  const handleChange = (type, operation) => {
    setCompanions((prev) => ({
      ...prev,
      [type]:
        operation === "increment"
          ? prev[type] + 1
          : Math.max(prev[type] - 1, 0),
    }));
  };

  const handleChangeStep = (newStep) => () => {
    setActiveStep(newStep);
  };

  const validateActiveStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <SeleccionarFechaReserva
            companions={companions}
            handleChangeCompanions={handleChange}
            fechaInicio={fechaInicio}
            fechaFinal={fechaFinal}
            setFechaInicio={setFechaInicio}
            setFechaFinal={setFechaFinal}
            setCompanions={setCompanions}
            handleChangeStep={handleChangeStep}
          />
        );
      case 1:
        return (
          <SeleccionarHabitacion
            fechaInicio={fechaInicio}
            fechaFinal={fechaFinal}
            companions={companions}
            handleChangeStep={handleChangeStep}
          />
        );
      case 2:
        return (
          <VerificarReserva
            fechaInicio={fechaInicio}
            fechaFinal={fechaFinal}
            companions={companions}
          />
        );
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
