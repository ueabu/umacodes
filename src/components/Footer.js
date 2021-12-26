import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { styled } from "@mui/material/styles";
const ListIcon = styled("ul")({
  listStyleType: "none",
  marginBottom:"30px",
  padding: "0",
  "& > li": {
    display: `inline-block`,
    fontStyle: `normal`,
    fontWeight: `bold`,
    lineHeight: `144.4%`,
    color: `#000000`,
    padding: `0px 10px`,
  },
  "& > li > a": {
    color: `#000000`,
    fontSize: `45px`,
  },
});
const Wrapper = styled("div")({
  width: "100%",
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
});
const Wrapper2 = styled("div")({
  width: "100%",
  justifyContent: "center",
  textAlign: "center",
  display: "flex",
  backgroundColor: "#000000",
  color: "#ffffff",
  padding:"24px 0px"
});
function Footer() {
  return (
    <>
      <Wrapper>
        
      <ListIcon>
       
       <li>
         <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCvDqylEzCZJHNea6k1XMkQw">
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
      </Wrapper>
      <Wrapper2>
        <p>Copyright © 2021 Uma Abu. All rights reserved</p>
      </Wrapper2>
    </>
  );
}

export default Footer;
