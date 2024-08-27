import _ from "lodash";

import React, { useState, useEffect } from "react";
import { Grid, Button, Toolbar, Checkbox, Typography } from "@mui/material";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const data = [
  {
    title: "Habitación Onsen High Class",
    details: ["Habitación Premium", "Onsen Privado", "5 camas"],
    services: [
      "Guia turistica sobre la historia del Onsen",
      "Desayuno incluido",
      "Servicios de recomendaciones turísticas",
    ],
    totalCalculated: 900,
    extraServices: [
      {
        serviceTitle: "Jabones Especiales",
        image: "",
        priceUsd: 20,
        isAdded: false,
      },
      {
        serviceTitle: "Kit de Bienvenida",
        image: "",
        priceUsd: 50,
        isAdded: false,
      },
    ],
  },
];

const VerificarReserva = ({ fechaInicio, fechaFinal }) => {
  const [values, setValues] = useState(data[0]["extraServices"]);
  const [calculatedTotal, setCalculatedTotal] = useState(0);

  const handleTotal = () => {
    const extraServicesTotal = values
      .filter((service) => service.isAdded)
      .reduce((sum, service) => sum + service.priceUsd, 0);
    return data[0]["totalCalculated"] + extraServicesTotal;
  };

  const handleCheckbox = (servicesElement, index) => (value) => {
    const adjustedNewElement = {
      ...servicesElement,
      isAdded: value.target.checked,
    };

    const newValue = [
      ...values.slice(0, index),
      adjustedNewElement,
      ...values.slice(index + 1),
    ];

    setValues(newValue);
  };

  useEffect(() => {
    if (values && !_.isEmpty(values)) {
      const calculatedTotal = handleTotal();
      setCalculatedTotal(calculatedTotal);
    }
  }, [values]);

  return (
    <Grid
      container
      alignItems="center"
      spacing={10}
      paddingBottom={10}
      style={{ color: "black" }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: "#000000",
            textAlign: "center",
            fontFamily: "montserrat, sans-serif",
          }}
        >
          <b>Habitación Seleccionada</b>
        </Typography>
      </Grid>
      <Grid item xs={7}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <img
              src="/Images/Homepage/onsen-logo.png"
              style={{
                height: "8%",
                width: "8%",
                cursor: "pointer",
              }}
              alt="Onsen Logo"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Grid container justifyContent="center" spacing={5}>
          {data.map((element) => {
            const { title, details, services, extraServices } = element;
            return (
              <>
                <Grid item xs={12}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "montserrat, sans-serif",
                    }}
                  >
                    <b>{title}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2} justifyContent="center">
                    {details.map((detailsElement) => {
                      return (
                        <Grid item xs={12} key={detailsElement}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "grey",
                              textAlign: "left",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {detailsElement}
                          </Typography>
                        </Grid>
                      );
                    })}
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "grey",
                          textAlign: "left",
                          fontFamily: "montserrat, sans-serif",
                        }}
                      >
                        {fechaInicio
                          ? fechaInicio.toLocaleDateString(
                              "es-CO",
                              DATE_OPTIONS
                            )
                          : ""}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "grey",
                          textAlign: "left",
                          fontFamily: "montserrat, sans-serif",
                        }}
                      >
                        {fechaFinal
                          ? fechaFinal.toLocaleDateString("es-CO", DATE_OPTIONS)
                          : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "montserrat, sans-serif",
                    }}
                  >
                    <b>Servicios Incluidos:</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent="center">
                    {services.map((servicesElement) => {
                      return (
                        <Grid item xs={12} key={servicesElement}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#000000",
                              textAlign: "left",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            - {servicesElement}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#000000",
                      textAlign: "left",
                      fontFamily: "montserrat, sans-serif",
                    }}
                  >
                    <b>¿Deseas Agregar un Servicio Extra?</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    padding={5}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {extraServices.map((servicesElement, index) => {
                      const { serviceTitle, image, priceUsd, isAdded } =
                        servicesElement;
                      return (
                        <Grid item xs={6} key={index}>
                          <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={6}>
                              <Checkbox
                                {...serviceTitle}
                                onClick={handleCheckbox(servicesElement, index)}
                                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Grid xs={12}>
                                  <img
                                    //key={index}
                                    src="/Images/Homepage/dogo_onsen_old_pic.jpg"
                                    style={{
                                      height: "150px",
                                      width: "100%",
                                    }}
                                  />
                                </Grid>
                                <Grid xs={12}>
                                  <Typography
                                    variant="h5"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "montserrat, sans-serif",
                                    }}
                                  >
                                    <b>{serviceTitle}</b>
                                  </Typography>
                                </Grid>
                                <Grid xs={12}>
                                  <Typography
                                    variant="h5"
                                    sx={{
                                      color: "grey",
                                      textAlign: "center",
                                      fontFamily: "montserrat, sans-serif",
                                    }}
                                  >
                                    + {priceUsd} USD
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "black",
                      textAlign: "center",
                      fontFamily: "montserrat, sans-serif",
                    }}
                  >
                    <b>Total: ${calculatedTotal} USD</b>
                  </Typography>
                </Grid>
              </>
            );
          })}
          <Grid item xs={12}>
            <Button
              //onClick={navigateDashboard}
              variant="contained"
              style={{
                backgroundColor: "#a0ff99",
                color: "black",
                fontSize: "20px",
              }}
            >
              <b>Crear Reserva</b>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default VerificarReserva;
