import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

/*
    메뉴 코드 약어 설명
    MN : Menu Code
        &>00 : Menu Code Group
        &>DB : Dashboard
        &>ST : Study
        &>GB : Guestbook
            &>00 : Menu Code (00~99)
    create date : 2021.04
    update date : 2021.04.29
 */
export interface Menu {
    _id?: string;
    menucd: string;
    menuup: string;
    menunm: string;
    url: string;
    menulv: string;
    menugb: string;
    menuor: string;
    view: string; // Y or N
    createdAt: Date;
}

export const defaultMenu: Array<Menu> = [
    {
        menucd: 'MNDB00',
        menuup: 'MN0000',
        menunm:  'Dashboard',
        url:  '/dashboard',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        view: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNGB00',
        menuup: 'MN0000',
        menunm:  'GuestBook',
        url:  '/guestbook',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        view: 'N',
        createdAt: new Date()
    },
    {
        menucd: 'MNST00',
        menuup: 'MN0000',
        menunm:  'study',
        url:  '/study',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        view: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNST01',
        menuup: 'MNST00',
        menunm:  'typescript',
        url:  '/study/typescript',
        menulv:  '2',
        menugb:  'G',
        menuor:  '1',
        view: 'Y',
        createdAt: new Date()
    },
]

export const MenuCollection = new Mongo.Collection<Menu>('menu');

/* 메뉴 API 정의 방법  */
// 1. 변수로 선언 -> MenuAPI를 import하는 화면에만 로드된다.
export const MenuAPI = {
    init: function() {
        console.info('[INFO] Menu data init')
        MenuCollection.remove({});
        defaultMenu.forEach(menu => {
            MenuCollection.insert({ ...menu });
        });
    },
    insert: function(menu: Menu) {
        console.info('[INFO] Menu data insert', menu);
        MenuCollection.insert({ ...menu });
    },
    remove: function(id: string) {
        console.info('[INFO] Menu data remove', id)
        MenuCollection.remove(id);
    }
}

// 2. Meteor.methods({})에 선언 -> 
Meteor.methods({
    MenuInit: function() {
        console.info('[INFO] Menu data init')
        MenuCollection.remove({});
        defaultMenu.forEach(menu => {
            MenuCollection.insert({ ...menu });
        });
    },
    MenuInsert: function(menu: Menu) {
        console.info('[INFO] Menu data insert', menu);
        MenuCollection.insert({ ...menu });
    },
    MenuRemove: function(id: string) {
        console.info('[INFO] Menu data remove', id)
        MenuCollection.remove(id);
    }
});
