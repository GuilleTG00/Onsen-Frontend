import _ from "lodash";
import React, { useEffect, useState } from "react";
import moment from "moment";
import useMediaQuery from "@mui/material/useMediaQuery";
import Countdown from "react-countdown";
import { getLastReservaAPI } from "../../APICalls";

import {
  Grid,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import CountdownRenderer from "./CountdownRenderer";
import AcompañantesSelection from "../ComponentUtils/AcompañantesSelection";

import "./dashboard-styles.css";

const DashboardPage = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFinal, setFechaFinal] = useState(null);
  const [currentReserva, setCurrentReserva] = useState(null);

  const [companions, setCompanions] = useState({
    adultos: 1,
    jovenes: 0,
    niños: 0,
  });

  const navigateListado = () => {
    navigate("/listado-reservas");
  };

  const handleAPICall = async () => {
    const { status, data } = await getLastReservaAPI(
      localStorage.getItem("token")
    );
    if (status === 200) {
      setCurrentReserva(data);
    }
  };

  const handleChange = (type, operation) => {
    setCompanions((prev) => ({
      ...prev,
      [type]:
        operation === "increment"
          ? prev[type] + 1
          : Math.max(prev[type] - 1, 0),
    }));
  };

  const handleNavigateReservaSearch = () => {
    const hasCompanions = Object.values(companions).some((count) => count > 0);
    if (!_.isNil(fechaInicio) && !_.isNil(fechaFinal) && hasCompanions) {
      navigate("/crear-reserva", {
        state: {
          step: 1,
          fechaCheckIn: fechaInicio ? fechaInicio.toDate() : "",
          fechaCheckOut: fechaFinal ? fechaFinal.toDate() : "",
          companions,
        },
      });
    } else {
      navigate("/crear-reserva", {
        state: {
          step: 0,
          fechaCheckIn: fechaInicio ? fechaInicio.toDate() : "",
          fechaCheckOut: fechaFinal ? fechaFinal.toDate() : "",
          companions,
        },
      });
    }
  };

  useEffect(() => {
    handleAPICall();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          style={{
            background:
              "linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)),url(/Images/Homepage/dogo-onsen-bath.jpg)",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
            width: "100%",
            height: isSmallScreen ? "100vh" : "50vh",
          }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={5}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  <b>¿Quieres realizar una reserva?</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2}>
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
                            onChange={(newValue) => setFechaInicio(newValue)}
                            onFocus={(e) => {
                              setFechaInicio(e.target.value);
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2}>
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
                            label="Selecciona la fecha final"
                            value={
                              moment(fechaFinal)
                                ? moment(fechaFinal)
                                : moment(new Date())
                            }
                            onChange={(newValue) => setFechaFinal(newValue)}
                            onFocus={(e) => {
                              setFechaFinal(e.target.value);
                            }}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2} justifyContent="center">
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
                      <Grid item>
                        <AcompañantesSelection
                          companions={companions}
                          handleChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} md={3}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                          }}
                        >
                          <b>Buscar</b>
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <IconButton
                          onClick={handleNavigateReservaSearch}
                          edge="end"
                        >
                          <SearchIcon
                            style={{
                              fontSize: "40px",
                              color: "black",
                            }}
                          />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} padding={isSmallScreen ? 0 : 5}>
            <Typography
              variant="h4"
              sx={{
                color: "#000000",
                fontFamily: "Montserrat, sans-serif",
                textAlign: "start",
              }}
            >
              <b>Tu próxima reserva:</b>
            </Typography>
          </Grid>
          {currentReserva ? (
            currentReserva.map((element, key) => {
              const {
                habitacionData,
                fechaDeCheckIn,
                fechaDeCheckOut,
                acompañantes,
                serviciosEspeciales,
                total,
              } = element;
              const { title, details, images } = habitacionData;
              return (
                <Grid
                  item
                  xs={12}
                  key={key}
                  paddingLeft={isSmallScreen ? 0 : 10}
                  paddingRight={isSmallScreen ? 0 : 10}
                  paddingBottom={isSmallScreen ? 0 : 10}
                >
                  <Card style={{ backgroundColor: "#d9d9d9" }}>
                    <CardContent>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Grid item xs={12} md={4}>
                          <Grid
                            container
                            style={{
                              background: `linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),url(${images[0]})`,
                              backgroundSize: "100% 100%",
                              backgroundPosition: "center",
                              width: "100%",
                              height: "30vh",
                            }}
                            justifyContent="center"
                            alignItems="center"
                          >
                            <Grid item xs={12}>
                              <Typography
                                variant="h4"
                                sx={{
                                  color: "#000000",
                                  textAlign: "center",
                                  fontFamily: "Montserrat, sans-serif",
                                }}
                              >
                                <b>{title}</b>
                              </Typography>
                              <Grid container>
                                {details.map((elementDetails) => {
                                  return (
                                    <Grid item xs={12} key={elementDetails}>
                                      <Typography
                                        variant="h6"
                                        sx={{
                                          color: "#000000",
                                          textAlign: "center",
                                          fontFamily: "Montserrat, sans-serif",
                                        }}
                                      >
                                        <b>{elementDetails}</b>
                                      </Typography>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} md={8} paddingLeft={3}>
                          <Grid
                            container
                            spacing={5}
                            justifyContent="space-evenly"
                          >
                            <Grid item xs={12}>
                              <Typography
                                variant="h5"
                                sx={{
                                  color: "#000000",
                                  textAlign: "center",
                                  fontFamily: "Montserrat, sans-serif",
                                }}
                              >
                                <b>Tiempo hasta la reserva</b>
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Countdown
                                date={fechaDeCheckIn}
                                renderer={CountdownRenderer}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <Grid
                                container
                                spacing={2}
                                justifyContent="center"
                              >
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "Montserrat, sans-serif",
                                    }}
                                  >
                                    <b>Fecha de Check In:</b>{" "}
                                    {new Date(fechaDeCheckIn).toDateString()}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "Montserrat, sans-serif",
                                    }}
                                  >
                                    <b>Fecha de Check Out:</b>{" "}
                                    {new Date(fechaDeCheckOut).toDateString()}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "Montserrat, sans-serif",
                                    }}
                                  >
                                    <b>Acompañantes:</b> {acompañantes}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "Montserrat, sans-serif",
                                    }}
                                  >
                                    <b>Servicios:</b>{" "}
                                    {!_.isEmpty(serviciosEspeciales)
                                      ? serviciosEspeciales
                                          .map(
                                            (element) => element.nombreProducto
                                          )
                                          .join(", ")
                                      : "No hay servicios"}
                                  </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                  <Typography
                                    variant="h6"
                                    sx={{
                                      color: "#000000",
                                      textAlign: "center",
                                      fontFamily: "Montserrat, sans-serif",
                                    }}
                                  >
                                    <b>Total:</b> {total} USD
                                  </Typography>
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                    <CardActions style={{ borderTop: "1px solid white" }}>
                      <Grid container justifyContent="flex-end">
                        <Grid item xs={12}>
                          <Button
                            onClick={navigateListado}
                            variant="text"
                            style={{
                              fontFamily: "Montserrat, sans-serif",
                            }}
                            color="error"
                          >
                            <b>Ver detalles de todas las reservas</b>
                          </Button>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })
          ) : (
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  style={{ fontFamily: "montserrat, sans-serif" }}
                >
                  No hay data disponible.
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
