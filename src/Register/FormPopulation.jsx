import React, { useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const FormPopulation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    email: "",
    nombre: "",
    apellidos: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
  });

  const handleFormFields = (key, isSelect) => (onChangeValue) => {
    if (isSelect) {
      setFormFields((prevState) => ({
        ...prevState,
        [key]: onChangeValue.value,
      }));
    } else {
      setFormFields((prevState) => ({
        ...prevState,
        [key]: onChangeValue.target.value,
      }));
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid
      container
      spacing={2}
      paddingTop={5}
      paddingBottom={5}
      justifyContent="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Nombre de Usuario
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="username"
          name="username"
          onChange={handleFormFields("username", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Email
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="email"
          name="email"
          onChange={handleFormFields("email", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Nombre
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="nombre"
          name="nombre"
          onChange={handleFormFields("nombre", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Apellidos
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="apellidos"
          name="apellidos"
          onChange={handleFormFields("numeroIdentificacion", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Tipo de Identificación
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="num identificacion"
          name="num identificacion"
          onChange={handleFormFields("username", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Num. de Identificación
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="num identificacion"
          name="num identificacion"
          onChange={handleFormFields("username", false)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Contraseña
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="password"
          name="password"
          onChange={handleFormFields("password", false)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <LockPersonIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
          }}
        >
          Confirmar Contraseña
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          id="password"
          name="password"
          onChange={handleFormFields("password", false)}
          type={showPassword ? "text" : "password"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" className="text-primary">
                <LockPersonIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  //onClick={handleClickShowPassword}
                  //onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container paddingTop={3} justifyContent="flex-end">
          <Grid item xs={6}>
            <Button
              style={{
                backgroundColor: "#a2fe99",
              }}
              variant="contained"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                Reserva Aquí
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormPopulation;
