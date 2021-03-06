import React from 'react';
import { Route, Switch } from 'react-router';
import { LoginForm } from './login/Login';
import { Chat, TypeScript } from './study';
import { MyPage } from './mypage/MyPage';
import { Dashboard } from './dashboard/Dashboard';
import { ErrorPage } from './error/ErrorPage';
import { Board } from './board/Board';
import { GuestBook } from './guestBook/GuestBook';
import { BoardForm } from './board/BoardForm';
import { Notice } from './notice/Notice';
import { NoticeForm } from './notice/NoticeForm';

export const Pages = () => {
    const handleTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    return (
        <div id="ma-pages">
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/login" component={LoginForm}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/guestbook" component={GuestBook}/>
                <Route exact path="/board" component={Board}/>
                <Route exact path="/board/insert" component={BoardForm}/>
                <Route exact path="/notice" component={Notice}/>
                <Route exact path="/notice/insert" component={NoticeForm}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/mypage" component={MyPage}/>
                <Route exact path="/study" component={TypeScript}/>
                <Route exact path="/study/typescript" component={TypeScript}/>
                <Route path="" component={()=>ErrorPage("404")}/>
            </Switch>

            <div id="ma-btn-gotop" onClick={handleTop}>TOP</div>
        </div>
    )
}