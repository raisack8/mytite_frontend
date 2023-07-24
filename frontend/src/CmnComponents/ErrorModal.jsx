import React, { useState } from 'react'

const ErrorModal = (props) => {
  const [closeFlg, setCloseFlg]=useState(false);
  
  if (props.isVisibled && !closeFlg) {
    // TODO:あわよくば出現したら3秒後に閉じるようにしたい
    return (
      <div className="">
        <div id="defaultModal"
            className="fixed top-0 z-50 w-1/2 p-4 overflow-x-hidden 
                overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-2xl max-h-full">
                <div className="relative bg-red-300  border border-8 border-red-400 rounded-xl shadow">
                    <div className="flex justify-center item-center text-center p-4">
                        <h3 className="text-md font-semibold text-gray-900">
                            エラーが発生しました
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        onClick={setCloseFlg(true)}>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-slate-700">
                          {/* エラーメッセージを表示したい場合にはprops.messageに値を入れる */}
                          {props.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  return null;
};

export default ErrorModal