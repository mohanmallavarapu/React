import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

function Free() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Free
            </Typography>
            <Typography variant="body1" color="text.primary">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Help center access</li>
              <li>Email support</li> <br />
              <Button variant="outlined">SIGN UP FOR FREE</Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Free;
