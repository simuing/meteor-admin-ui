import React from 'react';
import { GuestBookForm } from "./GuestBookForm";
import { GuestBookInfo } from "./GuestBookInfo";

export const GuestBook = () => {
    return (
        <>
            <GuestBookForm></GuestBookForm>
            <GuestBookInfo></GuestBookInfo>
        </>
    )
}