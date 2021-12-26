import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "./../images/logo.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import {styled} from "@mui/material/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
const ListMenu = styled("ul")({
  listStyleType: "none",
  display: "flex",
  alignItems: "center",
  "& > li": {
    display: `inline-block`,
    fontStyle: `normal`,
    fontWeight: `500`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    color: `#000000`,
    padding: `0px 26px`
  },
  "& > li > a": {
    color: `#000000`,
    textDecoration: `none`
  },
  "& > li > a:hover": {
    borderBottom: `2px solid #000000`,
    paddingBottom: `2px`
  }
});
const ListIcon = styled("ul")({
  listStyleType: "none",
  "& > li": {
    display: `inline-block`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    fontSize: `18px`,
    lineHeight: `144.4%`,
    color: `#000000`,
    padding: `0px 10px`
  },
  "& > li > a": {
    color: `#000000`
  }
});
const Logo = styled("img")({
  width: "50px",
  display: "flex",
  alignSelf: "center"
});
export default function Navbar() {
  return (
    <Box>
      <Box
        sx={{
          paddingY: "28px",
          position: "fixed",
          right: "0px",
          left: "0px",
          backgroundColor: "#fff",
          zIndex: "1000"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1240px",
            margin: "auto"
          }}
        >
          <Box
            sx={{
              paddingLeft: "40px"
            }}
          >
            <Logo src={logo} alt="" />
          </Box>
          <Box sx={{display: "flex", paddingLeft:"125px", alignSelf: "center"}}>
            <ListMenu>
              {links.map((item, index) => {
                return (
                  <li>
                    <AnchorLink href={`#${item.title}`} key={index}>
                      {item.title}
                    </AnchorLink>
                  </li>
                );
              })}
            </ListMenu>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignSelf: "center",
              paddingRight: "40px"
            }}
          >
            <ListIcon>
              <li>
                <a
                  target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCvDqylEzCZJHNea6k1XMkQw"
                >
                  <YouTubeIcon />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/ueabu">
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/umacodes/">
                  <InstagramIcon />
                </a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/umaabu/">
                  <LinkedInIcon />
                </a>
              </li>
            </ListIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

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
