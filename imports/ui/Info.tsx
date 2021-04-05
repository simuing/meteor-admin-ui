import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection, Link } from '../api/links';

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  const onClickDelete = () => {
  }

  const makeLink = (link: Link) => {
    return (
      <>
        <li key={link._id}>
          <button type="button" onClick={onClickDelete} >delete</button>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      </>
    );
  }

  return (
    <div>
      <ul>{links.map(makeLink)}</ul>
    </div>
  );
};
