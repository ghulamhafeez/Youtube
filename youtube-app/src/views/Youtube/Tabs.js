import React from "react";
import Grid from "@mui/joy/Grid";
import Chip from "@mui/joy/Chip";
import { CHIPS } from "./Constants";
export const Tabs = () => {
  return (
    <Grid
      item
      display={"flex"}
      justifyContent={"space-around"}
      pt={1}
      pl={3}
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
        gridAutoColumns: "minmax(160px, 1fr)",
      }}
    >
      {CHIPS.map((x) => {
        return (
 
          <Chip
            sx={{
              backgroundColor: "#d3d3d3",
            }}
            
          >
           <div className="carousel">{x.name}</div> 
          </Chip>

        );
      })}
    </Grid>
  );
};
