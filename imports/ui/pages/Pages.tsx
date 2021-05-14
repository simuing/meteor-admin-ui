import React from 'react';
import { Route, Switch } from 'react-router';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { ErrorPage } from '../pages/error/ErrorPage';
import { Board } from '../pages/board/Board';
import { GuestBook } from '../pages/guestBook/GuestBook';
import { MyPage } from '../pages/mypage/MyPage';
import { TypeScript } from '../pages/study/typescript/TypeScript';
import { Chat } from '../pages/study/chat/Chat';
import { LoginForm } from '../login/Login';
import { BoardForm } from './board/BoardForm';

export const Pages = () => {
    return (
        <div id="ma-pages">
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/guestbook" component={GuestBook}/>
                <Route exact path="/board" component={Board}/>
                <Route exact path="/board/insert" component={BoardForm}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/mypage" component={MyPage}/>
                <Route exact path="/study" component={TypeScript}/>
                <Route exact path="/study/typescript" component={TypeScript}/>
                <Route path="" component={()=>ErrorPage("404")}/>
            </Switch>
        </div>
    )
}