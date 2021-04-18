import React, { useState } from 'react';
import { GuestBookAPI } from '/imports/db/GuestBookCollection';

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
    GuestBookAPI.insert(name, contents);
  }

  const onNameChange = (value) => {
    setName(value);
  }
  const onContentsChange = (value) => {
    setContents(value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input id="name" name="name" type="text" value={name} placeholder="작성자를 입력하세요." 
        onChange={e => onNameChange(e.target.value)}/>
      <input id="contents" name="contents" type="text" value={contents} placeholder="방명록을 입력하세요." 
        onChange={e => onContentsChange(e.target.value)}/>
      <button type="submit" >insert</button>
    </form>
  );
};
