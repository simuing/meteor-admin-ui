import {Meteor} from 'meteor/meteor';
import {UserCollection} from '/imports/db/UserCollection';
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

    // - MyPage.tsx
    Meteor.publish('getUser', (id: string, pw: string) => {
      return UserCollection.find({id: id, pw: pw});
    });
    // - BoardList.tsx
    Meteor.publish('getBoards', () => {
      return BoardCollection.find({});
    });
    // - BoardList.tsx
    Meteor.publish('getGuestBooks', () => {
      return GuestBookCollection.find({});
    });
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

