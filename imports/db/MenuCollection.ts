import { Mongo } from 'meteor/mongo';

export interface Menu {
    _id?: string;
    menucd: string;
    menuup: string;
    menunm: string;
    url: string;
    menulv: string;
    menugb: string;
    menuor: string;
    createdAt: Date;
}

export const MenuCollection = new Mongo.Collection<Menu>('menu');

// object 속성에 함수 세팅 ?
export const MenuAPI = {
    insert: function (menu: Menu) {
        MenuCollection.insert({ ...menu });
    },
    remove: function (id: string) {
        MenuCollection.remove(id);
    }
}