import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Section from './Section';
import {timeConvert} from '../utils'


const StageArea = (props) => {
  const { stageInfo, sections, wholeTime } = props;
  
  // 時間オブジェクト配列を作る処理
  const  createTimeList=(startTime, endTime)=> {
    const timeList = [];
    let currentTime = new Date(startTime);
    while (currentTime <= endTime) {
      timeList.push({ time: timeConvert(currentTime), flag: false });
      currentTime.setMinutes(currentTime.getMinutes() + 5);
    }
    return timeList;
  }

  const checkStartTime=(timeList)=>{
    const orgTimeList = timeList;
    sections.map((sec)=>{
      let start_dt = new Date(sec.start_time);
      // 標準時が効いているので時間を合わせる。
      // 地域によって差がでる？
      const utcTime = start_dt.getTime();
      const updatedTime = utcTime - (9 * 60 * 60 * 1000);
      const updatedDateObj = new Date(updatedTime);
      // hh:mmの形式に合わせている
      let dataStr = timeConvert(updatedDateObj);
      timeList.map((time,index)=>{
        if(time.time==dataStr){
          sec.flag = true;
          orgTimeList[index].flag=true
        }
      })
    })
    return orgTimeList;
  }

  let timeList = createTimeList(wholeTime.start,wholeTime.end);
  timeList = checkStartTime(timeList);

  let sectionIndex = -1;
  let allottedTime = 0;
  let sectionStartFlag = false;

  return (
    <div className=''>
      <div key={stageInfo.id}
        className='w-60 h-full'
        style={{backgroundColor:stageInfo.color}}>
        <div key={uuidv4()} className='flex h-16 items-center justify-center text-white text-white-outline text-4xl font-extrabold'>
          {stageInfo.name}
        </div>
        {timeList.map((time)=>{
          if(!time.flag){
            if(sectionStartFlag){
              allottedTime = allottedTime-5;
              if(allottedTime<=0){
                sectionStartFlag=false;
              }
              return null;
            }
            return (
              <p className='mt-1 h-6 text-gray-300 text-center' key={uuidv4()}>
                ---------------------------------
                </p>
            )
          }else{
            sectionIndex++;
            if(sectionIndex <= sections.length-1){
              allottedTime = sections[sectionIndex].allotted_time;
              sectionStartFlag = true;

              allottedTime = allottedTime-5;
              return(
                <Section section={sections[sectionIndex]} key={uuidv4()}/>
                )
            }
          }
        })}
      </div>
    </div>
  )
}

export default StageArea