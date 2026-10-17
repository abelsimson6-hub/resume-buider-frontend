import * as React from "react";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import jobRoles from "../assets/jobRoles.json";
import jobSkills from "../assets/jobSkills.json";
import summaries from "../assets/summaries.json";
import { addResumeAPI } from "../services/apiServices";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const steps = [
  "Basic Information",
  "Contact Details",
  "Educational Details",
  "Review and Submit",
];

function ResumeInput({ resumeDetails, setResumeDetails }) {
  const navigate=useNavigate()
  const [activeStep, setActiveStep] = React.useState(0);

  // Keep all input values defined
  const details = resumeDetails || {};

  // Update resume details
  const handleChange = (field, value) => {
    setResumeDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Form content
  const renderFormContent = (stepCount) => {
    switch (stepCount) {
      case 0:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Personal Details
            </Typography>

            <TextField
              label="Name"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.fullName ?? ""}
              onChange={(e) =>
                handleChange("fullName", e.target.value)
              }
            />

            <TextField
              label="Place"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.location ?? ""}
              onChange={(e) =>
                handleChange("location", e.target.value)
              }
            />

            <FormControl
              variant="standard"
              fullWidth
              margin="normal"
            >
              <InputLabel id="job-label">Job Role</InputLabel>

              <Select
                labelId="job-label"
                id="job"
                value={details.job ?? ""}
                onChange={(e) =>
                  handleChange("job", e.target.value)
                }
                label="Job Role"
              >
                {jobRoles.jobRoles.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Contact Details
            </Typography>

            <TextField
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.email ?? ""}
              onChange={(e) =>
                handleChange("email", e.target.value)
              }
            />

            <TextField
              label="Contact Number"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.phone ?? ""}
              onChange={(e) =>
                handleChange("phone", e.target.value)
              }
            />

            <TextField
              label="LinkedIn Link"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.linkedin ?? ""}
              onChange={(e) =>
                handleChange("linkedin", e.target.value)
              }
            />

            <TextField
              label="GitHub Link"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.github ?? ""}
              onChange={(e) =>
                handleChange("github", e.target.value)
              }
            />
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Educational Details
            </Typography>

            <TextField
              label="Bachelor's Degree"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.degree ?? ""}
              onChange={(e) =>
                handleChange("degree", e.target.value)
              }
            />

            <TextField
              label="College/University Name"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.college ?? ""}
              onChange={(e) =>
                handleChange("college", e.target.value)
              }
            />

            <TextField
              label="Year of Graduation"
              variant="standard"
              fullWidth
              margin="normal"
              value={details.year ?? ""}
              onChange={(e) =>
                handleChange("year", e.target.value)
              }
            />
          </Box>
        );

      case 3:
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Review and Submit
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Review your resume details before submitting.
            </Typography>

            <Typography variant="subtitle1">
              Personal Details
            </Typography>
            <Typography>Name: {details.fullName ?? ""}</Typography>
            <Typography>Place: {details.location ?? ""}</Typography>
            <Typography>Job Title: {details.job ?? ""}</Typography>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Contact Details
            </Typography>
            <Typography>Email: {details.email ?? ""}</Typography>
            <Typography>Phone: {details.phone ?? ""}</Typography>
            <Typography>LinkedIn: {details.linkedin ?? ""}</Typography>
            <Typography>GitHub: {details.github ?? ""}</Typography>

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Educational Details
            </Typography>
            <Typography>Degree: {details.degree ?? ""}</Typography>
            <Typography>College: {details.college ?? ""}</Typography>
            <Typography>
              Graduation Year: {details.year ?? ""}
            </Typography>

            <Typography variant="body2" sx={{ mt: 2 }}>
              Click Generate AI Skills and Summary to continue.
            </Typography>
          </Box>
        );

      default:
        return null;
    }
  };


  const handleGenerateSummary = () => {
    const selectedJob = details.job;

    setResumeDetails((prev) => ({
      ...prev,
      skills: jobSkills[selectedJob] ?? [],
      summary: summaries[selectedJob] ?? "",
    }));

    handleNext();
  };

  // Submit resume
  const handleSubmitResume = async () => {
    try {
      const response = await addResumeAPI(details);
      console.log(response);

      const resumeId=response.data.id
      console.log(`resume id ${resumeId}`);
      
      if (response.status == 201) {
        Swal.fire({
          title: "Good job!",
          text: "Resume added successfully!",
          icon: "success"
        });

        setTimeout(()=>{
          navigate(`/resumes/${resumeId}`)
        },3000)
      }
    } catch (error) {
      console.error("Error submitting resume:", error);
    }

  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === steps.length ? (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            All Steps Completed
          </Typography>

          <Typography>
            Your resume information has been collected successfully.
          </Typography>

          <Button
            variant="contained"
            onClick={handleSubmitResume}
            sx={{ mt: 2, mr: 2 }}
          >
            Submit Resume
          </Button>

          <Button
            variant="outlined"
            onClick={handleReset}
            sx={{ mt: 2 }}
          >
            Start Again
          </Button>
        </Box>
      ) : (
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Step {activeStep + 1} of {steps.length}
          </Typography>

          {renderFormContent(activeStep)}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 4,
            }}
          >
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />

            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleGenerateSummary}
              >
                Generate AI Skills and Summary
              </Button>
            ) : (
              <Button variant="contained" onClick={handleNext}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ResumeInput;