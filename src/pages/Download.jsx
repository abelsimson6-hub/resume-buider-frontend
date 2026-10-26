import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';
import { viewDownloadsAPI } from '../services/apiServices';
import { deleteDownloadsAPI } from '../services/apiServices';
import { Pie, PieChart, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download({ isAnimationActive = true }) {
  //  const [downloads, setDownloads] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [allDownloads, setallDownloads] = useState([])

  const getDownloads = async () => {
    const response = await viewDownloadsAPI()
    console.log(response);
    setallDownloads(response.data)
  }

  //   const handleDelete = async (id) => {
  //   await deleteResumeApi(id);
  //   setDownloads(downloads.filter(item => item.id != id));
  // };

  useEffect(() => {
    getDownloads()
  }, [])

  const deleteDownloads = async (id) => {
    try {
      const response = await deleteDownloadsAPI(id)
      console.log(response);
      getDownloads()

    } catch (error) {
      console.log(error);

    }
  }

  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: 'gray', textAlign: 'center' }}>
            resume download count by job role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Graph
          </Typography>
          <PieChart width={400} height={400}>
            <Pie
              activeShape={{
                fill: 'red',
              }}
              data={[
                { name: 'Page A', uv: 590 },
                { name: 'Page B', uv: 590 },
                { name: 'Page C', uv: 868 },
              ]}
              dataKey="uv"
              isAnimationActive={isAnimationActive}
            />
            <Tooltip defaultIndex={2} />
            {/* <RechartsDevtools /> */}
          </PieChart>
        </Box>
      </Modal>
      <Typography sx={{
        textAlign: "left",
        fontSize: "30px",
        fontWeight: "bold",
        mt: 8,
        mb: 8, px: 5
      }}>All downloaded resumes here</Typography>

      <Typography sx={{
        textAlign: "left",
        fontSize: "30px",
        // fontWeight:"bold",
        mt: 8,
        mb: 8, px: 5
      }}>Total number of resumes downloaded from our site </Typography>
      {/* <Typography variant='h5' sx={{marginLeft:"65px",fontFamily:"initial"}}>
        Total Downloaded resumes from our site is {downloads.length}
      </Typography> */}

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
        onClick={handleOpen}>
        View Chart
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 5,
            width: 400,
            height: 400,
            alignItems: 'center',
            justifyContent: 'space-between',
            py: '10px'
          },
        }}
      >

        {
          allDownloads.length > 0 ? allDownloads.map(item => (
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p>Downloaded Date: {item.formattedDate}</p>

                <button
                  style={{
                    marginLeft: "10px",
                    padding: "8px 16px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "0.3s"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#b02a37"}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#dc3545"}
                  onClick={() => deleteDownloads(item.id)}
                >
                  Delete
                </button>
              </div>

              <Paper
                elevation={24}
                sx={{
                  width: "100%",
                  height: "400px",
                  overflow: "hidden"
                }}
              >
                <img
                  src={item.imgUrl}
                  alt="Resume preview"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                    display: "block"
                  }}
                />
              </Paper>

            </div>
          )) : "no data"
        }


      </Box>
    </div>
  );
}




export default Download
