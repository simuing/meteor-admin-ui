import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { INSApproval } from '../type/INSApproval';

export const NSApprovalCollection = new Mongo.Collection<INSApproval>('nsApprovals');

Meteor.methods({
    initNSApproval: function() {
      console.info('[INFO] NSApproval data init')
      // NSApprovalCollection.remove({});
    },
    insertNSApproval: function (appr: INSApproval) {
      NSApprovalCollection.insert({ ...appr });
    },
    removeNSApproval: function (id: string) {
      // NSApprovalCollection.update({id: id}, );
    }
});
