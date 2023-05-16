// import React, { Component } from "react";
// import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
// import { NavLink, useNavigate } from "react-router-dom";

// class Header extends Component {
//   render() {
//     return (
//       <>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               Training Example
//             </Typography>
//             <Stack direction="row" spacing={2}>
//               <Button color="inherit">PRICING</Button>
//               <Button color="inherit">CHECKOUT</Button>
//               <Button color="inherit">POSTS</Button>
//               <Button color="inherit">ALBUMS</Button>
//             </Stack>
//           </Toolbar>
//         </AppBar>
//       </>
//     );
//   }
// }

// export default Header;

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Training Example
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              onClick={() => {
                navigate("pricing");
              }}
            >
              PRICING
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("checkout");
              }}
            >
              CHECKOUT
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("posts");
              }}
            >
              POSTS
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("albums");
              }}
            >
              ALBUMS
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
