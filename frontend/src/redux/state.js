import { createSlice } from "@reduxjs/toolkit";

export const sectionOperate = createSlice({
  name: "sectionList",
  initialState:{
    value : []
  },
  reducers:{
    // この処理を作成したら自動的に内部にActionCreatorも作られる
    add:(state,section)=>{
      state.value.push(section.payload) ;
      console.log(section.payload)
    },
    remove:(state)=>{
      state.value -= 1 ;
    }
  }
})

export const {add,remove} = sectionOperate.actions;
export default sectionOperate.reducer;