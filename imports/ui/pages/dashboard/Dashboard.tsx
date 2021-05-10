import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'

export const Dashboard = () => {
    useEffect(()=>{
        // const xhr = new XMLHttpRequest();
        // xhr.open('GET', 'http://172.17.6.50:4001/');
        // xhr.setRequestHeader('Content-Type', 'application/xml');
        // xhr.send('<person><name>Arun</name></person>');
    },[]);
    
    return (
        <>
            <div id="sz-dashboard">
                <Link to="/chat" className="dashboard-card">채팅하러 가기~!</Link>
                <Link to="/board" className="dashboard-card">자유게시판 바로가기</Link>
                <Link to="/guestbook" className="dashboard-card">방명록 쓰기~!</Link>
                <Link to="/study/typescript" className="dashboard-card">타입스크립트 Study</Link>
            </div>
        </>
    )
}
