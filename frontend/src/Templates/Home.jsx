import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import TimeLine from '../TiteComponents/TimeLine'
import TimeTableArea from '../TiteComponents/TimeTableArea'
import CreateBtn from '../CmnComponents/CreateBtn'
import MenuModal from '../CmnComponents/MenuModal'
import axios from "axios"
import MyContext from '..';
import {localStorageReset} from "../utils"

const Home = () => {
  const { id } = useParams();
  localStorageReset();
  // Sectionの値
  const[sections, setSections] = useState([]);
  // Stagesの値
  const[stages, setStages] = useState([]);
  // Fes名
  const[fesName, setFesName] = useState([]);
  const[error, setError] = useState('')
  const wholeTime = {
    "start":new Date('1899-12-30T09:00:00'),
    "end":new Date('1899-12-30T21:30:00'),
  }
  useEffect(() => {
    getPosts();
    let userid = localStorage.getItem('userid');
    if(userid==null){
      alert("ログインしないとマイタイテを保存できないので注意してください。")
    }
  }, []);

  useEffect(() => {
    const handleGoBack = () => {
      window.location.href = '/';
    };
    window.addEventListener('popstate', handleGoBack);
    return () => {
      window.removeEventListener('popstate', handleGoBack);
    };
  }, []);


  // Homeコンポーネントが読み込まれた際、useContextの値をリセット
  let contextData = useContext(MyContext)
  contextData.sectionData = []

  const iFesId = id
  // DjangoのAPIと通信するメソッド..
  const getPosts = async () => {
      await axios.get(process.env.REACT_APP_DJANGO_API_URL+'/api/api/?id='+id)
      .then(res1 => {
        setSections(res1.data);
        setFesName(res1.fesName);
        console.log(res1);
        console.log(res1.data);
        axios.get(process.env.REACT_APP_DJANGO_API_URL+'/api/stages/?id='+id)
        .then(res2 => {
          setStages(res2.data);
        })
      }).catch(error => setError(error))
  }

  return (
    <>
      <div className="fixed top-12 right-12">
        <MenuModal></MenuModal>
      </div>
      <div>{fesName}</div>
      <div className='m-8'>
        <div className="flex">
          <div style={{"paddingTop":"4.0rem"}}>
            <TimeLine wholeTime={wholeTime}/>
          </div>
          <TimeTableArea 
            stages={stages} 
            sections={sections} 
            wholeTime={wholeTime}
            sectionClickFlag={true}
          />
        </div>
        <div className="fixed bottom-12 right-12">
          <CreateBtn wholeTime={wholeTime}></CreateBtn>
        </div>
      </div>
    </>
  )
}

export default Home