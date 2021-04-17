import { Mongo } from 'meteor/mongo';

export interface GuestBook {
    _id?: string;
    name: string;
    contents: string;
    createdAt: Date;
}

export const GuestBookCollection = new Mongo.Collection<GuestBook>('guestBooks');

export const GuestBookAPI = {
    insert: function (name: string, contents: string) {
        GuestBookCollection.insert({ name, contents, createdAt: new Date() });
    },
    remove: function (id: string) {
        GuestBookCollection.remove(id);
    }
}