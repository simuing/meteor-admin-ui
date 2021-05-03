import { Mongo } from 'meteor/mongo';

export interface GuestBook {
    _id?: string;
    name: string;
    contents: string;
    createdAt: Date;
}

export const GuestBookCollection = new Mongo.Collection<GuestBook>('guestBooks');

// object 속성에 함수 세팅 ?
export const GuestBookAPI = {
    init: function() {
        GuestBookCollection.remove({}); // all delete
    },
    insert: function (name: string, contents: string) {
        GuestBookCollection.insert({ name, contents, createdAt: new Date() });
    },
    remove: function (id: string) {
        GuestBookCollection.remove(id);
    }
}


// 2. Meteor.methods({})에 선언 -> 
Meteor.methods({
    GuestBookInit: function() {
        console.info('[INFO] GuestBook data init')
        GuestBookCollection.remove({});
    },
    GuestBookInsert: function (name: string, contents: string) {
        GuestBookCollection.insert({ name, contents, createdAt: new Date() });
    },
    GuestBookRemove: function (id: string) {
        GuestBookCollection.remove(id);
    }
});
