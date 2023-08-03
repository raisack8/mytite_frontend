import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Toriisogi = (props) => {
  const {setPageCount} = props

  const [allFes, setAllFes] = useState();
  const [allStage, setAllStage] = useState();
  const [allSection, setAllSection] = useState();

  useEffect(() => {
    // Update the document title using the browser API
    getSectionData()
  },[]);
  const getSectionData=async()=>{
    try {
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/fes_stage_section_return/', 
        );
      setAllFes(response.data.fes)
      setAllStage(response.data.stage)
      setAllSection(response.data.section)
      console.log(response)
      console.log(response.data.fes)
      console.log(response.data.stage)
      console.log(response.data.section)
    } catch (error) {
      alert("システムエラーが発生しました");
    }
  };

  // ----fes_model
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [eventDate, setEventDate] = useState();

  const runApiFes=()=>{
    sendDataFes();
  }

  const sendDataFes=async()=>{
    try {
      const dataToSend = {
        name: name,
        year: year,
        eventDate: eventDate,
      };
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/operate_db_fes_create/', 
        dataToSend
        );
      alert("登録が完了しました\n"+response.data.data);
      // setName("");
      // setYear("");
      // setEventDate("");
    } catch (error) {
      alert("システムエラーが発生しました");
    }
  };

  // ---stage_model
  const [stageId, setStageId] = useState();
  const [stageName, setsStageName] = useState();
  const [place, setPlace] = useState();
  const [color, setColor] = useState();
  const [fesIdId, setFesIdId] = useState();
  const [stageImagePath1, setStageImagePath1] = useState();

  const runApiStage=()=>{
    sendDataStage();
  }

  const sendDataStage=async()=>{
    try {
      const dataToSend = {
        stageId: stageId,
        stageName: stageName,
        place: place,
        color: color,
        fesIdId: fesIdId,
        stageImagePath1: stageImagePath1,
      };
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/operate_db_stage_create/', 
        dataToSend
        );
      console.log(response)
      alert("登録が完了しました\n"+response.data.data);
    } catch (error) {
      alert("システムエラーが発生しました")
    }
  };

    // ---section_model
    // const [sectionId,setSectionId] = useState('');
    const [appearanceDate,setAppearanceDate] = useState('');
    const [startTime,setStartTime] = useState('');
    const [allottedTime,setAllottedTime] = useState('');
    const [artistName,setArtistName] = useState('');
    const [other1,setOther1] = useState('');
    const [other2,setOther2] = useState('');
    const [other3,setOther3] = useState('');
    const [other4,setOther4] = useState('');
    const [other5,setOther5] = useState('');
    const [officialUrl,setOfficialUrl] = useState('');
    const [twitterId,setTwitterId] = useState('');
    const [instaId,setInstaId] = useState('');
    const [fesIdIdForSection,setFesIdIdForSection] = useState('');
    const [stageIdforSection,setStageIdforSection] = useState('');

    const runApiSection=()=>{
      sendDataSection();
    }
  
    const sendDataSection=async()=>{
      try {
        const dataToSend = {
          appearance_date: appearanceDate,
          start_time: startTime,
          allotted_time: allottedTime,
          artist_name: artistName,
          other1: other1,
          other2: other2,
          other3: other3,
          other4: other4,
          other5: other5,
          official_url: officialUrl,
          twitter_id: twitterId,
          insta_id: instaId,
          fes_id: fesIdIdForSection,
          stage_id: stageIdforSection,
        };
        const response = await axios.post(
          process.env.REACT_APP_DJANGO_API_URL+'/api/operate_db_section_create/', 
          dataToSend
          );
        console.log(response)
        alert("登録が完了しました\n"+response.data.data);
      } catch (error) {
        alert("システムエラーが発生しました")
      }
    };

  const fesDeleteClite=(id)=>{
    clickFesDelete(id);
  }

  const stageDeleteClite=(id)=>{
    clickStageDelete(id);
  }

  const sectionDeleteClite=(id)=>{
    clickSectionDelete(id);
  }

  const clickFesDelete=async(id)=>{
    try {
      const dataToSend = {id: id,};
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/fes_delete/', 
        dataToSend
        );
      alert("削除しました");
    } catch (error) {
      alert("システムエラーが発生しました")
    }
  }

  const clickStageDelete=async(id)=>{
    try {
      const dataToSend = {id: id,};
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/stage_delete/', 
        dataToSend
        );
      alert("削除しました");
    } catch (error) {
      alert("システムエラーが発生しました")
    }
  }

  const clickSectionDelete=async(id)=>{
    try {
      const dataToSend = {id: id,};
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/section_delete/', 
        dataToSend
        );
      alert("削除しました");
    } catch (error) {
      alert("システムエラーが発生しました")
    }
  }

  return (
    <div>
      <div>
        <div>fesモデル用</div>
        <TextField label="name" className='bg-red-100'
          onChange={(e) => setName(e.target.value)} 
            />
        <TextField label="year(2023-01-01)" className='bg-red-100'
          onChange={(e) => setYear(e.target.value)} 
          />
        <TextField label="event_date(2023-08-08)" className='bg-red-100'
          onChange={(e) => setEventDate(e.target.value)} 
          />
        <Button variant="outlined"
          onClick={runApiFes}>
          登録
        </Button>
      </div>
      <hr className='py-4'/>

      <div>
        <div>stageモデル用</div>
        <TextField label="StageId" className='bg-red-100'
          onChange={(e) => setStageId(e.target.value)} 
            />
        <TextField label="StageName" className='bg-red-100'
          onChange={(e) => setsStageName(e.target.value)} 
          />
        <TextField label="Place" className='bg-red-100'
          onChange={(e) => setPlace(e.target.value)} 
          />
        <TextField label="Color(#FFFFFF)" className='bg-red-100'
          onChange={(e) => setColor(e.target.value)} 
          />
        <TextField label="FesIdId" className='bg-amber-100'
          onChange={(e) => setFesIdId(e.target.value)} 
          />
        <TextField label="StageImagePath1"
          onChange={(e) => setStageImagePath1(e.target.value)} 
          />
        <Button variant="outlined"
          onClick={runApiStage}>
          登録
        </Button>
        <p>※fes_id_idは外部キー。どのフェスで使うステージなのか</p>
        <p>※StageImagePath1 例)/resources/tif/hotstage_logo.png</p>
      </div>
      <hr className='py-4'/>
      
      <div>
        <div>Sectionモデル用</div>
        <TextField label="出演日(2023-08-03)" value={appearanceDate} className='bg-red-100'
          onChange={(e) => setAppearanceDate(e.target.value)} 
          />
        <TextField label="開始時刻(13:05)" value={startTime} className='bg-red-100'
          onChange={(e) => setStartTime(e.target.value)} 
          />
        <TextField label="持ち時間(15)" value={allottedTime} className='bg-red-100'
          onChange={(e) => setAllottedTime(e.target.value)} 
        />
        <TextField label="アーティスト名" value={artistName} className='bg-red-100'
          onChange={(e) => setArtistName(e.target.value)} 
          />
        <TextField label="説明文" value={other1}
          onChange={(e) => setOther1(e.target.value)} 
          />
        <TextField label="画像URL" value={other2}
          onChange={(e) => setOther2(e.target.value)} 
        />
        <TextField label="その他説明文3" value={other3}
          onChange={(e) => setOther3(e.target.value)} 
        />
        <TextField label="その他説明文4" value={other4}
          onChange={(e) => setOther4(e.target.value)} 
        />
        <TextField label="その他説明文5" value={other5}
          onChange={(e) => setOther5(e.target.value)} 
        />
        <TextField label="公式ホームページURL(https://~)" value={officialUrl}
          onChange={(e) => setOfficialUrl(e.target.value)} 
          />
        <TextField label="Twitter ID(IDのみ)" value={twitterId}
          onChange={(e) => setTwitterId(e.target.value)} 
          />
        <TextField label="Isnta ID" value={instaId}
          onChange={(e) => setInstaId(e.target.value)} 
        />
        <TextField label="フェスID" value={fesIdIdForSection} className='bg-amber-100'
          onChange={(e) => setFesIdIdForSection(e.target.value)} 
        />
        <TextField label="ステージID" value={stageIdforSection} className='bg-amber-100'
          onChange={(e) => setStageIdforSection(e.target.value)} 
        />
        <Button variant="outlined"
          onClick={runApiSection}>
          登録
        </Button>
        <p>※開始時間の日付は「1899/12/30」固定</p>
        <p>※フェスID,ステージIDは外部キー。</p>
        <p>※画像URL 例)/resources/tif/hotstage_logo.png</p>
      </div>
      <div className='text-xs w-full'>
      <p>------------fes一覧-----------------</p>
      {allFes &&(
        Object.values(allFes).map((fes) => (
            <p key={fes.id}>
              <span className='border border-black mr-2 cursor-pointer'
                onClick={()=>fesDeleteClite(fes.id)}>削除</span>
              {fes.id}, {fes.name}, {fes.year}, {fes.event_date}
              </p>
          )))}
      <p>------------Stage一覧-----------------</p>
      {allStage &&(
        Object.values(allStage).map((stage) => (
            <p key={stage.id}>
              <span className='border border-black mr-2 cursor-pointer'
                onClick={()=>stageDeleteClite(stage.id)}>削除</span>
              {stage.id}, stage_id:{stage.stage_id}, {stage.name}, {stage.color}, {stage.stage_image_path1}</p>
          )))}
      <p>------------Section一覧-----------------</p>
      {allSection &&(
        Object.values(allSection).map((sec) => (
            <p key={sec.id}>
              <span className='border border-black mr-2 cursor-pointer'
                onClick={()=>sectionDeleteClite(sec.id)}>削除</span>
              {sec.id}, fes_id:{sec.fes_id}, stage_id:{sec.stage}, {sec.artist_name}, {sec.other2}</p>
          )))}
      </div>
    </div>
  )
}

export default Toriisogi