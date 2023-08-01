import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const ArtistEditAdmin = (props) => {
  const{setModalDisplayMode,section} = props;
  useEffect(() => {
    // Update the document title using the browser API
    getSectionData()
  },[]);

  const [sectionId,setSectionId] = useState('');
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
  const [stageId,setStageId] = useState('');
  // Sectionデータ情報を持ってくる処理(管理者用)

  const getSectionData=async()=>{
    try {
      const dataToSend = {
        id: section.id
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/section_data_get/', 
        dataToSend
        );
      console.log(response)
      setSectionId(response.data.id == null? '':response.data.id);
      setAppearanceDate(response.data.appearance_date == null? '':response.data.appearance_date);
      setStartTime(response.data.start_time == null? '':response.data.start_time);
      setAllottedTime(response.data.allotted_time == null? '':response.data.allotted_time);
      setArtistName(response.data.artist_name == null? '':response.data.artist_name);
      setOther1(response.data.other1 == null? '':response.data.other1);
      setOther2(response.data.other2 == null? '':response.data.other2);
      setOther3(response.data.other3 == null? '':response.data.other3);
      setOther4(response.data.other4 == null? '':response.data.other4);
      setOther5(response.data.other5 == null? '':response.data.other5);
      setOfficialUrl(response.data.official_url == null? '':response.data.official_url);
      setTwitterId(response.data.twitter_id == null? '':response.data.twitter_id);
      setInstaId(response.data.insta_id == null? '':response.data.insta_id);
      setStageId(response.data.stage_id == null? '':response.data.stage_id);
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
  };

  const updateSectionData = async() => {
    try {
      const dataToSend = {
        id: sectionId,
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
        stage_id: stageId,
      };
      // POSTリクエストを送信
      const response = await axios.post(
        process.env.REACT_APP_DJANGO_API_URL+'/api/section_data_update/', 
        dataToSend
        );
      console.log(response)
    } catch (error) {
      alert("システムエラーが発生しました")
      console.error('Error sending POST request:', error);
    }
    alert("更新が完了しました。")
  };

  const handleReturnClick = () => {
    setModalDisplayMode(0);
  };


  return (
    <>
      <div className=''>
        <p>id:{sectionId}</p>
        <TextField label="出演日" value={appearanceDate}
          onChange={(e) => setAppearanceDate(e.target.value)} 
          />
        <TextField label="開始時刻" value={startTime}
          onChange={(e) => setStartTime(e.target.value)} 
          />
        <TextField label="持ち時間" value={allottedTime}
          onChange={(e) => setAllottedTime(e.target.value)} 
        />
        <TextField label="アーティスト名" value={artistName}
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
        <TextField label="公式ホームページURL" value={officialUrl}
          onChange={(e) => setOfficialUrl(e.target.value)} 
          />
        <TextField label="Twitter ID" value={twitterId}
          onChange={(e) => setTwitterId(e.target.value)} 
          />
        <TextField label="Isnta ID" value={instaId}
          onChange={(e) => setInstaId(e.target.value)} 
        />
        <TextField label="ステージID" value={stageId}
          onChange={(e) => setStageId(e.target.value)} 
        />
      </div>
      <Button onClick={updateSectionData}>更新</Button>
      <Button onClick={handleReturnClick}>戻る</Button>
    </>
  )
}

export default ArtistEditAdmin