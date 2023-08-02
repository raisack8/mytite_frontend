import React, { useState,useContext } from 'react';
// import { add } from '../redux/state';
import MyContext from '..';
import { handleLongPress } from '../utils';
import SectionExplanation from './SectionExplanation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArtistDetails from './ArtistDetails'
import ArtistEditPass from './ArtistEditPass'
import ArtistEditAdmin from './ArtistEditAdmin'
import axios from 'axios';
import { wholeTime } from '../utils'
import { useNavigate, useParams } from 'react-router-dom';

const Section = (props) => {
  const { section, sectionClickFlag } = props;
  const navigate  = useNavigate();
  const { id } = useParams();

  const [clickFlg, setClickFlg] = useState(false);
  const contextVal = useContext(MyContext)

  // Sectionをクリックしたときの処理
  const toggleClickFlg = (id) => {
    if(!sectionClickFlag){
      return;
    }
    setClickFlg(!clickFlg);
    // Contextに値を登録する
    contextVal.setSection(id);
  };

  // DELETEボタンを押下時の処理
  const deleteMySec = async(mySecId) => {
    try {
      // ローカルストレージから押下したマイセクidを削除する
      let mySecList = localStorage.getItem('displayedSectionList');
      if(mySecList.includes(',')){
        console.log("==========")
        console.log(mySecId)
        const stringArray = mySecList.split(',');
        console.log(stringArray)
        const filteredArray = stringArray.filter(item => item !== String(mySecId));
        console.log(filteredArray)
        mySecList = filteredArray.join(',');
        console.log(mySecList)
      }else{
        // カンマがない場合は消す対象のマイセクしかないものと考える
        mySecList=''
      }
      
      let userid = localStorage.getItem('userid');
      const dataToSend = {
        id: localStorage.getItem('orgSectionList'),
        fes_id: id,
        user_id: userid,
        my_sec_list: mySecList,
        delete_flag: true,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/api/', 
        dataToSend
        );
      console.log(response)
      // エラーメッセージが返されたら表示してreturn
      if(response.data.message.errorMsg!==""){
        alert(response.data.message.errorMsg)
        return;
      }
      localStorage.setItem('orgSectionList', response.data.message.orgSectionList);
      localStorage.setItem('displayedSectionList', response.data.message.displayedSectionList);
      localStorage.setItem('orgMySectionList', response.data.message.orgMySectionList);

      navigate('/mytite/'+id,{state: {
        'data':response.data,
        'wholeTime':wholeTime,
      }});

    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  // 長押しのイベントハンドラを取得
  const longPressEvent = handleLongPress((element) => {
    console.log(element);
    handleOpen(element);
    // モーダルを開く
  });

  const notChoise = 'bg-white';
  const choiced = 'bg-red-200';
  const allottedTime = parseInt(section.allotted_time);
  const repeatCount = Math.floor(allottedTime / 5); // allottedTimeを5で割った商を取得

  const formatTime = (dateTime) => {
    const dateObj = new Date(dateTime);
    const hours = dateObj.getUTCHours(); // 標準時に9時間を加算
    const minutes = dateObj.getUTCMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const startTime = formatTime(section.start_time);
  const endTime = new Date(section.start_time);
  endTime.setMinutes(endTime.getMinutes() + allottedTime);
  const endTimeString = formatTime(endTime);

  const repeatedElements = Array.from({ length: repeatCount }, (_, index) => {
    if (index === 0) {
      return (
        <div className={`mx-2 mt-1 pt-1 rounded-t-md ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-1 text-sm'>
            <div className='flex'>
              <p className='text-sky-600'>{startTime}~{endTimeString}</p>
              {section.stage_img_url && (
              <div className='ml-auto mr-0'>
                <div className='w-20 h-4'>
                  <img src={process.env.PUBLIC_URL + section.stage_img_url} 
                    alt={section.name}/>
                </div>
              </div>)}
              {/* DELETEボタン */}
              {section.delete_flag===true && (
              <div className='ml-auto mr-0'>
                <div className='flex justify-end w-20 h-4 pr-4'
                  onClick={()=>deleteMySec(section.id)}>
                  <p className='px-2 pb-4 text-xs border text-white bg-gray-500 border-gray-600 rounded'>Delete</p>
                </div>
              </div>)}
            </div>
          </div>
        </div>
      );
    } else if (index === 1) {
      if(index === repeatCount-1){
        return (
          <div className={`mx-2 pt-2 rounded-b-md ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-2 text-sm whitespace-nowrap'>
            {section.artist_name}
          </div>
        </div>
        );
      }else{
        return (
          <div className={`mx-2 pt-2 ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-2 text-sm whitespace-nowrap'>
            {section.artist_name}
          </div>
        </div>
        );
      }
    } else if (index === repeatCount-1) {
      if(section.other1 && index === 2){
        return (
          <div className={`mx-2 pt-1 rounded-b-md ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-2 pb-2 text-xs whitespace-nowrap'>
            {section.other1}
          </div>
        </div>
        );
      }else{
        return (
          <div className={`mx-2 pt-1 rounded-b-md ${clickFlg ? choiced : notChoise}`} 
            key={index}>
            <br />
          </div>
        );
      }

    } else if (index === 2 && section.other1) {
        return (
          <div className={`mx-2 pt-3 ${clickFlg ? choiced : notChoise}`} 
          key={index}>
          <div className='mx-2 text-xs whitespace-nowrap'>
            {section.other1}
          </div>
        </div>
        );
    } else {
      return (
        <div className={`mx-2 pt-1 ${clickFlg ? choiced : notChoise}`} key={index}>
          <br />
        </div>
      );
    }
  });


  // Modal==========================
  const [open, setOpen] = React.useState(false);
  const [sectionDetails, setSectionDetails] = React.useState({});
  const handleOpen = (section) => {
    setSectionDetails(section);
    setOpen(true);
  };
  const handleClose = () => {
    setSectionDetails({})
    setOpen(false);
  };
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    animation: 'fadeInOut 0.3s ease',
    // display: 'flex',
    // justifyContent: 'center'
  };
  const [modalDisplayMode, setModalDisplayMode] = useState(0);

  return (
    <>
      <div onClick={()=>toggleClickFlg(section.id)}
          id={section.id}
          onMouseDown={() => longPressEvent.handleMouseDown(section)}
          onMouseUp={longPressEvent.handleMouseUp}
          onTouchStart={() => longPressEvent.handleMouseDown(section)}
          onTouchEnd={longPressEvent.handleMouseUp}
          >
        {repeatedElements}
      </div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
    
        <Box sx={{ ...style, width: '90%' }}>
          {modalDisplayMode === 0 && <ArtistDetails 
                                    setModalDisplayMode={setModalDisplayMode}
                                    section={sectionDetails}
                                    handleClose={handleClose}
                                    />}
          {modalDisplayMode === 1 && <ArtistEditPass 
                                    setModalDisplayMode={setModalDisplayMode}
                                    section={sectionDetails}
                                    handleClose={handleClose}
                                    />}
          {modalDisplayMode === 2 && <ArtistEditAdmin 
                                    setModalDisplayMode={setModalDisplayMode}
                                    section={sectionDetails}
                                    handleClose={handleClose}
                                    />}

          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </>
  );
};

export default Section;