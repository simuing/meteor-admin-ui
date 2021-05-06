import React, { useState, useEffect, useMemo } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, useLocation } from 'react-router-dom';
import { MenuCollection } from '/imports/db/MenuCollection';
import { Menu } from '../../../db/MenuCollection';

export const LeftMenu = () => {
    const [showMenu, setShowMenu] = useState(true);
    const pathName = useLocation().pathname;

    /// 메뉴 순서(menuor)대로 출력
    const menuList = useTracker(() => {
        return MenuCollection.find({}, {sort: [['menulv', 'asc'],['menuor', 'asc']]}).fetch();
    });

    const onClickShowMenu = () =>{
        setShowMenu(!showMenu);
    }

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

    const getMenuList = (menu: Menu) => {
        if(menu.showyn=='Y') {
            return (
                <li key={menu.menucd} className={menu.url.includes(pathName) ? 'active' : ''}>
                    <Link ref={refMenu=>refMenu} id={menu.menucd} to={menu.url}>{`${showMenu ? menu.menunm : 'a'}`}</Link>
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