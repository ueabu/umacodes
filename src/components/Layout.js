import React from "react";
import Box from "@mui/material/Box";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <div>
      <Box
        className="mobileMenu"
        sx={{
          display: "none",
          "@media (max-width: 768px)": {
            display: "block"
          }
        }}
      >
        <MobileMenu />
      </Box>
      <Box
        className="mobileMenu"
        sx={{
          display: "block",
          "@media (max-width: 768px)": {
            display: "none"
          }
        }}
      >
        <Navbar />
      </Box>

      {children}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
