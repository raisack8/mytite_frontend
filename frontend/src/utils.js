// export const  createTimeList=(startTime, endTime)=> {
//   const timeList = [];
//   let currentTime = new Date(startTime);

//   while (currentTime <= endTime) {
//     const hour = currentTime.getHours().toString().padStart(2, '0');
//     const minutes = currentTime.getMinutes().toString().padStart(2, '0');
//     const timeString = `${hour}:${minutes}`;

//     timeList.push({ time: timeString, flag: false });

//     currentTime.setMinutes(currentTime.getMinutes() + 5);
//   }

//   return timeList;
// }
export const wholeTime = {
  "start":new Date('1899-12-30T09:00:00'),
  "end":new Date('1899-12-30T21:30:00'),
}

export const timeConvert=(timeDt)=>{
  const hour = timeDt.getHours().toString().padStart(2, '0');
  const minutes = timeDt.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minutes}`;
}

export const localStorageReset=()=>{
  localStorage.removeItem('orgMySectionList');
  localStorage.removeItem('orgSectionList');
  localStorage.removeItem('displayedSectionList');
}
