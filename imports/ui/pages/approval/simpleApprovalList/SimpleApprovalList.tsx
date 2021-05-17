import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SimpleApprovalList = () => {
    useEffect(() => {
        console.log('[INFO] SimpleApprovalList page updated')
        return () => {
            console.log('[INFO] SimpleApprovalList page clear')
        }
    },[])

    const onSubmitSerch = (e) => {
        e.preventDefault();
        console.log('search');
    }

    return (
        <div>
            <h1 className="page-title">결재승인함</h1>

            <h3 className="page-subtitle">결재승인함 검색</h3>
            <div className="page-search">
                <form onSubmit={(e)=>onSubmitSerch(e)}>
                    <div className="page-search-btn">
                        <button type="submit" className="btn-default">조회</button>
                        <button type="button" className="btn-default">초기화</button>
                    </div>
                    <div className="page-search-form">
                        {/* <div className="search-form-input">
                            <div className="cm-d-i-block cm-w-100px">신청제목</div>
                            <input type="text" name="title" className="cm-w-70p" value={title} onChange={(e)=>onChangeInput('title',e.target.value)}/>
                        </div> */}
                    </div>
                </form>
            </div>

            <h3 className="page-subtitle">결재승인함 목록</h3>
            <div className="page-list-btn">
                <Link to="/board/insert" className="btn-default">등록</Link>
            </div>
            <div className="page-list">
                
            </div>
        </div>
    )
}
