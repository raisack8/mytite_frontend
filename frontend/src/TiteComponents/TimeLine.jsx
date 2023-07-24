import React, { useState, useEffect } from 'react'

const TimeLine = ({wholeTime}) => {
  
  const { start, end } = wholeTime;

  const [timeLine, setTimeLine] = useState([]);

  useEffect(() => {
    const generateTimeLine = () => {
      const startTime = start;
      const endTime = end;
      const timeInterval = 5; // 分単位の間隔

      const timeLineArr = [];
      let currentTime = startTime;

      while (currentTime <= endTime) {
        const formattedTime = currentTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        timeLineArr.push(formattedTime);

        currentTime = new Date(currentTime.getTime() + timeInterval * 60000);
      }

      setTimeLine(timeLineArr);
    };

    generateTimeLine();
  }, [start, end]);

  return (
    <>
    <div>
      <div>
      {timeLine.map((time, index) => {
        const hours = time.split(':')[0];
        const minutes = time.split(':')[1];
        let textStyle = 'font-normal';
        let textSize = 'text-xs';
        
        if (minutes === '00') {
          textStyle = 'font-bold';
          textSize = 'text-base';
        } else if (minutes === '15' || minutes === '30' || minutes === '45') {
          textStyle = 'font-normal';
          textSize = 'text-base';
        }
        
        const formattedTime = hours.startsWith('0') ? hours.slice(1) : hours;
        
        return (
          <div
          key={index}
          className={`${textStyle} ${textSize} mt-1 h-6 flex items-center justify-end pr-2`}
          >
            {formattedTime}:{minutes}
          </div>
        );
      })}
      </div>
    </div>
    </>
  );
}

export default TimeLine