import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, useLocation } from 'react-router-dom';
import { MenuCollection } from '/imports/db/MenuCollection';
import { IMenu } from '../../../db/type/IMenu';
import { config } from '/imports/type/Config'

export const LeftMenu = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [openMenucd, setOpenMenucd] = useState(null); //열린 메뉴 코드
    const pathName = useLocation().pathname;

    const menus: IMenu[] = useTracker(() => {
        const handles = Meteor.subscribe('getMenus');
        const loading = !handles.ready();
        const list = MenuCollection.find().fetch()
        const sort = {sort: [['menulv', 'asc'],['menuor', 'asc']]};

        // console.log('loading', loading)
        // console.log('menus', list)

        return MenuCollection.find({}, sort).fetch();
    });

    /// 메뉴 순서(menuor)대로 출력
    // const menuList = useTracker(() => {
    //     return MenuCollection.find({}, {sort: [['menulv', 'asc'],['menuor', 'asc']]}).fetch();
    // });

    useEffect(() => {
        console.info('[INFO] LeftMenu componentDidMount')

        return () => {
            setShowMenu(true);
        }
    }, []);

    // url 변경 이벤트
    useEffect(() => {
        console.log(pathName);
    }, [pathName])

    const onClickShowMenu = () => {
        setShowMenu(!showMenu);
    }

    /**
     * @function 메뉴활성화여부 클래스명 반환 함수
     * @param url
     * @param menuup
     * @returns
     */
    const isActiveMenu = (menu: IMenu) => {
        const url = menu.url;
        const lv = menu.menulv;

        if (pathName!='/' && url==pathName) {
            return 'on active';
        } else if (lv==='1' && pathName.includes(url)) {
            return 'on';
        } else {
            return '';
        }
    }

    const getMenus = (menu: IMenu) => {
        if(menu.showyn=='Y') {
            return (
                <li key={menu.menucd}
                    className={isActiveMenu(menu)}
                    data-menucd={menu.menucd}
                    data-menuup={menu.menuup}
                    data-menulv={menu.menulv}
                >
                    <div>
                        <Link id={menu.menucd} to={menu.url} >
                            {`${showMenu ? menu.menunm : menu.menugb}`}

                            { menu.menulv==='1' && menu.children
                                ? <div className="left-menu-toggle-icon">
                                    {!isActiveMenu(menu).includes('on')
                                        ? <span>open</span>
                                        : <span>close</span>
                                    }
                                </div>
                                : <></>
                            }
                        </Link>
                        {/* TODO -> child menu 뿌려지는 depth정리 */}
                        { menu.children ?
                            <ul className={`left-menu-child`}>
                                {menu.children.map(getMenus)}
                            </ul>
                            :
                            <></>
                        }
                    </div>
                </li>
            )
        } else {
            return null;
        }
    }

    return (
        <div key="leftmenu" id="sz-left-menu" className={`${showMenu ? "large" : "small"}`}>
            <div id="sz-left-menu-head">
                <button id="sz-left-menu-btn" onClick={onClickShowMenu}>
                    {`${showMenu ? "<" : ">"}`}
                </button>
            </div>
            <div id="sz-left-menu-body">
                <ul>
                    {menus.map((menu)=>getMenus(menu))}
                </ul>
            </div>
            <div id="sz-left-menu-footer">
            </div>
        </div>
    );
}
