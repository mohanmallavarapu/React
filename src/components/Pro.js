import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardHeader,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

function Pro() {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="package-header"
        >
          Pro <StarOutlineIcon />
          <br /> Most popular
        </Typography>
        <CardActionArea>
          <CardContent>
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
