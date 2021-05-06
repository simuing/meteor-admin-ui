import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import '../assets/scss/styles.scss';

// route components
import { Header } from '../ui/common/header/Header';
import { LeftMenu } from '../ui/common/leftMenu/LeftMenu';
import { Footer } from '../ui/common/footer/Footer';

import { Dashboard } from '../ui/pages/dashboard/Dashboard';
import { ErrorPage } from '../ui/pages/error/ErrorPage';
import { GuestBook } from '../ui/pages/guestBook/GuestBook';
import { TypeScript } from '../ui/pages/study/typescript/TypeScript';
import { Chat } from '../ui/pages/study/chat/Chat';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => {
  // console.log('render renderRoutes');
  // console.log(browserHistory);

  return (
    <React.StrictMode>
      <Router history={browserHistory}>
        <div id="sz-container">
          <Header />
          <div id="sz-contents">
            <LeftMenu />
            {/* <Pages /> */}
            <div id="sz-pages">
              <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/guestbook" component={GuestBook}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/study/typescript" component={TypeScript}/>
                <Route path="" component={()=>ErrorPage("404")}/>
              </Switch>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </React.StrictMode>
  )
}