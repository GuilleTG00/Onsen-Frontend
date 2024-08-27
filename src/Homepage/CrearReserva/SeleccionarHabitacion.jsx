import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Carousel from "nuka-carousel";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../../GeneralStyles/formStyles.css";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const CARDS_INFORMATION = [
  {
    title: "“Habitación Onsen High Class”",
    subtitle: "Habitación Premium",
    roomDescription: "Onsen Privado",
    camas: "5 camas",
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
}) => {
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
        <Grid
          container
          paddingLeft={5}
          paddingTop={0}
          spacing={3}
          justifyContent="center"
        >
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
            <Grid
              container
              spacing={5}
              padding={3}
              justifyContent="space-between"
              alignItems="center"
            >
              {CARDS_INFORMATION.map((element) => {
                return (
                  <Grid item xs={4} key={element.title}>
                    <Grid container>
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
                            color: "#000000",
                            textAlign: "left",
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
                            color: "#000000",
                            textAlign: "left",
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
                            color: "#000000",
                            textAlign: "left",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {element.camas}
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
