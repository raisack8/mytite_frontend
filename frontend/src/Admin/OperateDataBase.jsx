import React from 'react'
import Button from '@mui/material/Button';

const OperateDataBase = () => {
  return (
    <div>
      テキストボックスでモデル一覧を作成。
      選択したらAPIに走る。

      と同時に画面側でDBのカラム入力用のテキストボックス、
      デリートボタン、
      データ一覧(最大100件？)を表示

      データ一覧に編集ボタンがついており、
      それを押すとデータ編集コンボボックスが出てくる。
    </div>
  )
}

export default OperateDataBase