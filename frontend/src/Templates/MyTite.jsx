import React from 'react'
import { useLocation } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine';
import TimeTableArea from '../TiteComponents/TimeTableArea';

const MyTite = () => {
  const location = useLocation();
  const data = location.state;

  const stageTest = [
    {id: 0, name: 'MyTite1', place: 'お台場', color: '#999999'},
    {id: 1, name: 'MyTite2', place: 'お台場', color: '#999999'},
    {id: 2, name: 'MyTite3', place: 'お台場', color: '#999999'},
    {id: 3, name: 'MyTite4', place: 'お台場', color: '#999999'},
  ]

  return (
    <>
      <div className="flex m-8">
        <div style={{"paddingTop":"4.0rem"}}>
          <TimeLine wholeTime={data.wholeTime}/>
        </div>
        <TimeTableArea 
          stages={stageTest} 
          sections={data.data.message.myTiteSections} 
          wholeTime={data.wholeTime}
          sectionClickFlag={false}
        />

      </div>
    </>
  )
}

export default MyTite