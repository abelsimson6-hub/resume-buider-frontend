import { Box, Typography, Stack, Button, TextField, Paper } from '@mui/material';
// import Edit from "../Components/Edit";
import Edit from "../components/Edit"
import { useParams } from 'react-router-dom';
// import { viewResumeApi } from '../Services/ApiServices';
import { viewResumeAPI } from '../services/apiServices'
import { useEffect, useState } from 'react';
import * as React from 'react';
import Modal from '@mui/material/Modal';




function View() {


  const [resume, setResume] = useState()


  const { id } = useParams()
  console.log(id);

  const viewResume = async () => {
    const response = await viewResumeAPI(id)
    console.log(response);
    setResume(response.data)

  }
  console.log(resume);


  useEffect(() => {
    viewResume()
  }, [])




  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px" }}>
        <Button variant='text'>Download Cv</Button>
        <Edit resume={resume} setResume={setResume}/>

        {/* <Button variant='text'>edit</Button> */}

       


        <Button variant='text'>Home</Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", m: 5 }}>
        <Paper elevation={24} sx={{ padding: "30px", width: "600px",height:"800px" }}>
          <Box sx={{ padding: "30px" }}>
            <Typography variant='h4' >{resume?.fullName ? resume.fullName : "Name"}</Typography>
            <Typography variant='body1'>{resume?.phone ? resume.phone : "phone"}</Typography>
            <Typography variant='body1'>{resume?.email ? resume.email : "Email"}</Typography>
            <Typography variant='body1'>{resume?.linkedin ? resume.linkedin : "linkedin"}</Typography>
            <Typography variant='body1'>{resume?.github ? resume.github : "Github"}</Typography>
            <Typography variant='body1'>{resume?.location ? resume.location : "location"}</Typography>

          </Box>
          <hr />
          <Typography variant='h4' sx={{ padding: "10px" }}>
            Professional Summary
          </Typography>
          <Typography variant='body1' sx={{ padding: "30px" }}>
            {resume?.summary ? resume.summary : "Professional Summary"}       </Typography>
          <hr />
          <Typography variant='h4' sx={{ padding: "10px" }}>
            Technical Skills
          </Typography>
          <Typography variant='body1' sx={{ padding: "30px" }}>
            {resume?.skills ? resume.skills : "Skills"}      </Typography>
          <hr />
          <Typography variant='h4' sx={{ padding: "10px" }}>
            Education
          </Typography>
          <Box sx={{ padding: "30px" }}>
          <Typography variant='body1'> {resume?.degree ? resume.degree : "Degree"}</Typography>
          <Typography variant='body1'> {resume?.college ? resume.college : "College"}</Typography>
          <Typography variant='body1'> {resume?.year ? resume.year : "Year"}</Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

export default View;