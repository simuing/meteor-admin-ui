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
    insert: function (name: string, contents: string) {
        GuestBookCollection.insert({ name, contents, createdAt: new Date() });
    },
    remove: function (id: string) {
        GuestBookCollection.remove(id);
    }
}

// object에 함수 속성 세팅 ?
export const GuestBookAPI2 = {
  this.insert = function(name: string, contents: string) {
    GuestBookCollection.insert({ name, contents, createdAt: new Date() });
  },
  this.remove = function(id: string) {
    GuestBookCollection.remove(id);
  }
}