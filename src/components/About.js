import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AboutImg from "./../images/Umacodes.png";
import Container from "@mui/material/Container";
import {styled} from "@mui/material/styles";

const Wrapper = styled("div")({
  marginTop: "100px",
  marginBottom: "100px"
});
const Flexbox = styled("div")({
  display: "flex",
  gap: "0 32px",
  width: "100%",
  "& > div ": {
    flexBasis: "50%"
  },
  "@media (max-width: 768px)": {
    flexDirection: "column"
  }
});
const WrapperImg = styled("div")({
  display: "flex",
  justifyContent: "center",
  "& > div ": {
    position: "relative",
    height: "620px",
    width: "300px",
    border: "2px solid #000000"
  },
  "& > div > img": {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
    marginLeft: "-46px",
    marginTop: "40px",
    borderRadius: "7px",
    boxShadow:
      "0 4px 20px 0 rgba(0, 0, 0, 0.2), 0 16px 40px 0 rgba(0, 0, 0, 0.19)"
  }
});

const ContactMeButton = styled("a")({
  padding: "12px 25px",
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "7px",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    marginBottom: "40px"
  }
});
const SubscribeButton = styled("a")({
  padding: "12px 50px",
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "7px",
  cursor: "pointer"
});
const Owner = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  paddingBottom: "10px",
  "& > p": {
    fontSize: "30px"
  }
});

const Heading = styled("h1")({
  fontSize: "40px",
  lineHeight: "48px",
  fontWeight: "600",
  paddingBottom: "40px",
  "@media (max-width: 768px)": {
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "600",
    paddingBottom: "30px"
  }
});
const Paragraph = styled("p")({
  fontSize: "18px",
  lineHeight: "26px",
  marginBottom: "30px",
  opacity: "0.7",
  "@media (max-width: 768px)": {
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "24px",
    marginBottom: "20px"
  }
});
const AboutImage = styled("img")({
  display: "flex",
  justifyContent: "center",
  width: "400px",
  "@media (max-width: 768px)": {
    width: "380px"
  }
});
const Iframe = styled("iframe")({
  height: "350px",
  borderRadius: "7px",
  border: "none",
  "@media (max-width: 768px)": {
    height: "250px",
  }
});
export default function About() {
  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{mb: 9}}>
        <Flexbox>
          <Box
            sx={{
              display: "flex",
              height: "100%",
              alignItems: "center",
              alignSelf: "center"
            }}
          >
            <Box>
              <Heading>About Me</Heading>
              <Paragraph>
                My name Uma, I am a Software Engineer who loves to code. I am
                passionate about learning how things work and enjoy the process
                of learning new technologies and sharing it with the world. Feel
                free to reachout for anything
              </Paragraph>
              <Box
                sx={{
                  marginTop: "50px",
                  "@media (max-width: 768px)": {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "100px",
                    marginTop: "50px"
                  }
                }}
              >
                <ContactMeButton href="mailto:umacodes@gmail.com">
                  Contact Me !
                </ContactMeButton>
              </Box>
            </Box>
          </Box>

          <WrapperImg>
            <Box>
              <AboutImage src={AboutImg} alt="" />
              <Owner>
                {/* <p>UMA ABU</p> */}
              </Owner>
            </Box>
          </WrapperImg>
        </Flexbox>
      </Container>
      <Container maxWidth="lg">
        <Box
          sx={{
            paddingY: "100px",
            "@media (max-width: 768px)": {
              paddingY: "50px"
            }
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={7} order={{xs: 2, sm: 1}}>
              <Box sx={{
                maxWidth:"600px"
              }}>
                <Iframe
                  width="100%"
                  src="https://www.youtube.com/embed/x9QDL_q-lac"
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={5} order={{xs: 1, sm: 2}}>
              <Box>
                <Heading>More Of What I do</Heading>

                <Paragraph>
                  I make a variety of videos ranging from explaining how popular
                  sofware services like google maps work to giving tips and
                  resources to anyone who is trying to break into tech and learn
                  how to code.
                </Paragraph>
                <Paragraph sx={{marginBottom: "50px"}}>
                  Checkout Youtube channel and other projects below
                </Paragraph>
                <Box
                  sx={{
                    "@media (max-width: 768px)": {
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "100px",
                      marginTop: "50px"
                    }
                  }}
                >
                  <SubscribeButton
                    target="_blank"
                    href="https://www.youtube.com/channel/UCvDqylEzCZJHNea6k1XMkQw?sub_confirmation=1"
                  >
                    Subscribe
                  </SubscribeButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}
