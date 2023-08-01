import React, { useState,useContext } from 'react';
// import { add } from '../redux/state';
import MyContext from '..';
import { handleLongPress } from '../utils';


const Section = (props) => {
  const { section, sectionClickFlag } = props;

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

  // 長押しのイベントハンドラを取得
  const longPressEvent = handleLongPress((elementId) => {
    console.log('長押しされました！');
    console.log(elementId);
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
              <p>{startTime}~{endTimeString}</p>
              {section.stage_img_url && (
              <div className='ml-auto mr-0'>
                <div className='w-20 h-4'>
                  <img src={process.env.PUBLIC_URL + section.stage_img_url} 
                    alt={section.name}/>
                </div>
              </div>)}
              {!section.stage_img_url && (
              <div className='ml-auto mr-0'>
                <div className='w-20 h-4'>
                  <p>{section.name}</p>
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

  
  return (
    <>
      <div onClick={()=>toggleClickFlg(section.id)}
          id={section.id}
          onMouseDown={() => longPressEvent.handleMouseDown(section)}
          onMouseUp={longPressEvent.handleMouseUp}
          >
        {repeatedElements}
      </div>
    </>
  );
};

export default Section;