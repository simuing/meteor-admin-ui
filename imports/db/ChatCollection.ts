import { Mongo } from 'meteor/mongo';

export interface Chat {
    _id?: string;
    color: string; //ex) #FFFFFF
    name: string;
    contents: string;
    createdAt: Date;
}

export const ChatCollection = new Mongo.Collection<Chat>('chats');

Meteor.methods({
    ChatInit: function() {
        console.info('[INFO] Chat data init')
        ChatCollection.remove({});
    },
    ChatInsert: function (color: string, name: string, contents: string) {
        ChatCollection.insert({ color, name, contents, createdAt: new Date() });
    },
    ChatRemove: function (id: string) {
        ChatCollection.remove(id);
    }
});
