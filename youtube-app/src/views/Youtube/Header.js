import React from "react";
import Grid from "@mui/joy/Grid";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Typography from '@mui/joy/Typography';

export const Header = () => {
  return (
    <Grid item container direction="row" sx={{ bgcolor: "red" ,height: "60px"}} gap={8}>
      <Typography level="h2">YouTube</Typography>
      <Grid item display="flex" >
        <Input size="sm" placeholder="Search" sx={{ width: "300px" , height: "40px" }} />
        <Button variant="solid" color="neutral" size="sm">
          Search
        </Button>
      </Grid>

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
  );
};
