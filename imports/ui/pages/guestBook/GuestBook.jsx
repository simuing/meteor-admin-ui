import React from 'react';
import { GuestBookForm } from "./GuestBookForm";
import { GuestBookInfo } from "./GuestBookInfo";

export const GuestBook = () => {
    return (
        <div id="sz-guest-book">
            <h1>방명록</h1>
            <p>방명록 등록하기</p>
            <GuestBookForm></GuestBookForm>
            <p>방명록 목록</p>
            <GuestBookInfo></GuestBookInfo>
        </div>
    )
}