import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Box,
  CardHeader,
} from "@mui/material";
import React from "react";
import { cardInfo } from "../../libs/cardInfo";

const ExcerciseCard = () => {
  //   const { description, icon, subtitle, title } = cardInfo[0];
  return cardInfo.map((card) => {
    const { description, icon, subtitle, title } = card;
    return (
      <Card sx={{ maxWidth: "25rem", padding: "1rem" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 5fr",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <CardMedia
            image={icon}
            component={"img"}
            sx={{ maxHeight: "5rem", maxWidth: "5rem" }}
          />
          <Typography variant={"h4"} sx={{ marginLeft: "2rem" }}>
            {title}
          </Typography>
        </Box>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Typography variant="h6" component="div">
            {subtitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }}>{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });
};

export default ExcerciseCard;
