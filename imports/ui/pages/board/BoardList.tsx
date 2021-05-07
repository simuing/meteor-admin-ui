import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BoardCollection } from '/imports/db/BoardCollection';
import { IBoard } from '/imports/db/common/IBoard';
import { Meteor } from 'meteor/meteor';

export const BoardList = () => {
  const boards = useTracker(() => {
    return BoardCollection.find().fetch();
  });

  const onClickDelete = (guestBook: IBoard) => {
    if(guestBook._id) {
      Meteor.call('removeGuestBook', guestBook._id);
    }
  }

  const makeBoardList = (board: IBoard) => {
    return (
      <li key={board._id}>
        <span>id: {board._id}</span>
        <div className="sz-board-head cm-d-block cm-text-right">
          <button className="btn-remove" type="button" onClick={()=>onClickDelete(board)} >X</button>
        </div>
        <div className="sz-board-body">
          <p>작성자: {board.name ? board.name : ''}</p>
          <p>내용: {board.contents ? board.contents : ''}</p>
        </div>
        <div className="sz-board-footer cm-d-block cm-text-right">
          <button className="btn-move" type="button">=</button>
        </div>
      </li>
    );
  }

  return (
    <div id="sz-board-list">
      <ul>{boards.map(makeBoardList)}</ul>
    </div>
  );
};
