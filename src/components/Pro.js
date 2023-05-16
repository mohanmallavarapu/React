import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
} from "@mui/material";

function Pro() {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            {/* <CardHeader>Header</CardHeader> */}
            <Typography gutterBottom variant="h5" component="div">
              Pro <br /> <label>Most popular</label>
            </Typography>
            <Typography variant="body1" color="text.primary">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Help center access</li>
              <li>Priority email support</li> <br />
              <Button variant="contained">GET STARTED</Button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Pro;
