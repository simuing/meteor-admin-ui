import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { IMenu } from '../type/IMenu';

export const MenuCollection = new Mongo.Collection<IMenu>('menu');

Meteor.methods({
    initMenu: function() {
        console.info('[INFO] Menu data init')
        MenuCollection.remove({});
        defaultMenu.forEach(menu => {
            MenuCollection.insert({ ...menu });
        });
    },
    insertMenu: function(menu: IMenu) {
        console.info('[INFO] Menu data insert', menu);
        MenuCollection.insert({ ...menu });
    },
    removeMenu: function(id: string) {
        console.info('[INFO] Menu data remove', id)
        MenuCollection.remove(id);
    }
});


/**
 * Menu Database
 */
 const defaultMenu: Array<IMenu> = [
    {
        menucd: 'MNDB00',
        menuup: 'MN0000',
        menunm:  '대시보드',
        url:  '/dashboard',
        menulv:  '1',
        menugb:  'DB',
        menuor:  '1',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNMY00',
        menuup: 'MN0000',
        menunm:  '마이페이지',
        url:  '/mypage',
        menulv:  '1',
        menugb:  'MY',
        menuor:  '999',
        showyn: 'N',
        createdAt: new Date()
    },
    {
        menucd: 'MNCT00',
        menuup: 'MN0000',
        menunm:  '채팅방',
        url:  '/chat',
        menulv:  '1',
        menugb:  'CT',
        menuor:  '2',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNST00',
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
                menucd: 'MNST01',
                menuup: 'MNST00',
                menunm:  '타입스크립트',
                url:  '/study/typescript',
                menulv:  '2',
                menugb:  'ST',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date(),
            },
            {
                menucd: 'MNST02',
                menuup: 'MNST00',
                menunm:  'AWS 게임데이',
                url:  '/study/aws',
                menulv:  '2',
                menugb:  'ST',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date(),
            },
            {
                menucd: 'MNST03',
                menuup: 'MNST00',
                menunm:  'Quiz',
                url:  '/study/quiz',
                menulv:  '2',
                menugb:  'ST',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date(),
            },
            // {
            //     menucd: 'MNST02',
            //     menuup: 'MNST00',
            //     menunm:  '리액트',
            //     url:  '/study/react',
            //     menulv:  '2',
            //     menugb:  'ST',
            //     menuor:  '1',
            //     showyn: 'Y',
            //     createdAt: new Date(),
            //     children: [
            //         {
            //             menucd: 'MNST21',
            //             menuup: 'MNST02',
            //             menunm:  '상태관리',
            //             url:  '/study/react/state',
            //             menulv:  '3',
            //             menugb:  'ST',
            //             menuor:  '1',
            //             showyn: 'Y',
            //             createdAt: new Date()
            //         },
            //         {
            //             menucd: 'MNST22',
            //             menuup: 'MNST02',
            //             menunm:  '리액트 라이브러리',
            //             url:  '/study/react/library',
            //             menulv:  '3',
            //             menugb:  'ST',
            //             menuor:  '2',
            //             showyn: 'Y',
            //             createdAt: new Date()
            //         },
            //     ]
            // }
        ]
    },
    {
        menucd: 'MNBD00',
        menuup: 'MN0000',
        menunm:  '자유게시판',
        url:  '/board',
        menulv:  '1',
        menugb:  'BD',
        menuor:  '4',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNNT00',
        menuup: 'MN0000',
        menunm:  '공지사항',
        url:  '/notice',
        menulv:  '1',
        menugb:  'NT',
        menuor:  '5',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNGB00',
        menuup: 'MN0000',
        menunm:  '방명록',
        url:  '/guestbook',
        menulv:  '1',
        menugb:  'GB',
        menuor:  '999',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'MNLO00',
        menuup: 'MN0000',
        menunm:  'Login',
        url:  '/login',
        menulv:  '1',
        menugb:  'LO',
        menuor:  '999',
        showyn: 'N',
        createdAt: new Date()
    },
    
]
    