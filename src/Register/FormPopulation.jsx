import React, { useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { createUser } from "../APICalls";

const FormPopulation = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showValidationPassword, setShowValidationPassword] = useState(false);
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

  const handleSignUp = () => {
    localStorage.setItem("isLoggedIn", true);
    navigate("/dashboard");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowValidationPassword = () => {
    setShowValidationPassword(!showValidationPassword);
  };

  const createNewUserCall = () => {
    createNewUser();
  };

  const createNewUser = async () => {
    const {
      username,
      password,
      nombre,
      apellidos,
      tipoIdentificacion,
      numeroIdentificacion,
    } = formFields;

    const { status } = await createUser(
      username,
      password,
      nombre,
      apellidos,
      tipoIdentificacion,
      numeroIdentificacion
    );
    if (status === 200) {
      navigate("/login");
    }
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
            fontFamily: "montserrat, sans-serif",
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
            fontFamily: "montserrat, sans-serif",
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
            fontFamily: "montserrat, sans-serif",
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
            fontFamily: "montserrat, sans-serif",
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
          onChange={handleFormFields("apellidos", false)}
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
            fontFamily: "montserrat, sans-serif",
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
          onChange={handleFormFields("tipoIdentificacion", false)}
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
            fontFamily: "montserrat, sans-serif",
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
            fontFamily: "montserrat, sans-serif",
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
            fontFamily: "montserrat, sans-serif",
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
          type={showValidationPassword ? "text" : "password"}
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
                  edge="end"
                  onClick={handleClickShowValidationPassword}
                >
                  {showValidationPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container paddingTop={3} justifyContent="flex-end">
          <Grid item xs={5}>
            <Button
              style={{
                backgroundColor: "#a2fe99",
              }}
              onClick={createNewUserCall}
              variant="contained"
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#000000",
                  textAlign: "center",
                  letterSpacing: "1px",
                  fontFamily: "montserrat, sans-serif",
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
