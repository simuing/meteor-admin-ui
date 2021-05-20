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
export interface IMenu {
    _id?: string;
    menucd: string;
    menuup: string; 
    menunm: string;
    url: string;
    menulv: string;
    menugb: string;
    menuor: string;
    showyn: string; // Y or N
    createdAt: Date | null;
    children?: Array<IMenu>;
}

/**
 * Menu Database
 */
export const defaultMenu: Array<IMenu> = [
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
                children: [
                    {
                        menucd: 'MNST11',
                        menuup: 'MNST01',
                        menunm:  '타입스크립트 입문',
                        url:  '/study/typescript/1',
                        menulv:  '3',
                        menugb:  'ST',
                        menuor:  '1',
                        showyn: 'Y',
                        createdAt: new Date()
                    },
                    {
                        menucd: 'MNST12',
                        menuup: 'MNST01',
                        menunm:  '타입스크립트 초급',
                        url:  '/study/typescript/2',
                        menulv:  '3',
                        menugb:  'ST',
                        menuor:  '2',
                        showyn: 'Y',
                        createdAt: new Date()
                    },
                ]
            }
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
    