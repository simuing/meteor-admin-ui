import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { ILog } from '../type/ILog';

export const LogCollection = new Mongo.Collection<ILog>('systemlogs');

Meteor.methods({
    initLog: function() {
        console.info('[INFO] Log data init')
        LogCollection.remove({});
    },
    insertLog: function(log: ILog) {
        console.info('[INFO] Log data insert', log);
        LogCollection.insert({ ...log });
    },
    removeLog: function(id: string) {
        console.info('[INFO] Log data remove', id)
        LogCollection.remove(id);
    }
});