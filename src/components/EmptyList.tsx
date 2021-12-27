import React from "react";
import { Typography } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const EmptyList = () => {
  return (
    <Typography
      variant={"h4"}
      sx={{ display: "flex", alignItems: "center", mt: 5 }}
    >
      Ваш список пуст
      <SentimentDissatisfiedIcon
        color="primary"
        fontSize={"large"}
        sx={{ ml: 2 }}
      />
    </Typography>
  );
};

export default EmptyList;
