import React from 'react';
import { GuestBook } from './guestBook/GuestBook';

export const Pages = () => {
    // TODO CODE 헤더 텍스트 동적 출력(현재메뉴명)
    return (
        <div id="sz-pages">
            <h1 className="page-title">방명록</h1>
            <GuestBook />
        </div>
    )
}