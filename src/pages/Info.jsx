import React from 'react'
import Box from '@mui/material/Box';
import ResumeInput from '../components/ResumeInputs'
import Preview from '../components/Preview'
import Stack from '@mui/material/Stack';
import { useState } from 'react';

 function Info() {

  const [resumeDetails,setResumeDetails] = React.useState({
      fullName:"",location:"",address:"",job:"",email:"",phone:"",linkedin:"",github:"",degree:"",college:"",year:"",skills:[],summary:""
    })

  return (
    <div>
     <Stack direction={{xs:'column',sm:'row'}}
     sx={{
      justifyContent:'space-evenly',
      alignItems:'center',
      marginTop:'10px'
     }}>

      <Box>
        <ResumeInput resumeDetails={resumeDetails} setResumeDetails={setResumeDetails}/>
      </Box>
      <Box>
        <Preview resumeDetails={resumeDetails}/>
      </Box>
        
     </Stack>
    </div>
  )
}

export default Info
