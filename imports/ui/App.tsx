import React from 'react';
import { Header } from '../../src/common/header/Header';
import { Info } from './Info';

export const App = () => {

  // meteor mongoDB insert
  const onClickInsertBtn = () => {
    console.log('onClickInsertBtn');
  }

  return (  
    <>
      <Header />
      <div id="container">
        <h1>시뮝 연구소 목업중입니다</h1>
        <div>
          <input type="text" value="" placeholder="링크 제목을 입력하세요." />
          <input type="text" value="링크 주소를 입력하세요." />
          <button type="button" onClick={onClickInsertBtn} >insert</button>
        </div>
        <Info />
      </div>
    </>
  );
}