import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import CardRenderer from "./CardRenderer";
import ChihiroMessage from "./ChihiroMessage";

const CARDS_INFO = [
  {
    title: "Historia del Onsen",
    image: "/Images/Homepage/dogo-onsen-old.jpg",
    text: "Creado aproximadamente en el año 1894, ofrecemos uno de los mejores y más antiguos servicios de hospedaje y baños termales en todo el mundo.",
  },
  {
    title: "Habitaciones",
    image: "/Images/Homepage/dogo-onsen-room.jpg",
    text: "Desde sencillas hasta lo más premium, ofrecemos una experiencia mágica en cada una de nuestras habitaciones.",
  },
  {
    title: "Baños",
    image: "/Images/Homepage/dogo-onsen-bath.jpeg",
    text: "La experiencia principal. Vive un baño termal como ningún otro en el mundo.",
  },
];

const CardsSection = () => {
  return (
    <Grid container alignItems="center" paddingTop={5}>
      <Grid item xs={12}>
        <Divider
          style={{
            backgroundColor: "black",
            borderBottomWidth: "3px",
          }}
        />
      </Grid>
      <Grid item xs={12} padding={8}>
        <Grid
          container
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          {CARDS_INFO.map((element, key) => {
            return (
              <Grid item key={key} xs={4}>
                <Grid
                  container
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <CardRenderer
                      placeholder={element.title}
                      image={element.image}
                      text={element.text}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: "#000000",
                        textAlign: "center",
                      }}
                    >
                      {element.title}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChihiroMessage />
      </Grid>
    </Grid>
  );
};

export default CardsSection;
