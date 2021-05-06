import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const MenuCollection = new Mongo.Collection<Menu>('menu');

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
    showyn: string; // Y or N
    createdAt: Date;
    children?: Array<Menu>;
}

export const defaultMenu: Array<Menu> = [
    {
        menucd: 'DB0000',
        menuup: 'MN0000',
        menunm:  '대시보드',
        url:  '/dashboard',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MY0000',
        menuup: 'MN0000',
        menunm:  '마이페이지',
        url:  '/mypage',
        menulv:  '1',
        menugb:  'G',
        menuor:  '1',
        showyn: 'N',
        createdAt: new Date()
    },
    {
        menucd: 'CT0000',
        menuup: 'MN0000',
        menunm:  '채팅방',
        url:  '/chat',
        menulv:  '1',
        menugb:  'C',
        menuor:  '2',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'ST0000',
        menuup: 'MN0000',
        menunm:  '공부방',
        url:  '/study',
        menulv:  '1',
        menugb:  'ST',
        menuor:  '3',
        showyn: 'Y',
        createdAt: new Date(),
        children: [
            {
                menucd: 'ST0001',
                menuup: 'MNST00',
                menunm:  '타입스크립트',
                url:  '/study/typescript',
                menulv:  '2',
                menugb:  'G',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date(),
                children: [
                    {
                        menucd: 'ST0011',
                        menuup: 'MNST00',
                        menunm:  '타입스크립트 입문 - 1',
                        url:  '/study/typescript/1',
                        menulv:  '2',
                        menugb:  'G',
                        menuor:  '1',
                        showyn: 'Y',
                        createdAt: new Date()
                    }
                ]
            }
        ]
    },
    {
        menucd: 'GB0000',
        menuup: 'MN0000',
        menunm:  '방명록',
        url:  '/guestbook',
        menulv:  '1',
        menugb:  'G',
        menuor:  '999',
        showyn: 'Y',
        createdAt: new Date()
    },
    
]

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
