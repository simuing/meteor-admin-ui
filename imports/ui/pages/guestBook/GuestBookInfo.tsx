import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { GuestBookCollection } from '/imports/db/GuestBookCollection';
import { IGuestBook } from '/imports/db/common/IGuestBook';
import { Meteor } from 'meteor/meteor';

export const GuestBookInfo = () => {
  const guestBooks: IGuestBook[] = useTracker(() => {
    const handles = Meteor.subscribe('getGuestBooks');
    const loading = !handles.ready();
    const list = GuestBookCollection.find().fetch()
    // console.log('loading', loading)
    // console.log('list', list)
    return GuestBookCollection.find().fetch();
  });

  // const guestBooks = useTracker(() => {
  //   return GuestBookCollection.find().fetch();
  // });

  const onClickDelete = (guestBook: IGuestBook) => {
    if(guestBook._id) {
      Meteor.call('removeGuestBook', guestBook._id);
    }
  }

  const makeGuestBook = (guestBook: IGuestBook) => {
    return (
      <li key={guestBook._id}>
        <span>id: {guestBook._id}</span>
        <div className="ma-guestbook-head cm-d-block cm-text-right">
          <button className="btn-remove" type="button" onClick={()=>onClickDelete(guestBook)} >X</button>
        </div>
        <div className="ma-guestbook-body">
          <p>작성자: {guestBook.name ? guestBook.name : ''}</p>
          <p>내용: {guestBook.contents ? guestBook.contents : ''}</p>
        </div>
        <div className="ma-guestbook-footer cm-d-block cm-text-right">
          <button className="btn-move" type="button">=</button>
        </div>
      </li>
    );
  }

  return (
    <div id="ma-guestbook-list">
      <ul>{guestBooks.map(makeGuestBook)}</ul>
    </div>
  );
};
