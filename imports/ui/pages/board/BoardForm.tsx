import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
// import { check } from 'meteor/check';

export const BoardForm = () => {
  const [name, setName] = useState('');
  const [contents, setContents] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    Meteor.call('insertBoard', name, contents)
  }

  const onNameChange = (value: string) => {
    setName(value);
  }
  const onContentsChange = (value: string) => {
    setContents(value);
  }

  return (
    <form onSubmit={onSubmit} className="cm-form cm-w-50p">
      
      <div className="cm-d-block">
        <div className="cm-w-150px">작성자</div>
        <input id="name" className="cm-w-200px" name="name" type="text" 
          value={name} 
          placeholder="작성자명" 
          onChange={e => onNameChange(e.target.value)}/>
      </div>

      <div className="cm-d-block">
        <div className="cm-w-150px">내용</div>
        <input id="contents" className="cm-w-200px" name="contents" type="text" 
          value={contents} 
          placeholder="방명록 내용" 
          onChange={e => onContentsChange(e.target.value)}/>
      </div>

      <div className="cm-d-block">
        <button type="submit" className="btn-insert cm-w-200px">insert</button>
      </div>
    </form>
  );
};
