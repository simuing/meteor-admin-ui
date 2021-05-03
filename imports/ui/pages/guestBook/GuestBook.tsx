import React from 'react';
import { GuestBookForm } from "./GuestBookForm";
import { GuestBookInfo } from "./GuestBookInfo";

export const GuestBook = () => {
    return (
        <>
            <h3 className="page-subtitle">방명록 등록</h3>
            <GuestBookForm></GuestBookForm>
            <h3 className="page-subtitle">방명록 목록</h3>
            <GuestBookInfo></GuestBookInfo>
        </>
    )
}