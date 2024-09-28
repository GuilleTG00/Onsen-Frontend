import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Checkbox,
  Button,
} from "@mui/material";
import Carousel from "nuka-carousel";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../../GeneralStyles/formStyles.css";
import { getListadoHabitaciones } from "../../APICalls";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const CARDS_INFORMATION = [
  {
    title: "“Habitación Onsen High Class”",
    subtitle: "Habitación Premium",
    roomDescription: "Onsen Privado",
    camas: "5 camas",
    precioDia: 225,
    details: ["Habitación Premium", "Onsen Privado", "5 camas"],
    services: [
      "Guia turistica sobre la historia del Onsen",
      "Desayuno incluido",
      "Servicios de recomendaciones turísticas",
    ],
    extraServices: [
      {
        serviceTitle: "Jabones Especiales",
        image: "/Images/Homepage/soaps.jpg",
        priceUsd: 20,
        isAdded: false,
      },
      {
        serviceTitle: "Kit de Bienvenida",
        image: "/Images/Homepage/welcome-kit.jpg",
        priceUsd: 50,
        isAdded: false,
      },
    ],
    images: [
      "/Images/Homepage/HighClass/onsen-high-1.jpg",
      "/Images/Homepage/HighClass/onsen-high-2.jpg",
      "/Images/Homepage/HighClass/onsen-high-3.jpg",
      "/Images/Homepage/HighClass/onsen-high-4.jpg",
      "/Images/Homepage/HighClass/onsen-high-5.jpg",
    ],
  },
  {
    title: "“Habitación 2”",
    subtitle: "Habitación Classic",
    roomDescription: "Onsen Privado",
    camas: "3 camas",
    precioDia: 175,
    details: ["Habitación Classic", "Onsen Privado", "3 camas"],
    services: [
      "Guia turistica sobre la historia del Onsen",
      "Desayuno incluido",
      "Servicios de recomendaciones turísticas",
    ],
    extraServices: [
      {
        serviceTitle: "Jabones Especiales",
        image: "/Images/Homepage/soaps.jpg",
        priceUsd: 20,
        isAdded: false,
      },
      {
        serviceTitle: "Kit de Bienvenida",
        image: "/Images/Homepage/welcome-kit.jpg",
        priceUsd: 50,
        isAdded: false,
      },
    ],
    images: [
      "/Images/Homepage/Habitacion2/onsen-hab-2-1.jpg",
      "/Images/Homepage/Habitacion2/onsen-hab-2-2.jpg",
      "/Images/Homepage/Habitacion2/onsen-hab-2-3.jpg",
      "/Images/Homepage/Habitacion2/onsen-hab-2-4.jpg",
      "/Images/Homepage/Habitacion2/onsen-hab-2-5.jpg",
    ],
  },
  {
    title: "“Habitación 3”",
    subtitle: "Habitación Economic",
    roomDescription: "Acceso a Onsen Público",
    camas: "2 camas",
    precioDia: 125,
    details: ["Habitación Classic", "Onsen Publico", "2 camas"],
    services: [
      "Guia turistica sobre la historia del Onsen",
      "Desayuno incluido",
      "Servicios de recomendaciones turísticas",
    ],
    extraServices: [
      {
        serviceTitle: "Jabones Especiales",
        image: "/Images/Homepage/soaps.jpg",
        priceUsd: 20,
        isAdded: false,
      },
      {
        serviceTitle: "Kit de Bienvenida",
        image: "/Images/Homepage/welcome-kit.jpg",
        priceUsd: 50,
        isAdded: false,
      },
    ],
    images: [
      "/Images/Homepage/Habitacion3/onsen-hab-3-1.jpg",
      "/Images/Homepage/Habitacion3/onsen-hab-3-2.jpg",
      "/Images/Homepage/Habitacion3/onsen-hab-3-3.jpg",
    ],
  },
];

const SeleccionarHabitacion = ({
  fechaInicio,
  fechaFinal,
  companions,
  handleChangeStep,
  setHabitacionData,
}) => {
  const [selectedHabitacion, setSelectedHabitacion] = useState(null);
  const [selectedFullHabitacion, setSelectedFullHabitacion] = useState(null);
  const [missingHabitacion, setMissingHabitacion] = useState(false);
  const [habitacionesData, setHabitacionesData] = useState(null);

  const handleListadoHabitaciones = async () => {
    const { status, data } = await getListadoHabitaciones(
      localStorage.getItem("token")
    );
    if (status === 200) {
      setHabitacionesData(data);
    }
  };

  const handleCheckbox = (serviceElement) => () => {
    setSelectedFullHabitacion(serviceElement);
    setSelectedHabitacion(serviceElement.title);
  };

  const navigateCrearReserva = () => {
    setMissingHabitacion(false);
    if (selectedHabitacion) {
      setHabitacionData(selectedFullHabitacion);
      handleChangeStep(2)();
    } else {
      setMissingHabitacion(true);
    }
  };

  const parseDiasString = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const calculateDiasEntre = () => {
    const timeDifference = fechaFinal.getTime() - fechaInicio.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;
  };

  useEffect(() => {
    handleListadoHabitaciones();
  }, []);

  return (
    <Grid container justifyContent="center" spacing={10}>
      <Grid item xs={12}>
        <Card
          style={{
            background: "url(/Images/Homepage/dogo_onsen_hero_1.png)",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            position: "relative",
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "rgba(255, 254, 254, 0.8)",
          }}
        >
          <CardContent>
            <Grid
              container
              padding={10}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>¡Hemos encontrado habitaciones para tí!</b>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container alignItems="center" spacing={5} paddingLeft={5}>
          <Grid item>
            <IconButton
              onClick={handleChangeStep(0)}
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
      <Grid item xs={12}>
        <Grid container paddingLeft={5} spacing={1} justifyContent="center">
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
            <Typography
              variant="h6"
              sx={{
                color: "grey",
                textAlign: "left",
                fontFamily: "montserrat, sans-serif",
              }}
            >
              <b>Selecciona la habitación que te interese</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              spacing={5}
              padding={3}
              justifyContent="space-between"
              alignItems="center"
            >
              {habitacionesData ? (
                habitacionesData.map((element, index) => {
                  return (
                    <Grid item xs={4} key={element.title}>
                      <Grid container>
                        <Grid item xs={12}>
                          <Checkbox
                            checked={selectedHabitacion === element.title}
                            onChange={handleCheckbox(element, index)}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                          />
                        </Grid>
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
                            {element.images.map((elementImages, index) => (
                              <img
                                key={index}
                                src={elementImages}
                                style={{
                                  height: "350px",
                                  width: "100%",
                                }}
                                alt={element.title + index}
                              />
                            ))}
                          </Carousel>
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
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {element.subtitle}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {element.roomDescription}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {element.camas}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {companions.adultos +
                              companions.jovenes +
                              companions.niños}{" "}
                            Acompañantes
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            {calculateDiasEntre()} día(s) |{" "}
                            {parseDiasString(fechaInicio)} a{" "}
                            {parseDiasString(fechaFinal)}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "grey",
                              textAlign: "justify",
                              fontFamily: "montserrat, sans-serif",
                            }}
                          >
                            <b>
                              $ {calculateDiasEntre() * element.precioDia} USD*
                            </b>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <></>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {selectedHabitacion && (
        <Grid item xs={12}>
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            paddingInline={5}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  color: "#000000",
                  textAlign: "center",
                  fontFamily: "montserrat, sans-serif",
                }}
              >
                <b>Habitación seleccionada: </b>
                {selectedHabitacion}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={navigateCrearReserva}
                variant="contained"
                style={{
                  backgroundColor: "#a0ff99",
                  color: "black",
                  fontSize: "20px",
                }}
              >
                <b>Verificar y Crear Reserva</b>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      )}
      {missingHabitacion && (
        <Grid item xs={12} paddingTop={3}>
          <Typography
            variant="h6"
            sx={{
              color: "#8b0000",
              textAlign: "center",
            }}
          >
            <b>Por favor selecciona una habitación antes de continuar</b>
          </Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          padding={5}
          style={{ backgroundColor: "#d9d9d9" }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#000000",
              textAlign: "center",
              fontFamily: "montserrat, sans-serif",
            }}
          >
            <b>
              * Los precios que se muestran cuentan con los servicios que vienen
              incluídos con la habitación. Si deseas agregar más servicios,
              tendrá un costo extra.
            </b>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeleccionarHabitacion;
