import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IChat } from '../type/IChat';

export const ChatCollection = new Mongo.Collection<IChat>('chats');

Meteor.methods({
    initChat: function(name: string) {
        console.info('[INFO] Chat data init')
        ChatCollection.remove({});
        Meteor.call('insertLog', {db: 'chats', log:'[LOG] 채팅 내용이 일괄 삭제되었습니다. ('+name+')님이 삭제'});
    },
    insertChat: function (color: string, name: string, contents: string) {
        ChatCollection.insert({ color, name, contents, createdAt: new Date() });
    },
    removeChat: function (id: string) {
        ChatCollection.remove(id);
        Meteor.call('insertLog', {db: 'chats', log:'[LOG] ' + id + '가 삭제되었습니다.'});
    },
    removeUserChat: function (name: string) {
        if(name) {
            ChatCollection.remove({'name': name});
            Meteor.call('insertLog', {db: 'chats', log:'[LOG] ' + name + '님의 채팅 내용이 일괄 삭제되었습니다.'});
        }
    }
});
