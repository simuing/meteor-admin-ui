import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IBoard } from './common/IBoard';

export const BoardCollection = new Mongo.Collection<IBoard>('boards');

Meteor.methods({
    initBoard: function() {
        console.info('[INFO] Board data init')
        BoardCollection.remove({});
    },
    insertBoard: function (name: string, contents: string) {
        BoardCollection.insert({ name, contents, createdAt: new Date() });
    },
    removeBoard: function (id: string) {
        BoardCollection.remove(id);
    }
});
