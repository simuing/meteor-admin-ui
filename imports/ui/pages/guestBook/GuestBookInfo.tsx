import React from 'react';
import _ from 'underscore';
import { useTracker } from 'meteor/react-meteor-data';
import { GuestBookCollection, GuestBook, GuestBookAPI } from '/imports/db/GuestBookCollection';

export const GuestBookInfo = () => {
  const guestBooks = useTracker(() => {
    return GuestBookCollection.find().fetch();
  });

  const onClickDelete = (guestBook: GuestBook) => {
    if(guestBook._id) {
      GuestBookAPI.remove(guestBook._id);
    }
  }

  const makeGuestBook = (guestBook: GuestBook) => {
    return (
      <li key={guestBook._id}>
        <span>id: {guestBook._id}</span>
        <div className="sz-guestbook-head cm-d-block cm-text-right">
          <button className="btn-remove" type="button" onClick={()=>onClickDelete(guestBook)} >X</button>
        </div>
        <div className="sz-guestbook-body">
          <p>작성자: {guestBook.name ? guestBook.name : ''}</p>
          <p>내용: {guestBook.contents ? guestBook.contents : ''}</p>
        </div>
        <div className="sz-guestbook-footer cm-d-block cm-text-right">
          <button className="btn-move" type="button">=</button>
        </div>
      </li>
    );
  }

  return (
    <div id="sz-guestbook-list">
      <ul>{guestBooks.map(makeGuestBook)}</ul>
    </div>
  );
};
