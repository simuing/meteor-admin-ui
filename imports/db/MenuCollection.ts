import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { defaultMenu, Menu } from './common/IMenu';

export const MenuCollection = new Mongo.Collection<Menu>('menu');

Meteor.methods({
    initMenu: function() {
        console.info('[INFO] Menu data init')
        MenuCollection.remove({});
        defaultMenu.forEach(menu => {
            MenuCollection.insert({ ...menu });
        });
    },
    insertMenu: function(menu: Menu) {
        console.info('[INFO] Menu data insert', menu);
        MenuCollection.insert({ ...menu });
    },
    removeMenu: function(id: string) {
        console.info('[INFO] Menu data remove', id)
        MenuCollection.remove(id);
    }
});