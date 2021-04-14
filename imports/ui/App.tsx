import React from 'react';
import { Header } from './common/header/Header';
import { GuestBookInfo } from './common/guestBook/GuestBookInfo';
import { GuestBookForm } from './common/guestBook/GuestBookForm';

export const App = () => {
  return (  
    <>
      <Header />
      <div id="container">
        <h1>시뮝 연구소 목업중입니다</h1>
        <GuestBookForm />
        <GuestBookInfo />
      </div>
    </>
  );
}