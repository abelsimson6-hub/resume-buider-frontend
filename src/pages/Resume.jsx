import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DescriptionIcon from "@mui/icons-material/Description";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

function Resume() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#fff" }}>

      {/* Heading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          // color: "",
          mt: 6,
          mb: 6,
          // fontFamily: "Georgia, serif",
        }}
      >
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "190px",
          flexWrap: "wrap",
        }}
      >

        {/* Card 1 */}
        <Paper
          elevation={10}
          sx={{
            width: 390,
            height: 290,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <DescriptionIcon
            sx={{
              fontSize: 50,
              color: "#1976f3",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#172333",
              fontFamily: "Georgia, serif",
              mb: 1,
            }}
          >
            Add Your Details
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            Our AI will generate Skills &<br />
            Summary
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
            }}
          >
            Step 1
          </Typography>
        </Paper>


        {/* Card 2 */}
        <Paper
          elevation={10}
          sx={{
            width: 390,
            height: 290,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <PictureAsPdfIcon
            sx={{
              fontSize: 50,
              color: "#ed3347",
              mb: 2,
            }}
          />

          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "#172333",
              fontFamily: "Georgia, serif",
              mb: 1,
            }}
          >
            Download your Resume
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: 1.5,
              mb: 2,
            }}
          >
            Download CV as PDF and start<br />
            applying
          </Typography>

          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "bold",
              fontFamily: "Georgia, serif",
            }}
          >
            Step 2
          </Typography>
        </Paper>

      </Box>


      {/* Let's Start Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 6,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#80502f",
            color: "white",
            fontFamily: "Georgia, serif",
            fontWeight: "bold",
            fontSize: "14px",
            px: 2,
            py: 1,
            borderRadius: "6px",
            "&:hover": {
              backgroundColor: "#623b23",
            },
          }}
        >
          LET'S START
        </Button>
      </Box>

    </Box>
  );
}

export default Resume;