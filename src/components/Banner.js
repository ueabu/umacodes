import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {styled} from "@mui/material/styles";

const Heading = styled("h1")({
  fontSize: "40px",
  lineHeight: "48px",
  textAlign: "center",
  fontWeight: "600",
  maxWidth: "480px",
  margin: "auto",
  paddingBottom: "40px",
  paddingTop: "200px",
 
});
const Paragraph = styled("p")({
  fontSize: "20px",
  textAlign: "center",
  marginBottom: "30px"
});

const ButtonWrapper = styled("div")({
  display: "flex",
  justifyContent: "center"
});
const Button = styled("a")({
  padding: "10px 28px",
  backgroundColor: "#000000",
  color: "#ffffff",
  borderRadius: "7px",
  cursor: "pointer"
});

function Banner() {
  return (
    <Container maxWidth="sm">
      <div className="banner-bg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            alignSelf: "center",
            padding: "100px 0px"
          }}
        >
          <Box>
            <Heading>
              Everything Programming
            </Heading>
            <Paragraph>
              I make interesting coding projects and teach programming concepts that relate to everyday life.
            </Paragraph>

            <ButtonWrapper>
              <Button target="_blank" href="https://www.youtube.com/channel/UCvDqylEzCZJHNea6k1XMkQw" >View More</Button>
            </ButtonWrapper>
          </Box>
        </Box>
      </div>
    </Container>
  );
}

export default Banner;
