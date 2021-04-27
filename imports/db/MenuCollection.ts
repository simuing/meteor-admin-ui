import { Mongo } from 'meteor/mongo';

/*
    메뉴 코드 약어 설명
    MN : Menu Code
        &>00 : Menu Code Group
        &>DB : Dashboard
        &>MP : Mypage
        &>GB : Guestbook
            &>00 : Menu Code (00~99)
 */

const defaultMenu = {
    menucd: 'MNDB00',
    menuup: 'MN0000',
    menunm:  'GuestBook',
    url:  '/guestbook',
    menulv:  '1',
    menugb:  'G',
    menuor:  '1',
    createdAt: '20210427';
}

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