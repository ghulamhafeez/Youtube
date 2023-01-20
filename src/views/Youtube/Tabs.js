import React from "react";
import Grid from "@mui/joy/Grid";
import Chip from "@mui/joy/Chip";
import { CHIPS } from "./Constants";

export const Tabs = () => {
  return (
    <Grid
      item
      display={"flex"}
      justifyContent={"space-between"}
      pt={1}
      pl={3}
      className="carousel"
    >
      {CHIPS.map((x) => {
        return (
          <Chip
            sx={{
              backgroundColor: "#d3d3d3",
            }}
          >
            {x.name}
          </Chip>
        );
      })}
    </Grid>
  );
};
