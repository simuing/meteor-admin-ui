import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IUser } from '../type/IUser';

export const UserCollection = new Mongo.Collection<IUser>('users');

Meteor.methods({
    initUser: function() {
        console.info('[INFO] User data init')
        UserCollection.remove({});
    },
    insertUser: function (user: IUser) {
        user.createDate = new Date();
        UserCollection.insert(user);
    },
    removeUser: function (id: string) {
        UserCollection.remove(id);
    }
});
