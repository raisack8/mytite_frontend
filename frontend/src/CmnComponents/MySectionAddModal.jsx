import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MySectionDetail from '../MySection/MySectionDetail';
import MySectionList from '../MySection/MySectionList';

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

export default function MySectionAddModal({wholeTime}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [pageFlag, setPageFlag] = React.useState(0);

  return (
    <div>
      <button type="button" 
        className="border border-blue-500 bg-blue-500
          hover:bg-blue-700 text-white 
          focus:ring-4 focus:outline-none focus:ring-blue-300 
          font-medium rounded-full text-sm p-5 text-center 
          inline-flex items-center"
        onClick={()=>{handleOpen(); setPageFlag(0);}}>
        <span className='p-2 text-xl'>ADD</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {pageFlag === 0 && 
            <MySectionList setPageFlag={setPageFlag} wholeTime={wholeTime} setOpen={setOpen}/>
          }
          {pageFlag === 1 && 
            <MySectionDetail setPageFlag={setPageFlag} wholeTime={wholeTime} setOpen={setOpen}/>
          }
        </Box>
      </Modal>
    </div>
  );
}