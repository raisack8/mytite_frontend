import React from 'react'
import { useLocation } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine';
import TimeTableArea from '../TiteComponents/TimeTableArea';
import SideDrawer from '../CmnComponents/SideDrawer'
import MyTiteSave from '../CmnComponents/MyTiteSave'
import MySectionAddModal from '../CmnComponents/MySectionAddModal'

const MyTite = () => {
  const location = useLocation();
  const data = location.state;

  const stageTest = [
    {id: 0, name: 'MyTite1', place: 'お台場', color: '#777777'},
    {id: 1, name: 'MyTite2', place: 'お台場', color: '#888888'},
    {id: 2, name: 'MyTite3', place: 'お台場', color: '#999999'},
    {id: 3, name: 'MyTite4', place: 'お台場', color: '#AAAAAA'},
  ]

  return (
    <>
      <SideDrawer></SideDrawer>
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
        <div className="fixed bottom-36 right-12">
          <MySectionAddModal ></MySectionAddModal>
        </div>
        <div className="fixed bottom-12 right-12">
          <MyTiteSave wholeTime={data.wholeTime}></MyTiteSave>
        </div>
      </div>
    </>
  )
}

export default MyTite