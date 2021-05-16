import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getMenunm' (pathname: string) {
        const menu = Meteor.call('getMenus')
        console.log(menu)
        return pathname;
    }
});