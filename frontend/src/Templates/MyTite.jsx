import React from 'react'
import { useLocation } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine';
import TimeTableArea from '../TiteComponents/TimeTableArea';

const MyTite = () => {
  const location = useLocation();
  const data = location.state;

  // console.log(data)
  const testData = [
    {id: 1, appearance_date: "2022-08-03", start_time: '1899-12-30T13:05:00Z', allotted_time: 15, artist_name: 'あびゅるむ',stage:1},
    {id: 2, appearance_date: "2022-08-03", start_time: '1899-12-30T13:30:00Z', allotted_time: 15, artist_name: 'あびゅるむ',stage:1},
    ]
  const stageTest = [
    {id: 0, name: 'MyTite1', place: 'お台場', color: '#999999'},
    {id: 1, name: 'MyTite2', place: 'お台場', color: '#999999'},
    {id: 2, name: 'MyTite3', place: 'お台場', color: '#999999'},
    {id: 3, name: 'MyTite4', place: 'お台場', color: '#999999'},
  ]
  // console.log(testData)

  return (
    <>
      <div className="flex">
        <div style={{"paddingTop":"4.0rem"}}>
          <TimeLine wholeTime={data.wholeTime}/>
        </div>
        <TimeTableArea stages={stageTest} sections={data.data.message.myTiteSections} wholeTime={data.wholeTime}/>

      </div>
    </>
  )
}

export default MyTite