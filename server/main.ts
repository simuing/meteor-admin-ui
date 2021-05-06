import { Meteor } from 'meteor/meteor';
import { ChatCollection } from '/imports/db/ChatCollection';
import { GuestBookCollection } from '/imports/db/GuestBookCollection';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';
import '/imports/methods/GlobalMeteorMethods.ts';

Meteor.startup(() => {
  // gueat book data set
  // if (GuestBookCollection.find().count() === 0) {
  //   for(let i=0; i<10; i++) {
  //     GuestBookAPI.insert('username'+i,'asdfasdfdsasdFsaf'+i);
  //   }
  // } 

  // // menu data set
  // if (MenuCollection.find().count() === 0) {
  //   MenuAPI.init();
  // } else {
  //   //Nothing
  // }
  // // menu data set
  // if (ChatCollection.find().count() === 0) {
   
  // } else {
  //   //Nothing
  // }

  console.log('[LOG] Meteor Restart');
  console.info('[INFO] guest cnt: ' + GuestBookCollection.find().count())
  console.info('[INFO] menu cnt: ' + MenuCollection.find().count())
  console.info('[INFO] menu cnt: ' + ChatCollection.find().count())

  // 쿠키
  // const nick = Meteor.call('getCookie', 'nickname');
  // console.log(nick);
  // console.log(document.cookie);
});