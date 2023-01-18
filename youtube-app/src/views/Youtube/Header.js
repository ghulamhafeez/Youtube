import React from "react";
import Grid from "@mui/joy/Grid";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";


export const Header = () => {
  return (
    <Grid item container direction="row" justifyContent={"space-between"} flex={"wrap"}  >
      <Grid pl={1}><h3><b>YouTube</b></h3></Grid>
      <Grid className="search" searchitem display="flex" pt={2} >
        <Input size="sm"  placeholder="Search" sx={{ width: "300px" , height: "40px" }} />
        <Button variant="solid" color="neutral" size="sm">
          Search
        </Button>
      </Grid>
      <Grid item justifyContent={"space-around"} pt={2}>
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
    </Grid>
  );
};
