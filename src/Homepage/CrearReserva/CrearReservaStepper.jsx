import React from "react";

import { styled } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import TaskIcon from "@mui/icons-material/Task";
import SearchIcon from "@mui/icons-material/Search";
import ChecklistIcon from "@mui/icons-material/Checklist";
import DateRangeIcon from "@mui/icons-material/DateRange";
import BedroomChildIcon from "@mui/icons-material/BedroomChild";

import { Typography } from "@mui/material";

import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

import { Step, Stepper, StepLabel } from "@mui/material";

const STEPS_LABEL = [
  "Selecciona la fecha",
  "Selecciona la habitación",
  "Verifica y crea tu reserva",
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 30,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(75,75,75,1) 0%, rgba(154,154,154,1) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`&.${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(75,75,75,1) 0%, rgba(154,154,154,1) 100%)",
    },
  },
  [`&.${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState, index }) => ({
  backgroundColor: "white",
  zIndex: 1,
  color: "#fff",
  width: 60,
  height: 60,
  display: "flex",
  borderRadius: "100%",
  boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(72, 126, 224, 1) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "radial-gradient(circle, rgba(226,226,226,1) 0%, rgba(255,229,97,1) 100%",
  }),
}));

const StepperColor = (props) => {
  const { active, completed, className, index } = props;
  const icons = {
    1: <DateRangeIcon style={{ color: active ? "black" : "grey" }} />,
    2: <BedroomChildIcon style={{ color: active ? "black" : "grey" }} />,
    3: <ChecklistIcon style={{ color: active ? "black" : "grey" }} />,
  };

  return (
    <ColorlibStepIconRoot
      style={{
        cursor: "pointer",
      }}
      ownerState={{ completed, active }}
      className={className}
      index={index}
    >
      {completed ? (
        <DoneIcon style={{ color: "grey" }} />
      ) : (
        icons[String(props.icon)]
      )}
    </ColorlibStepIconRoot>
  );
};

const CrearReservaStepper = ({ activeStep, handleChangeStep }) => {
  return (
    <Stepper
      alternativeLabel
      activeStep={activeStep}
      connector={<ColorlibConnector />}
    >
      {STEPS_LABEL.map((label, index) => (
        <Step key={label}>
          <StepLabel
            StepIconComponent={(props) => (
              <StepperColor {...props} index={index} />
            )}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#000000",
                textAlign: "center",
              }}
            >
              <b>{label}</b>
            </Typography>
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default CrearReservaStepper;
