import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

function Enterprise() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Enterprise
            </Typography>
            <Typography variant="body1" color="text.primary">
              <li>50 users included</li>
              <li>30 GB of storage</li>
              <li>Help center access</li>
              <li>Phone & Email support</li> <br />
              <Button variant="outlined">CONTACT US</Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Enterprise;
