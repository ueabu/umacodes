import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import OneMusic from "./../images/SpotifyToAppleMusic.png";
import UpTill from "./../images/uptill.png";
import MiniLinkIt from "./../images/minilinkit.png";
import {styled} from "@mui/material/styles";

const ButtonWrapper = styled("div")({
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
  marginBottom: "50px"
});
const WrapperCard = styled("div")({
  boxShadow: "0 20px 20px rgba(0,0,0,0.08)",
  borderRadius: "7px",
  overflow: "hidden",
  minHeight: "460px",
  position: "relative",
  "@media (max-width: 768px)": {
    minHeight: "460px",
  }
});
const CardInfo = styled("div")({
  padding: "20px",
  "& > h4": {
    margin: "0 0 7px 0",
    fontSize: "25px",
    fontWeight: "400"
  },
  "& > h5": {
    margin: "0 0 7px 0",
    fontSize: "18px",
    fontWeight: "400",
    color: "grey"
  }
});

const Heading = styled("h1")({
  fontSize: "40px",
  lineHeight: "48px",
  textAlign: "center",
  fontWeight: "600",
  paddingBottom: "60px",
  "@media (max-width: 768px)": {
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "600"
  }
});

const CardImage = styled("img")({
  width: "100%",
  height: "200px",
  objectFit: "cover"
});
const CardTitle = styled("h1")({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: "600",
  paddingBottom: "10px",
  
});
const CardText = styled("p")({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "400",
  color: "#8b939b"
});
const CardTinyText = styled("p")({
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "500",
  paddingBottom: "10px",
  color: "#8b939b"
});
const CardLink = styled("a")({
  fontSize: "17px",
  lineHeight: "23px",
  fontWeight: "500",
  paddingBottom: "10px",
  color: "#8b939b"

});
function LatestProjects() {
  return (
    <Container maxWidth="lg" sx={{mt: 9}}>
      <Grid item spacing={12}>
        <Heading>Checkout my Latest Project</Heading>
      </Grid>

      <Grid container spacing={12}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} md={4} key={index}>
              <WrapperCard className="project-card">
                <CardImage src={item.image} alt="" />
                <CardInfo>
                  <CardTitle>
                    {item.title}
                  </CardTitle>
                  <CardText>
                    {item.description}
                  </CardText>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "10px",
                      left: "20px",
                      right: "20px"
                    }}
                  >
                    <CardTinyText>
                      {item.year_and_type}
                    </CardTinyText>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "5px",
                        // borderTop:"1px solid #8b939b"
                      }}
                    >
                      <CardLink target="_blank" rel="noreferrer" href={item.project_link}>Project</CardLink>
                      <CardLink target="_blank" rel="noreferrer" href={item.video_link}>Video</CardLink>
                    </Box>
                  </Box>
                </CardInfo>
              </WrapperCard>
            </Grid>
          );
        })}
      </Grid>

      <ButtonWrapper>
        {/* <BannerBtn>Load More Projects</BannerBtn> */}
      </ButtonWrapper>
    </Container>
  );
}

export default LatestProjects;

const data = [
  {
    title: "Minilink",
    description: "A URL Shortner Application.",
    image: MiniLinkIt,
    year_and_type: "2021 Web Development",
    project_link: 'https://www.minilinkit.com/app',
    video_link: 'https://youtu.be/LGdIDm-4Dv8'
  },
  {
    title: "UpTill",
    description:
      "UpTill is an app that helps you keep track and countdown to events you have coming up..",
    image: UpTill,
    year_and_type: "2021 Mobile App Development",
    project_link: 'https://apps.apple.com/us/app/uptill/id1558769552',
    video_link: 'https://youtu.be/foWjLCXueEc'
  },
  {
    title: "One Music",
    description: "One Music is a website that transfers playlists from Spotify To Apple Music.",
    image: OneMusic,
    year_and_type: "2021 Web Development",
    project_link: 'https://youtu.be/mS2J0dKcvAA',
    video_link: 'https://youtu.be/mS2J0dKcvAA'
  }
];
