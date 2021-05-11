import { Meteor } from 'meteor/meteor';
import { UserCollection } from '/imports/db/UserCollection';
import { LogCollection } from '/imports/db/LogCollection';
import { ChatCollection } from '/imports/db/ChatCollection';
import { BoardCollection } from '/imports/db/BoardCollection';
import { GuestBookCollection } from '/imports/db/GuestBookCollection';
import { MenuCollection } from '/imports/db/MenuCollection';
import '/imports/methods/GlobalMeteorMethods.ts';

Meteor.startup(() => {
  console.log('[LOG] Meteor Restart');

  // gueat book data set
  if (MenuCollection.find().count() === 0) {
    Meteor.call('initMenu');
  } else {
    // Meteor.call('initMenu');
  }

  if(Meteor.isServer) {
    // console.info('[INFO] user cnt: ' + UserCollection.find().count())
    // console.info('[INFO] board cnt: ' + BoardCollection.find().count())
    // console.info('[INFO] guest cnt: ' + GuestBookCollection.find().count())
    // console.info('[INFO] menu cnt: ' + MenuCollection.find().count())
    // console.info('[INFO] chat cnt: ' + ChatCollection.find().count())
    // console.info('[INFO] log cnt: ' + LogCollection.find().count())

    // Meteor.publish('getDashboardData', () => {
    //   const cntData = {
    //     userCnt: UserCollection.find().count(),
    //     boardCnt: BoardCollection.find().count(),
    //     guestbookCnt: GuestBookCollection.find().count(),
    //     menuCnt: MenuCollection.find().count(),
    //     chatCnt: ChatCollection.find().count(),
    //     logCnt: LogCollection.find().count(),
    //   }
    //   return cntData;
    // })

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