import { Meteor } from 'meteor/meteor';
import { GuestBookCollection } from '/imports/db/GuestBookCollection';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';

Meteor.startup(() => {
  // gueat book data set
  // if (GuestBookCollection.find().count() === 0) {
  //   for(let i=0; i<10; i++) {
  //     GuestBookAPI.insert('username'+i,'asdfasdfdsasdFsaf'+i);
  //   }
  // } 

  // menu data set
  if (MenuCollection.find().count() === 0) {
    MenuAPI.init();
  } else {
    //Nothing
  }

  console.log('[LOG] Meteor Restart');
  console.log('[INFO] guest cnt: ' + GuestBookCollection.find().count())
  console.log('[INFO] menu cnt: ' + MenuCollection.find().count())

});