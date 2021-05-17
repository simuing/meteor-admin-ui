import React, { useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { NoticeCollection } from '/imports/db/NoticeCollection';
import { INotice } from '/imports/db/common/INotice';
import { Meteor } from 'meteor/meteor';

const noticesTracker = () => useTracker(() => {
  const handles = Meteor.subscribe('getnotices');
  const loading = !handles.ready();
  let list: INotice[] = [];

  if(!loading) {
    list = NoticeCollection.find().fetch();
  }
  return list;
});

export const NoticeList = () => {
  const notices: INotice[] = noticesTracker();

  useEffect(() => {
    console.log('[INFO] noticeList.tsx componentDidMount');
    return () =>{
      console.log('[INFO] noticeList.tsx componentWillUnMount')
    }
  }, [])

  useEffect(() => {
    console.log('useEffect notices: ', notices);
    return () =>{
      console.log('notices clean')
    }
  }, [notices])

  const onClickDelete = (notice: INotice) => {
    if(notice._id) {
      Meteor.call('removeNotice', notice._id);
    }
  }

  const makeNoticeList = (notice: INotice) => {
    return (
      <li key={notice._id}>
        <div className="ma-notice-head cm-d-block cm-text-right">
          <button className="btn-remove" type="button" onClick={()=>onClickDelete(notice)} >X</button>
        </div>
        <div className="ma-notice-body">
          <p>작성자: {notice.name ? notice.name : ''}</p>
          <p>제목: {notice.title ? notice.title : ''}</p>
          <p>내용: {notice.contents ? notice.contents : ''}</p>
        </div>
        <div className="ma-notice-footer cm-d-block cm-text-right">
        </div>
      </li>
    );
  }

  return (
    <div id="ma-notice-list">
      <ul>{notices.map(makeNoticeList)}</ul>
    </div>
  );
};
