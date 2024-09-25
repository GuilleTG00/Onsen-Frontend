import "../GeneralStyles/formStyles.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

import { loginAPI } from "../APICalls";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const FormPopulation = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
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

  const handleLogin = async () => {
    const validationResult = await loginAPI(
      formFields["username"],
      formFields["password"]
    );
    const { status, data } = validationResult;
    if (status === 200) {
      const { access_token, username } = data;
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", access_token);
      localStorage.setItem("username", username);
      navigate("/dashboard");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container spacing={2} paddingTop={10} justifyContent="center">
      <Grid item xs={10}>
        <Typography
          variant="p"
          fontSize="20px"
          sx={{
            color: "#000000",
            fontFamily: "montserrat, sans-serif",
          }}
        >
          Nombre de Usuario / Email
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          fullWidth
          className="formTextFieldStyles"
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
      <Grid item xs={10}>
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
          className="formTextFieldStyles"
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
        <Grid container paddingTop={3} justifyContent="flex-end">
          <Grid item xs={5}>
            <Button
              style={{
                backgroundColor: "#a2fe99",
              }}
              onClick={handleLogin}
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
                Ingresa Aquí
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormPopulation;
