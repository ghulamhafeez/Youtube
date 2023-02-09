import React from "react";
import Grid from "@mui/joy/Grid";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
export const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      item
      container
      direction="row"
      justifyContent={"space-between"}
      sx={{ flex: "wrap" }}
    >
      <Grid pl={1}>
        <h3>
          <b>YouTube</b>
        </h3>
      </Grid>

      <Grid item display="flex" pt={2}>
        <Input
          size="sm"
          placeholder="Search"
          sx={{ width: "300px", height: "40px" }}
        />
        <Button variant="solid" color="neutral" size="sm">
          Search
        </Button>
      </Grid>

      {!isSmallScreen && (
        <Grid
          item
          sx={{ paddingLeft: "50px" }}
          justifyContent={"space-between"}
          pt={2}
        >
          <Button variant="solid" color="neutral" size="sm">
            Create
          </Button>
          <Button variant="solid" color="neutral" size="sm">
            Notifaction
          </Button>
          <Button variant="solid" color="neutral" size="sm">
            Account
          </Button>
        </Grid>
      )}
    </Grid>
  );
};
