import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkLine } from "react-icons/ri";

// import { UserCollection } from '/imports/db/UserCollection';
// import { LogCollection } from '/imports/db/LogCollection';
// import { ChatCollection } from '/imports/db/ChatCollection';
// import { BoardCollection } from '/imports/db/BoardCollection';
// import { GuestBookCollection } from '/imports/db/GuestBookCollection';
// import { MenuCollection } from '/imports/db/MenuCollection';
// import { useTracker } from 'meteor/react-meteor-data';

export const Dashboard = () => {
    const [nickName, setNickName] = useState(localStorage.getItem('nickname'));
    
    // const dashboardData = useTracker(() => {
    //     const handles = Meteor.subscribe('getDashboardData');
    //     const loading = !handles.ready();

    //     const cntData = {
    //         userCnt: UserCollection.find().count(),
    //         boardCnt: BoardCollection.find().count(),
    //         guestbookCnt: GuestBookCollection.find().count(),
    //         menuCnt: MenuCollection.find().count(),
    //         chatCnt: ChatCollection.find().count(),
    //         logCnt: LogCollection.find().count(),
    //     }
    //     console.log('loading', loading)
    //     console.log('cntData', cntData)
    // });

    useEffect(()=>{
        // console.log(dashboardData)
    },[]);
    
    return (
        <>
            <div id="ma-dashboard">
                <h1 className="page-title">
                    {nickName && `${nickName} 님 안녕하세요!` }
                </h1>

                <h3 className="page-subtitle">바로가기</h3>
                <div className="dashboard-card">
                    <Link to="/chat" >
                        채팅방 <RiExternalLinkLine />
                    </Link>
                    <Link to="/board" >
                        공지사항 <RiExternalLinkLine />
                    </Link>
                    <Link to="/guestbook" >
                        방명록 <RiExternalLinkLine />
                    </Link>
                    <Link to="/mypage" >
                        마이페이지 <RiExternalLinkLine />
                    </Link>
                </div>

                <h3 className="page-subtitle">데이터 현황</h3>
                <div className="dashboard-chart">
                    <div className="dashboard-chart-cnt">
                        <p>0</p>
                        <span>user</span>
                    </div>
                    <div className="dashboard-chart-cnt">
                        <p>7</p>
                        <span>board</span>
                    </div>
                    <div className="dashboard-chart-cnt">
                        <p>1</p>
                        <span>guest</span>
                    </div>
                    <div className="dashboard-chart-cnt">
                        <p>6</p>
                        <span>menu</span>
                    </div>
                    <div className="dashboard-chart-cnt">
                        <p>2</p>
                        <span>chat</span>
                    </div>
                    <div className="dashboard-chart-cnt">
                        <p>4</p>
                        <span>log</span>
                    </div>
                </div>
            </div>
        </>
    )
}
