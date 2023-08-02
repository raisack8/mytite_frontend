import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MySectionDetail from '../MySection/MySectionDetail';
import MenuDetail from './MenuDetail'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MenuModal(props) {
  const {padding} = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button type="button" 
        className="border border-blue-500 bg-blue-500 text-white 
          hover:bg-blue-700
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-full text-sm text-center 
          inline-flex items-center"
        style={padding?{padding:padding}:{padding:'1.5rem'}}
        onClick={()=>handleOpen()}>
        <span className='p-2 text-xl'>MENU</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MenuDetail setOpen={setOpen}></MenuDetail>
        </Box>
      </Modal>
    </div>
  );
}