import React from 'react';
import { Header } from './common/header/Header';
import { GuestBook } from './common/guestBook/GuestBook';
import { LeftMenu } from './common/leftMenu/LeftMenu';
import { Footer } from './common/footer/Footer';

import '/imports/assets/scss/styles.scss'

export const App = () => {
  return (  
    <div id="container">
      <Header />
      <LeftMenu />
      <GuestBook />
      <Footer />
    </div>
  );
}