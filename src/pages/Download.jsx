import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function Download() {
  return (
    <div>

       <Typography sx={{
              textAlign:"left",
              fontSize:"30px",
              fontWeight:"bold",
              mt:8,
              mb:8,px:5
            }}>All downloaded resumes here</Typography>

            <Typography sx={{
              textAlign:"left",
              fontSize:"30px",
              // fontWeight:"bold",
              mt:8,
              mb:8,px:5
            }}>Total number of resumes downloaded from our site </Typography>

        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 5,
          width: 400,
          height: 400,
          alignItems:'center',
          justifyContent:'space-between',
          py:'10px'
        },
      }}
    >
      <Paper elevation={20} />
      <Paper elevation={20} />
      <Paper elevation={20} />
    </Box>
    </div>
  )
}

export default Download
