import React from 'react';
import { GuestBookForm } from "./GuestBookForm";
import { GuestBookInfo } from "./GuestBookInfo";

export const GuestBook = () => {
    return (
        <div>
            <h1 className="page-title">방명록</h1>
            <h3 className="page-subtitle">방명록 등록</h3>
            <GuestBookForm></GuestBookForm>
            <h3 className="page-subtitle">방명록 목록</h3>
            <GuestBookInfo></GuestBookInfo>
        </div>
    )
}