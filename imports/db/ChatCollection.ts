import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Chat } from './common/IChat';

export const ChatCollection = new Mongo.Collection<Chat>('chats');

Meteor.methods({
    initChat: function() {
        console.info('[INFO] Chat data init')
        ChatCollection.remove({});
    },
    insertChat: function (color: string, name: string, contents: string) {
        ChatCollection.insert({ color, name, contents, createdAt: new Date() });
    },
    removeChat: function (id: string) {
        ChatCollection.remove(id);
    }
});
