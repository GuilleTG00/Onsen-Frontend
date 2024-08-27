import _ from "lodash";
import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import "../../GeneralStyles/formStyles.css";
import AcompañantesSelection from "../ComponentUtils/AcompañantesSelection";
import { useNavigate } from "react-router-dom";

const CARDS_INFORMATION = [
  {
    title: "“Habitación Onsen High Class”",
    subtitle: "Habitación Premium",
    image: "/Images/Homepage/luxury-onsen-ryokan_4.jpg",
  },
  {
    title: "“Habitación 2”",
    subtitle: "Habitación Classic",
    image: "/Images/Homepage/onsen-classic.jpg",
  },
  {
    title: "“Habitación 3”",
    subtitle: "Habitación Economic",
    image: "/Images/Homepage/onsen-economic.jpeg",
  },
];

const SeleccionarFechaReserva = ({
  companions,
  handleChangeCompanions,
  fechaInicio,
  fechaFinal,
  setFechaFinal,
  setFechaInicio,
  handleChangeStep,
}) => {
  const navigate = useNavigate();
  const [errorFields, setErrorFields] = useState(false);

  const handleValidationStep = () => {
    setErrorFields(false);
    const hasCompanions = Object.values(companions).some((count) => count > 0);
    if (!_.isNil(fechaInicio) && !_.isNil(fechaFinal) && hasCompanions) {
      handleChangeStep(1)();
    } else {
      setErrorFields(true);
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Card style={{ backgroundColor: "#d9d9d9" }}>
          <CardContent>
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={3}>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                          }}
                        >
                          <b>Check-In</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            format="MM-DD-YYYY"
                            label="Selecciona la fecha de inicio"
                            value={
                              moment(fechaInicio)
                                ? moment(fechaInicio)
                                : moment(new Date())
                            }
                            onChange={(newValue) =>
                              setFechaInicio(newValue.toDate())
                            }
                            onFocus={(e) => {
                              setFechaInicio(e.target.value);
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                          }}
                        >
                          <b>Check-Out</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            format="MM-DD-YYYY"
                            label="Selecciona la fecha de Fin"
                            value={
                              moment(fechaFinal)
                                ? moment(fechaFinal)
                                : moment(new Date())
                            }
                            onChange={(newValue) =>
                              setFechaFinal(newValue.toDate())
                            }
                            onFocus={(e) => {
                              setFechaFinal(e.target.value);
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Grid
                      container
                      spacing={1}
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                          }}
                        >
                          <b>Acompañantes</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <AcompañantesSelection
                          companions={companions}
                          handleChange={handleChangeCompanions}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      onClick={handleValidationStep}
                      variant="contained"
                      style={{ color: "white", backgroundColor: "black" }}
                    >
                      <b>Buscar</b>
                    </Button>
                  </Grid>
                  {errorFields && (
                    <Grid item xs={12} paddingTop={3}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#8b0000",
                          textAlign: "center",
                        }}
                      >
                        <b>
                          Hay campos incompletos necesarios para realizar la
                          búsqueda.
                        </b>
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container padding={5} spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{
                color: "#000000",
                textAlign: "left",
                fontFamily: "montserrat, sans-serif",
              }}
            >
              <b>Las habitaciones favoritas de nuestros clientes</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-between" alignItems="center">
              {CARDS_INFORMATION.map((element) => {
                return (
                  <Grid item xs={4} key={element.title}>
                    <Grid container>
                      <Grid item xs={12}>
                        <img
                          src={element.image}
                          style={{
                            height: "300px",
                            width: "400px",
                          }}
                          alt={element.title}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          <b>{element.title}</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {element.subtitle}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeleccionarFechaReserva;
