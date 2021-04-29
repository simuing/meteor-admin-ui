import { Mongo } from 'meteor/mongo';

/*
    메뉴 코드 약어 설명
    MN : Menu Code
        &>00 : Menu Code Group
        &>DB : Dashboard
        &>MP : Mypage
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
        createdAt: new Date()
    },
    {
        menucd: 'MNDB00',
        menuup: 'MN0000',
        menunm:  'GuestBook',
        url:  '/guestbook',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        createdAt: new Date()
    },
    {
        menucd: 'MNDB00',
        menuup: 'MN0000',
        menunm:  'Mypage',
        url:  '/mypage',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        createdAt: new Date()
    },
]

export const MenuCollection = new Mongo.Collection<Menu>('menu');

export const MenuAPI = {
    init: function() {
        console.info('[INFO] Menu data init')
        defaultMenu.forEach(menu => {
            MenuCollection.insert({ ...menu });
        });
    },
    insert: function(menu: Menu) {
        console.info('[INFO] Menu data insert', menu)
        MenuCollection.insert({ ...menu });
    },
    remove: function(id: string) {
        console.info('[INFO] Menu data remove', id)
        MenuCollection.remove(id);
    }
}