import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { IUser } from '/imports/type/IUser';

export const LoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const user: IUser = {id, pw, nickname}
    Meteor.call('insertUser', user)
  }

  const onInputChange = (type: string, value: string) => {
    switch (type) {
      case 'id': setId(value); break;
      case 'pw': setPw(value); break;
      default: break;
    }
  }

  return (
    <form onSubmit={onSubmit} className="cm-form">
      
      <div className="page-cards">
        <h3>로그인</h3>
      </div>
    </form>
  );
};
