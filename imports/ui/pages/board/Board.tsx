import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BoardList } from "./BoardList";

export const Board = () => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [name, setName] = useState('');

    const onSubmitSerch = (e) => {
        e.preventDefault();
        console.log('search');
        
    }

    const onChangeInput = (type: string, val: string) => {
        switch (type) {
            case 'title': setTitle(val);break;
            case 'contents': setContents(val);break;
            case 'name': setName(val);break;
            default:
                break;
        };
    }

    return (
        <div>
            <h1 className="page-title">자유게시판</h1>
            <h3 className="page-subtitle">자유게시판 검색</h3>
            <div className="page-search">
                <form onSubmit={(e)=>onSubmitSerch(e)}>
                    <div className="page-search-btn">
                        <button type="submit" className="btn-default">조회</button>
                        <button type="button" className="btn-default">초기화</button>
                    </div>
                    <div className="page-search-form">
                        <div className="search-form-input">
                            <div className="cm-d-i-block cm-w-100px">공지제목</div>
                            <input type="text" name="title" className="cm-w-70p" value={title} onChange={(e)=>onChangeInput('title',e.target.value)}/>
                        </div>
                        <div className="search-form-input">
                            <div className="cm-d-i-block cm-w-100px">공지내용</div>
                            <input type="text" name="contents" className="cm-w-70p" value={contents} onChange={(e)=>onChangeInput('contents',e.target.value)}/>
                        </div>
                        <div className="search-form-input">
                            <div className="cm-d-i-block cm-w-100px">작성자</div>
                            <input type="text" name="name" className="cm-w-20p" value={name} onChange={(e)=>onChangeInput('name',e.target.value)}/>
                        </div>
                    </div>
                </form>
            </div>

            <h3 className="page-subtitle">공지사항 목록</h3>
            <div className="page-list-btn">
                <Link to="/board/insert" className="btn-default">등록</Link>
            </div>
            <div className="page-list">
                <BoardList></BoardList>
            </div>
        </div>
    )
}