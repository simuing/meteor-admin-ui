import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ISimpleApproval } from '../type/ISimpleApproval';

export const SimpleApprovalCollection = new Mongo.Collection<ISimpleApproval>('simpleApprovals');

Meteor.methods({
    initSimpleApproval: function() {
      console.info('[INFO] SimpleApproval data init')
      // SimpleApprovalCollection.remove({});
    },
    insertSimpleApproval: function (appr: ISimpleApproval) {
      SimpleApprovalCollection.insert({ ...appr });
    },
    removeSimpleApproval: function (id: string) {
      // SimpleApprovalCollection.update({id: id}, );
    }
});
