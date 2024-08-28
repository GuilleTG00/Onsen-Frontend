import _ from "lodash";
import Carousel from "nuka-carousel";

import React, { useState, useEffect } from "react";
import { Grid, Button, Checkbox, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const VerificarReserva = ({
  fechaInicio,
  fechaFinal,
  handleChangeStep,
  habitacionData,
}) => {
  const navigate = useNavigate();

  const [values, setValues] = useState(habitacionData["extraServices"]);
  const [calculatedTotal, setCalculatedTotal] = useState(0);
  const [data, setData] = useState([habitacionData]);
  const calculateDiasEntre = () => {
    const timeDifference = fechaFinal.getTime() - fechaInicio.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  };
  const handleTotal = () => {
    const extraServicesTotal = values
      .filter((service) => service.isAdded)
      .reduce((sum, service) => sum + service.priceUsd, 0);
    return data[0]["precioDia"] * calculateDiasEntre() + extraServicesTotal;
  };

  const navigateListado = () => {
    navigate("/listado-reservas");
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
      spacing={2}
      justifyContent="center"
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
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={5} paddingLeft={5}>
          <Grid item>
            <IconButton
              onClick={handleChangeStep(1)}
              style={{
                background: "#d9d9d9",
              }}
              color="error"
              size="large"
            >
              <ArrowBackIcon style={{ fontSize: "30px" }} />
            </IconButton>
          </Grid>
          <Grid item xs={6}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>
                    {fechaInicio
                      ? fechaInicio.toLocaleDateString("es-CO", DATE_OPTIONS)
                      : ""}
                  </b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>-</b>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>
                    {fechaFinal
                      ? fechaFinal.toLocaleDateString("es-CO", DATE_OPTIONS)
                      : ""}
                  </b>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={7}>
        <Grid container justifyContent="center" alignItems="flex-start">
          <Grid item xs={12}>
            <Carousel
              autoplay
              wrapAround
              adaptiveHeight
              dragging
              cellAlign="center"
              autoplayInterval={5000}
              pauseOnHover={true}
            >
              {data[0]["images"].map((elementImages, index) => (
                <img
                  key={index}
                  src={elementImages}
                  style={{
                    height: "100vh",
                    width: "100%",
                  }}
                  alt={index}
                />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
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
                  <Grid container justifyContent="center" alignItems="center">
                    {extraServices.map((servicesElement, index) => {
                      const { serviceTitle, image, priceUsd } = servicesElement;
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
                                    src={image}
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
              onClick={navigateListado}
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
