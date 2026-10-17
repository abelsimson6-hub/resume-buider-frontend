import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Modal from '@mui/material/Modal';


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
function Download() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:'gray',textAlign:'center'}}>
            resume download count by job role
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Graph
          </Typography>
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
        <Paper elevation={20} />
        <Paper elevation={20} />
        <Paper elevation={20} />
      </Box>
    </div>
  )
}

export default Download
