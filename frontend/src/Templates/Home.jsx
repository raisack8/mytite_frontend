import React, { useContext, useEffect, useState } from 'react'
import ErrorModal from '../CmnComponents/ErrorModal'
import TimeLine from '../TiteComponents/TimeLine'
import TimeTableArea from '../TiteComponents/TimeTableArea'
import CreateBtn from '../CreateBtn'
import MyContext from '..'
import axios from "axios"

const Home = () => {

  // Sectionの値
  const[sections, setSections] = useState([]);
  // Stagesの値
  const[stages, setStages] = useState([]);
  const[error, setError] = useState('')
  const wholeTime = {
    "start":new Date('1899-12-30T09:00:00'),
    "end":new Date('1899-12-30T21:00:00'),
  }
  useEffect(() => {
    getPosts();
  }, []);

  // DjangoのAPIと通信するメソッド
  function getPosts() {
      axios.get('http://127.0.0.1:8000/api/api/')
      .then(res1 => {
        setSections(res1.data);

        axios.get('http://127.0.0.1:8000/api/stages/')
        .then(res2 => {
          setStages(res2.data);
        })
      }).catch(error => setError(error))
  }

  return (
    <div>
      <ErrorModal isVisibled={true}/>
      <span className="border border-red-500 bg-red-300">{error.message}</span>
      <div className="flex">
        <div style={{"paddingTop":"4.0rem"}}>
          <TimeLine wholeTime={wholeTime}/>
        </div>
        <TimeTableArea stages={stages} sections={sections} wholeTime={wholeTime}/>
      </div>
      <div className="fixed bottom-12 right-12">
        <CreateBtn wholeTime={wholeTime}></CreateBtn>
      </div>
    </div>
  )
}

export default Home