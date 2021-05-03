import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

// route components
import { Header } from '../ui/common/header/Header';
import { LeftMenu } from '../ui/common/leftMenu/LeftMenu';
import { Footer } from '../ui/common/footer/Footer';

import { GuestBook } from '../ui/pages/guestBook/GuestBook';
import { Dashboard } from '../ui/pages/dashboard/Dashboard';
import { TypeScript } from '../ui/pages/study/typescript/TypeScript';
import '/imports/assets/scss/styles.scss';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => {
  console.log('render renderRoutes');

  return (
    <div id="sz-container">
      <Header />
      <div id="sz-contents">
        <LeftMenu />
        {/* <Pages /> */}
        <Router history={browserHistory}>
          <Switch>
            {/* <Route path="/" component={GuestBook}/> */}
            <Route exact path="/">
              <Dashboard/>
            </Route>
            <Route exact path="/guestbook" component={GuestBook}/>
            <Route exact path="/study/typescript" component={TypeScript}/>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  )
}