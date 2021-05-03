import React, { useState } from 'react';

export const GuestBookForm = () => {
  const [name, setName] = useState('');
  const [contents, setContents] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // way 1
    // let formData = new FormData(e.target);
    // console.log(formData.get('name'))
    // console.log(formData.get('contents'))
    // GuestBookAPI.insert({name: formData.get('name'), contents: formData.get('contents')})

    // way 2
    // GuestBookAPI.insert(name, contents);
    Meteor.call('GuestBookInsert', name, contents)
  }

  const onNameChange = (value) => {
    setName(value);
  }
  const onContentsChange = (value) => {
    setContents(value);
  }
  const onClickReset = () => {
    if(confirm('Are you sure?')) {
      // GuestBookAPI.init();
      Meteor.call('GuestBookInit')
    }
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
        <button type="button" className="btn-default cm-w-200px" onClick={onClickReset}>reset</button>
        <button type="submit" className="btn-insert cm-w-200px">insert</button>
      </div>
    </form>
  );
};
