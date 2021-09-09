import React, { useState } from 'react';
import useCustomHook from './hook';

function App() {
  const initList = ["Huyen", "Hoa", "Hung", "Long"];
  const [list, removeElement] = useCustomHook(initList)
  const [input, setInput] = useState("");

  const displayLists = (list) =>  {
    if (list.length === 0) return "[]";
    let result = "[";
    list.forEach(item => {
      result = result + item + ", ";
    });
    return result.substring(0, result.length-2) + "]";
  }
  
  return (
    <div className="App" style={{ padding: '40px 60px' }}>
      <p> 学生一覧：{  displayLists(initList) }</p>
      <div>
        <p> 削除値を入力してください。</p>
        <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>　
        <button onClick={() => {removeElement(input)}}>確認</button>
      </div>
      <p> 削除する名前: { input } </p>
      <p> 新しい一覧：{ displayLists(list) } </p>
    </div>
  );
}

export default App;
