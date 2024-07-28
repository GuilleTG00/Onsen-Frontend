import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
  "&:hover .overlay": {
    opacity: 1,
  },
  "&:hover .media": {
    opacity: 0.3,
  },
}));

const StyledMedia = styled(CardMedia)(({ theme }) => ({
  height: "100%",
  transition: "opacity 0.3s ease-in-out",
}));

const Overlay = styled(CardContent)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const CardRenderer = ({ image, text, placeholder }) => {
  return (
    <StyledCard>
      <StyledMedia className="media" image={image} title={placeholder} />
      <Overlay className="overlay">
        <Typography variant="h5" component="div">
          {text}
        </Typography>
      </Overlay>
    </StyledCard>
  );
};

export default CardRenderer;
