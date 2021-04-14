import { Meteor } from 'meteor/meteor';
import { GuestBookCollection, GuestBookAPI } from '/imports/db/GuestBookCollection';

// function insertLink(name: string, contents: string) {
//   GuestBookCollection.insert({ name, contents, createdAt: new Date() });
// }

// function deleteLink(name: string, contents: string) {
//   GuestBookCollection.insert({ name, contents, createdAt: new Date() });
// }

Meteor.startup(() => {
  if (GuestBookCollection.find().count() === 0) {
    GuestBookAPI.insert('username1','asdfasdfdsasdFsaf');
    GuestBookAPI.insert('username2','asdfasdfdsasdFsaf');
    GuestBookAPI.insert('username3','asdfasdfdsasdFsaf');
    GuestBookAPI.insert('username4','asdfasdfdsasdFsaf'); 
  } 
});