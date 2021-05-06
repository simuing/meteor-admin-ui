import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, useLocation } from 'react-router-dom';
import { MenuCollection } from '/imports/db/MenuCollection';
import { IMenu } from '../../../db/common/IMenu';

export const LeftMenu = () => {
    /// 메뉴 순서(menuor)대로 출력
    const menuList = useTracker(() => {
        return MenuCollection.find({}, {sort: [['menulv', 'asc'],['menuor', 'asc']]}).fetch();
    });

    const [showMenu, setShowMenu] = useState(true);
    const pathName = useLocation().pathname;

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

    const isActiveMenu = (url: string) => {
        if(pathName!='/' && url.includes(pathName)) {

            return true;
        } else {
            return false;
        }
    }

    const getMenuList = (menu: IMenu) => {
        if(menu.showyn=='Y') {
            return (
                <li key={menu.menucd}>
                    <Link id={menu.menucd} to={menu.url} className={isActiveMenu(menu.url) ? 'active' : ''}>
                        {`${showMenu ? menu.menunm : menu.menugb}`}
                    </Link>
                    {
                        menu.children
                        ? <ul className={`left-menu-child-${menu.menulv}`}>{menu.children.map(getMenuList)}</ul>
                        : <></>
                    }
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
                    {menuList.map((menu)=>getMenuList(menu))}
                </ul>
            </div>
            <div id="sz-left-menu-footer">
            </div>
        </div>
    );
}