import React from 'react';
import _ from 'underscore';
import { useTracker } from 'meteor/react-meteor-data';
import { GuestBookCollection, GuestBook, GuestBookAPI } from '../../../db/GuestBookCollection';

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
      <>
        <li key={guestBook._id}>
          <p>작성자: {guestBook.name ? guestBook.name : ''}</p>
          <p>내용: {guestBook.contents ? guestBook.contents : ''}</p>
          <button type="button" onClick={()=>onClickDelete(guestBook)} >방명록 삭제</button>
        </li>
      </>
    );
  }

  return (
    <div>
      <ul>{guestBooks.map(makeGuestBook)}</ul>
    </div>
  );
};
