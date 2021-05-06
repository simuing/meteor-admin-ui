import { Meteor } from 'meteor/meteor';
import { ChatCollection } from '/imports/db/ChatCollection';
import { GuestBookCollection } from '/imports/db/GuestBookCollection';
import { MenuCollection } from '/imports/db/MenuCollection';
import '/imports/methods/GlobalMeteorMethods.ts';

Meteor.startup(() => {
  // gueat book data set
  if (MenuCollection.find().count() === 0) {
    Meteor.call('initMenu');
  } 

  console.log('[LOG] Meteor Restart');

  if(Meteor.isServer) {
    // Meteor.call('initMenu');
    console.info('[INFO] guest cnt: ' + GuestBookCollection.find().count())
    console.info('[INFO] menu cnt: ' + MenuCollection.find().count())
    console.info('[INFO] chat cnt: ' + ChatCollection.find().count())
  }
});