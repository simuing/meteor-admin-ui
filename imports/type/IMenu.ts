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
    createdAt: Date;
    children?: Array<IMenu>;
}

/**
 * Menu Database
 */
export const defaultMenu: Array<IMenu> = [
    {
        menucd: 'DB0000',
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
        menucd: 'MY0000',
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
        menucd: 'CT0000',
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
                menuup: 'ST0000',
                menunm:  '타입스크립트',
                url:  '/study/typescript',
                menulv:  '2',
                menugb:  'ST',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date(),
                children: [
                    {
                        menucd: 'ST0011',
                        menuup: 'ST0002',
                        menunm:  '타입스크립트 입문',
                        url:  '/study/typescript/1',
                        menulv:  '3',
                        menugb:  'ST',
                        menuor:  '1',
                        showyn: 'Y',
                        createdAt: new Date()
                    },
                    {
                        menucd: 'ST0012',
                        menuup: 'ST0001',
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
        menucd: 'MNAP00',
        menuup: 'MN0000',
        menunm:  '결재',
        url:  '/approval',
        menulv:  '1',
        menugb:  'AP',
        menuor:  '4',
        showyn: 'Y',
        createdAt: new Date(),
        children: [
            {
                menucd: 'MNAP01',
                menuup: 'MNAP00',
                menunm:  '결재신청',
                url:  '/approval/apply/insert',
                menulv:  '2',
                menugb:  'AP',
                menuor:  '1',
                showyn: 'Y',
                createdAt: new Date()
            },
            {
                menucd: 'MNAP02',
                menuup: 'MNAP00',
                menunm:  '결재신청함',
                url:  '/approval/apply/list',
                menulv:  '2',
                menugb:  'AP',
                menuor:  '2',
                showyn: 'Y',
                createdAt: new Date()
            },
            {
                menucd: 'MNAP03',
                menuup: 'MNAP00',
                menunm:  '결재승인함',
                url:  '/approval/list',
                menulv:  '2',
                menugb:  'AP',
                menuor:  '2',
                showyn: 'Y',
                createdAt: new Date()
            },
        ]
    },
    {
        menucd: 'BD0000',
        menuup: 'MN0000',
        menunm:  '공지사항',
        url:  '/board',
        menulv:  '1',
        menugb:  'BD',
        menuor:  '4',
        showyn: 'Y',
        createdAt: new Date()
    },
    {
        menucd: 'GB0000',
        menuup: 'MN0000',
        menunm:  '방명록',
        url:  '/guestbook',
        menulv:  '1',
        menugb:  'GB',
        menuor:  '999',
        showyn: 'Y',
        createdAt: new Date()
    },
    
]
    