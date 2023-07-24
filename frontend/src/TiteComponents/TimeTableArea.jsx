import React from 'react'
import StageArea from './StageArea'
import '../styles/custom.css';

const TimeTableArea = ({stages,sections,wholeTime}) => {

  // 画面表示時にステージ毎のSectionに分ける
  const distributeSection=()=>{
    let dict = {}
    stages.map((stage) => {
      const secLis = sections.filter((sec) => sec.stage == stage.id);
      dict[stage.id] = secLis;
      }
    );
    return dict
  };
  const distributeSectionDict = distributeSection();

  return (
    <div className="flex">
      {stages.map((stage) => 
        <StageArea 
          stageInfo={stage} 
          sections={distributeSectionDict[stage.id]} 
          wholeTime={wholeTime}
          key={stage.id}
        />
      )}
    </div>
  )
}

export default TimeTableArea