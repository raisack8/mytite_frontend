import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine';
import TimeTableArea from '../TiteComponents/TimeTableArea';
import SideDrawer from '../CmnComponents/SideDrawer'
import MyTiteSave from '../CmnComponents/MyTiteSave'
import MySectionAddModal from '../CmnComponents/MySectionAddModal'
import MenuModal from "../CmnComponents/MenuModal"

const MyTite = () => {
  const location = useLocation();
  const data = location.state;
  const { id } = useParams();

  useEffect(() => {
    const handleGoBack = () => {
      // ここに戻る処理を追加
      // 特定のページに遷移させる例：'/specific-page'
      window.location.href = '/tite/'+id;
    };
    window.addEventListener('popstate', handleGoBack);
    return () => {
      window.removeEventListener('popstate', handleGoBack);
    };
  }, []);

  const stageTest = [
    {id: 0, name: 'MyTite1', place: 'お台場', color: '#777777'},
    {id: 1, name: 'MyTite2', place: 'お台場', color: '#888888'},
    {id: 2, name: 'MyTite3', place: 'お台場', color: '#999999'},
    {id: 3, name: 'MyTite4', place: 'お台場', color: '#AAAAAA'},
  ]

  return (
    <>
      <div className="fixed top-12 right-12">
        <MenuModal></MenuModal>
      </div>
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
          <MySectionAddModal wholeTime={data.wholeTime} ></MySectionAddModal>
        </div>
        <div className="fixed bottom-12 right-12">
          <MyTiteSave wholeTime={data.wholeTime}></MyTiteSave>
        </div>
      </div>
    </>
  )
}

export default MyTite