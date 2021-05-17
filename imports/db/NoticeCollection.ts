import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { INotice } from './common/INotice';

export const NoticeCollection = new Mongo.Collection<INotice>('notices');

Meteor.methods({
    initNotice: function() {
        console.info('[INFO] Notice data init')
        NoticeCollection.remove({});
    },
    insertNotice: function (name: string, contents: string) {
        NoticeCollection.insert({ name, contents, createdAt: new Date() });
    },
    removeNotice: function (id: string) {
        NoticeCollection.remove(id);
    }
});
