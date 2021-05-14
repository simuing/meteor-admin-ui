import {Meteor} from 'meteor/meteor';
import {LogCollection} from '/imports/db/LogCollection';
import {ChatCollection} from '/imports/db/ChatCollection';
import {BoardCollection} from '/imports/db/BoardCollection';
import {GuestBookCollection} from '/imports/db/GuestBookCollection';
import {MenuCollection} from '/imports/db/MenuCollection';
import '/imports/methods/GlobalMeteorMethods.ts';

import './methods';

Meteor.startup(() => {
  console.log('[LOG] Meteor Restart');

  // gueat book data set
  if (MenuCollection.find().count() === 0) {
    Meteor.call('initMenu');
  }
  if (Meteor.isServer) {
    // Meteor.call('initMenu');
    console.info('[INFO] board cnt: ' + BoardCollection.find().count())
    console.info('[INFO] guest cnt: ' + GuestBookCollection.find().count())
    console.info('[INFO] menu cnt: ' + MenuCollection.find().count())
    console.info('[INFO] chat cnt: ' + ChatCollection.find().count())
    console.info('[INFO] log cnt: ' + LogCollection.find().count())

    // - LeftMenu.tsx
    Meteor.publish('getMenus', () => {
      return MenuCollection.find({});
    });

    // useTracker test - Chat.tsx
    Meteor.publish('getChats', () => {
      return ChatCollection.find({});
    });

    // withTracker test - Chat.tsx
    Meteor.publish('getLogs', () => {
      return LogCollection.find({});
    });
  }


});
