import React from 'react';
import { Route, Switch } from 'react-router';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { ErrorPage } from '../pages/error/ErrorPage';
import { Board } from '../pages/board/Board';
import { GuestBook } from '../pages/guestBook/GuestBook';
import { TypeScript } from '../pages/study/typescript/TypeScript';
import { Chat } from '../pages/study/chat/Chat';

export const Pages = () => {
    return (
        <div id="sz-pages">
            <Switch>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/guestbook" component={GuestBook}/>
                <Route exact path="/board" component={Board}/>
                <Route exact path="/chat" component={Chat}/>
                <Route exact path="/study/typescript" component={TypeScript}/>
                <Route path="" component={()=>ErrorPage("404")}/>
            </Switch>
        </div>
    )
}