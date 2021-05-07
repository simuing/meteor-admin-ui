import React from 'react';
import { BoardForm } from "./BoardForm";
import { BoardList } from "./BoardList";

export const Board = () => {
    return (
        <div>
            <h1 className="page-title">자유게시판</h1>
            <h3 className="page-subtitle">게시글 등록</h3>
            <BoardForm></BoardForm>
            <h3 className="page-subtitle">게시글 목록</h3>
            <BoardList></BoardList>
        </div>
    )
}