import React from 'react';
import { Router } from 'react-router';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { createBrowserHistory } from 'history';
import '../assets/scss/styles.scss';
import '/imports/methods/GlobalMeteorMethods.ts'

// route components
import { Header } from './components/header/Header';
import { LeftMenu } from './components/leftMenu/LeftMenu';
import { Footer } from './components/footer/Footer';
import { Pages } from '../ui/pages/Pages';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => {
  // console.log('render renderRoutes');
  // console.log(browserHistory);

  return (
    <React.StrictMode>
      <RecoilRoot >
        <Router history={browserHistory}>
          <div id="ma-container-outer">
            <LeftMenu />
            <div id="ma-container-inner">
              <Header />
              <Pages />
              {/* <Footer /> */}
            </div>
          </div>
        </Router>
      </RecoilRoot>
    </React.StrictMode>
  )
}