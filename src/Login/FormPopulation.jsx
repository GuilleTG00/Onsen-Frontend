import "../GeneralStyles/formStyles.css";

import React, { useState } from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
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

  const handleUsername = () => {};

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container spacing={2} paddingTop={10} justifyContent="center">
      <Grid item xs={8}>
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
    </Grid>
  );
};

export default FormPopulation;
