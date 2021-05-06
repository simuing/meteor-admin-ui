import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IGuestBook } from './common/IGuestBook';

export const GuestBookCollection = new Mongo.Collection<IGuestBook>('guestBooks');

Meteor.methods({
    initGuestBook: function() {
        console.info('[INFO] GuestBook data init')
        GuestBookCollection.remove({});
    },
    insertGuestBook: function (name: string, contents: string) {
        GuestBookCollection.insert({ name, contents, createdAt: new Date() });
    },
    removeGuestBook: function (id: string) {
        GuestBookCollection.remove(id);
    }
});
