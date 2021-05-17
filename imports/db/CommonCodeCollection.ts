import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ICommonCode } from '../type/ICommonCode';

export const CommonCodeCollection = new Mongo.Collection<ICommonCode>('commonCodes');

Meteor.methods({
    initCommonCode: function() {
      console.info('[INFO] CommonCode data init')
      // CommonCodeCollection.remove({});
      // Meteor.call('insertCommonCode', applyLocation);
      // Meteor.call('insertCommonCode', approvalStatus);
    },
    insertCommonCode: function (appr: ICommonCode) {
      CommonCodeCollection.insert({ ...appr });
    },
    removeCommonCode: function (id: string) {
      // CommonCodeCollection.update({id: id}, );
    }
});




