import React, {useState} from "react";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import logo from "./../images/logo.png";
import {styled} from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Logo = styled("img")({
  width: "100px",
  marginTop: "40px"
});
const NavLogo = styled("img")({
  width: "50px",
  height: "50px"

});
const StyledStack = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "& > a": {
    fontStyle: `normal`,
    fontWeight: `500`,
    fontSize: `20px`,
    lineHeight: `144.4%`,
    color: "#000",
    padding: `14px 26px`,
    textDecoration: "none",
    borderBottom: "1px solid #848484",
    textTransform: "uppercase"
  }
});

const StyledIcon = styled(MenuIcon)({
  color: "",
  width: "35px",
  height: "35px",
  cursor: "pointer"
});
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          paddingX: "20px",
          paddingY: "8px",
          borderBottom: "1px solid #848484",
          position: "fixed",
          left: "0px",
          right: "0px",
          background: "#fff",
          zIndex: "1000"
        }}
      >
        <div>
          <NavLogo src={logo} alt="" />
        </div>
        <Stack
          onClick={toggleDrawer}
          sx={{
            display: "flex",
            alignSelf: "center"
          }}
        >
          <StyledIcon />
        </Stack>
      </Stack>

      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
       
        <Box sx={{
          marginTop: "120px"
        }}>
          <StyledStack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {links.map((item, index) => {
              return (
                <AnchorLink href={`#${item.title}`} key={index}>
                  {item.title}
                </AnchorLink>
              );
            })}
          </StyledStack>
        </Box>
      </Drawer>
    </div>
  );
};

export default MobileMenu;

const links = [
  {
    title: "Home"
  },
  {
    title: "Project"
  },
  {
    title: "About"
  }
];
