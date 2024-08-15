import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

import "./dashboard-styles.css";

const DashboardPage = () => {
  const [fechaInicio, setFechaInicio] = useState(null);
  const [fechaFinal, setFechaFinal] = useState(null);

  return (
    <Grid
      container
      className="dashboard-hero"
      justifyContent="center"
      style={{
        minHeight: "45vh",
      }}
      alignItems="center"
    >
      <Grid item xs={12}>
        <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                color: "#000000",
                textAlign: "center",
              }}
            >
              <b>¿Quieres realizar una reserva?</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Grid container>
                  <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                      <DatePicker
                        format="MM-DD-YYYY"
                        label="Selecciona la fecha de inicio"
                        value={
                          moment(fechaInicio) ? moment(fechaInicio) : moment()
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
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                          format="MM-DD-YYYY"
                          label="Selecciona la fecha final"
                          value={
                            moment(fechaFinal) ? moment(fechaFinal) : moment()
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
