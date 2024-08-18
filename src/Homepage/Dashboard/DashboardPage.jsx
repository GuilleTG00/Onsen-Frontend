import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Countdown from "react-countdown";
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
import moment from "moment";

import SearchIcon from "@mui/icons-material/Search";

const RESERVA_DATE = new Date("06-06-2025");

import "./dashboard-styles.css";
import CountdownRenderer from "./CountdownRenderer";

const DashboardPage = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFinal, setFechaFinal] = useState(null);

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
            height: "50vh",
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
                  <Grid item>
                    <Grid container>
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
                            //onBlur={handleBlur}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
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
                            //onBlur={handleBlur}
                          />
                        </LocalizationProvider>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container>
                      <Grid item xs={12}>
                        <IconButton onClick={() => {}} edge="end">
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
          <Grid
            item
            xs={12}
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
                        background:
                          "linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),url(/Images/Homepage/luxury-onsen-ryokan_4.jpg)",
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
                          <b>Habitación Onsen High Class</b>
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "center",
                            fontFamily: "Montserrat, sans-serif",
                          }}
                        >
                          <b>Habitación tipo premium</b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={8} paddingLeft={3}>
                    <Grid container justifyContent="space-evenly">
                      <Grid item xs={12}>
                        <Countdown
                          date={RESERVA_DATE}
                          renderer={CountdownRenderer}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions style={{ borderTop: "1px solid white" }}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={2}>
                    <Button
                      variant="text"
                      style={{
                        fontFamily: "Montserrat, sans-serif",
                      }}
                      color="error"
                    >
                      <b>Ver detalles de la reserva</b>
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
