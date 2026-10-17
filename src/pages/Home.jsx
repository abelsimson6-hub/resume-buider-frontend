import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div id='bg'>
      <div>
        <div>

          <Box component="section" sx={{ p: 15, textAlign: 'center' }}>
            <h1>Designed to get hired</h1>
            <h1>Your skills,your story</h1>
            <h1>Your next job-All in one</h1><br />
            <Link to={'/resume-details'}>
            <Button variant="contained">get started</Button>
            </Link>
          </Box>
          
        </div>
      </div>

    </div >
  )
}

export default Home
