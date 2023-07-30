import React from "react";
import ExcerciseCard from "../Cards/ExcerciseCard";
import { Stack } from "@mui/material";

const ExcerciseCards = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-around"}>
      <ExcerciseCard />
    </Stack>
  );
};

export default ExcerciseCards;
