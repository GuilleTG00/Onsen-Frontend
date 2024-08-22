import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { Carousel } from "nuka-carousel";

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
    images: ["/Images/Homepage/luxury-onsen-ryokan_4.jpg"],
  },
  {
    title: "“Habitación 2”",
    subtitle: "Habitación Classic",
    roomDescription: "Onsen Privado",
    camas: "3 camas",
    images: [
      "/Images/Homepage/onsen-classic.jpg",
      "/Images/Homepage/onsen-classic.jpg",
    ],
  },
  {
    title: "“Habitación 3”",
    subtitle: "Habitación Economic",
    roomDescription: "Acceso a Onsen Público",
    camas: "2 camas",
    images: ["/Images/Homepage/onsen-economic.jpeg"],
  },
];

const SeleccionarHabitacion = ({ startDate, endDate }) => {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());

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
                  <b>{fechaInicio.toLocaleDateString("es-CO", DATE_OPTIONS)}</b>
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
                  <b>{fechaFinal.toLocaleDateString("es-CO", DATE_OPTIONS)}</b>
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
            <Grid container justifyContent="space-between" alignItems="center">
              {CARDS_INFORMATION.map((element) => {
                return (
                  <Grid item xs={4} key={element.title}>
                    <Grid container>
                      <Grid item xs={11}>
                        <Carousel
                          wrapMode="wrap"
                          showArrows
                          autoplay={true}
                          autoplayInterval={1000}
                          pauseOnHover={false}
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
        <Grid container padding={5} style={{ backgroundColor: "#d9d9d9" }}>
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
