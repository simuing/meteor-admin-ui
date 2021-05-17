import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
// import { check } from 'meteor/check';

export const NoticeForm = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    Meteor.call('insertBoard', name, contents)
  }

  const onInputChange = (type: string, value: string) => {
    switch (type) {
      case 'name': setName(value); break;
      case 'title': setTitle(value); break;
      case 'contents': setContents(value); break;
      default: break;
    }
  }

  return (
    <form onSubmit={onSubmit} className="cm-form">
      
      <div className="cm-d-i-block">
        <div className="cm-w-150px">작성자</div>
        <input id="name" className="cm-w-200px" name="name" type="text" 
          value={name} 
          placeholder="작성자명" 
          onChange={e => onInputChange('name', e.target.value)}/>
      </div>

      <div className="cm-d-i-block">
        <div className="cm-w-150px">제목</div>
        <input id="contents" className="cm-w-200px" name="contents" type="text" 
          value={title} 
          placeholder="방명록 내용" 
          onChange={e => onInputChange('title', e.target.value)}/>
      </div>

      <div className="cm-d-i-block">
        <div className="cm-w-150px">내용</div>
        <input id="contents" className="cm-w-200px" name="contents" type="text" 
          value={contents} 
          placeholder="방명록 내용" 
          onChange={e => onInputChange('contents', e.target.value)}/>
      </div>

      <div className="cm-d-block">
        <button type="submit" className="btn-insert cm-w-200px">insert</button>
      </div>
    </form>
  );
};
