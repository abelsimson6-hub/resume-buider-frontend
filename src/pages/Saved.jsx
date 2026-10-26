import React, { useEffect, useMemo, useState } from 'react'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search"
import InputAdornment from '@mui/material/InputAdornment';
import { deleteSavedAPI, viewAllResumesAPI } from '../services/apiServices';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));






function Saved() {

  const [resumes, setResume] = useState([])

  const [searchkey, setSearchkey] = useState("")

  const [dummyResume, setDummyResume] = useState([])

  const searchOutput = useMemo(() => {
    setResume(dummyResume.filter(item => item.job.includes(searchkey)))

  }, [searchkey])

  const getAllResumes = async () => {
    try {
      const response = await viewAllResumesAPI()
      console.log(response);
      setResume(response.data)
      setDummyResume(response.data)
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    getAllResumes()
  }, [])


  const deleteResume = async (id) => {
    try {
      const response = await deleteSavedAPI(id)
      console.log(response);
      getAllResumes()
    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div>
      <Typography sx={{
        textAlign: "center",
        fontSize: "50px",
        fontWeight: "bold",
        mt: 8,
        mb: 8
      }}>All Saved Resumes</Typography>

      <Typography sx={{
        px: 10,
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "bold",
        mt: 8,
        mb: 8
      }}>
        all resumes submitted to the platform in one place,allowing administrators to efficently view,search,filtetr and manage candidate profiles
        It provides a quick overview of availablle candidates and their key details,making the recruitment and candidate selection process more organized
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8
        }}
      >
        <TextField
          placeholder="Search Candidate by their Job Roles"
          // value={search}
          onChange={(e) => setSearchkey(e.target.value)}
          sx={{ width: "60%" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700, }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">JOB ROLE</StyledTableCell>
              <StyledTableCell align="right">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resumes.map((item, index) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <Link to={`/resumes/${item.id}`}>
                  <StyledTableCell component="th" scope="row">
                    {item.fullName}
                  </StyledTableCell>
                </Link>
                <StyledTableCell align="right">{item.job}</StyledTableCell>
                <StyledTableCell align="right"><button onClick={() => deleteResume(item.id)}>Delete</button></StyledTableCell>

              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Saved
