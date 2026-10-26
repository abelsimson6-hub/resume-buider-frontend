import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'
import { editResumeAPI } from '../services/apiServices'
// import { ImCross } from "react-icons/im";
import ClearIcon from '@mui/icons-material/Clear';
import { useRef } from 'react';

function Edit({ resume, setResume }) {
  console.log(resume);

  const inputRef = useRef(null);

  const [open, setOpen] = useState(false)

  const handleAddSkills = (skill) => {
    console.log(skill);
    if (skill) {
      if (resume?.skills?.includes(skill)) {
        alert("skill already exists")
      }
      else {
        setResume({ ...resume, skills: [...resume?.skills, skill] })
      }
      inputRef.current.value = ""
    } else {
      alert("please fill a valid data")
    }
  }

  const handleDeleteSkills = (skill) => {
    setResume({ ...resume, skills: resume.skills.filter(item => item != skill) })
  }


  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => setOpen(true);

  const handleUpdateResume = async () => {
    const response = await editResumeAPI(resume.id, resume)
    console.log(response);

  }


  return (
    <>
      <Button onClick={handleOpen}>Edit</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box
          sx={{
            width: '550px',
            maxWidth: '90%',
            maxHeight: '90vh',
            overflowY: 'auto',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '4px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >

          <Box
            sx={{
              backgroundColor: '#684f56',
              color: 'white',
              padding: '14px',
              marginBottom: '25px'
            }}
          >
            <Typography variant="h6">
              Edit Resume Details
            </Typography>
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Personal Details
          </Typography>

          <TextField
            label="Full Name"
            placeholder="Enter your full name"
            variant="standard"
            fullWidth
            value={resume?.fullName}
            onChange={e => setResume({ ...resume, fullName: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="Location"
            placeholder="Enter your location"
            variant="standard"
            fullWidth
            value={resume?.location}
            onChange={e => setResume({ ...resume, location: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            select
            label="Choose Job Title"
            defaultValue=""
            variant="standard"
            fullWidth
            //  value={resume.fullName}
            // onChange={e=>setResume({...resume,fullName:e.target.value})}
            sx={{ marginBottom: '30px' }}
          >
            <MenuItem value="">
              Select Job Title
            </MenuItem>

            <MenuItem value="Developer">
              Frontend Developer
            </MenuItem>

            <MenuItem value="Designer">
              UI/UX Designer
            </MenuItem>

            <MenuItem value="Analyst">
              Data Analyst
            </MenuItem>
          </TextField>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Contact Details
          </Typography>

          <TextField
            label="Email"
            placeholder="Enter your email"
            variant="standard"
            fullWidth
            value={resume?.email}
            onChange={e => setResume({ ...resume, email: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="Contact Number"
            placeholder="Enter your phone number"
            variant="standard"
            fullWidth
            value={resume?.phone}
            onChange={e => setResume({ ...resume, phone: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="LinkedIn Link"
            placeholder="Enter LinkedIn URL"
            variant="standard"
            fullWidth
            value={resume?.linkedin}
            onChange={e => setResume({ ...resume, linkedin: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="Github Link"
            placeholder="Enter Github URL"
            variant="standard"
            fullWidth
            value={resume?.github}
            onChange={e => setResume({ ...resume, github: e.target.value })}
            sx={{ marginBottom: '30px' }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Educational Details
          </Typography>

          <TextField
            label="Degree"
            placeholder="Enter your degree"
            variant="standard"
            fullWidth
            value={resume?.degree}
            onChange={e => setResume({ ...resume, degree: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="College / University"
            placeholder="Enter college or university"
            variant="standard"
            fullWidth
            value={resume?.college}
            onChange={e => setResume({ ...resume, college: e.target.value })}
            sx={{ marginBottom: '18px' }}
          />

          <TextField
            label="Year of Graduation"
            placeholder="Enter graduation year"
            variant="standard"
            fullWidth
            value={resume?.year}
            onChange={e => setResume({ ...resume, year: e.target.value })}
            sx={{ marginBottom: '30px' }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            skills

          </Typography>

          <TextField inputRef={inputRef} />



          <Button onClick={() => handleAddSkills(inputRef.current.value)}>add skills</Button>
          <Box>
            {
              resume?.skills?.map(item => (
                <Button>{item} <span onClick={() => handleDeleteSkills(item)}><ClearIcon /></span> </Button>
              ))
            }
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              marginBottom: '20px'
            }}
          >
            Summary
          </Typography>

          <TextField
            label="Professional Summary"
            placeholder="Enter your professional summary"
            multiline
            rows={4}
            variant="standard"
            fullWidth
            sx={{ marginBottom: '30px' }}
          />

          <Button
            variant="contained"
            onClick={handleUpdateResume}
            sx={{
              backgroundColor: '#684f56',
              fontWeight: 'bold',
              padding: '10px 20px',

              '&:hover': {
                backgroundColor: '#563f46'
              }
            }}
          >
            UPDATE CV
          </Button>

        </Box>
      </Modal>
    </>
  )
}

export default Edit