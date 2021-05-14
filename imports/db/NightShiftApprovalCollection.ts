import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IGuestBook } from './common/IGuestBook';

export const NightShiftApprovalCollection = new Mongo.Collection<IGuestBook>('nsApprovals');

Meteor.methods({
    initNightShiftApproval: function() {
      console.info('[INFO] NightShiftApproval data init')
      // NightShiftApprovalCollection.remove({});
    },
    insertNightShiftApproval: function (name: string, contents: string) {
      NightShiftApprovalCollection.insert({ name, contents, createdAt: new Date() });
    },
    removeNightShiftApproval: function (id: string) {
      // NightShiftApprovalCollection.update({id: id}, );
    }
});
