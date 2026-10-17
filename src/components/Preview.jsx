import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Preview({ resumeDetails }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: '100%',
        maxWidth: 600,
        minHeight: 600,
        p: 4,
        boxSizing: 'border-box',
        overflowWrap: 'anywhere'
      }}
    >
      <Typography variant="h4" gutterBottom>
        {resumeDetails.fullName ? resumeDetails.fullName : 'FullName'}
      </Typography>

      <Typography variant="h6">
        {resumeDetails.job ? resumeDetails.job : 'Job Title'}
      </Typography>

      <Typography>
        Phone: {resumeDetails.phone ? resumeDetails.phone : 'Phone Number'}
      </Typography>

      <Typography>
        Email: {resumeDetails.email ? resumeDetails.email : 'Email Address'}
      </Typography>

      <Typography>
        LinkedIn: {resumeDetails.linkedin ? resumeDetails.linkedin : 'LinkedIn Link'}
      </Typography>

      <Typography>
        GitHub: {resumeDetails.github ? resumeDetails.github : 'GitHub Link'}
      </Typography>

      <Typography>
        Location: {resumeDetails.location ? resumeDetails.location : 'Location'}
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Professional Summary
        </Typography>

        <Typography>
          {resumeDetails.summary ? resumeDetails.summary : 'Your professional summary'}
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Technical Skills
        </Typography>

        <Typography>
          {Array.isArray(resumeDetails.skills)
            ? resumeDetails.skills.length > 0
              ? resumeDetails.skills.join(', ')
              : 'Your technical skills'
            : resumeDetails.skills || 'Your technical skills'}
        </Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>

        <Typography>
          Degree: {resumeDetails.degree ? resumeDetails.degree : 'Your Degree'}
        </Typography>

        <Typography>
          College/University: {resumeDetails.college ? resumeDetails.college : 'College Name'}
        </Typography>

        <Typography>
          Year of Graduation: {resumeDetails.year ? resumeDetails.year : 'Graduation Year'}
        </Typography>
      </Box>
    </Paper>
  );
}

export default Preview;