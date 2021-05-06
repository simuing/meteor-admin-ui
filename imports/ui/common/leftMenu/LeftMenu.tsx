import React, { useState, useEffect, useRef } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';
import { Menu } from '/imports/db/MenuCollection';

export const LeftMenu = () => {
    const [showMenu, setShowMenu] = useState(true);
    const refMenu = useRef<Link>('');

    /// 메뉴 순서(menuor)대로 출력
    const menuList = useTracker(() => {
        return MenuCollection.find({}, {sort: [['menuor', 'asc']]}).fetch();
    });

    const onClickShowMenu = () =>{
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        return () => {
            console.log('setShowMenu(true)');
            setShowMenu(true);
        }
    }, []);
    
    return (
        <div key="leftmenu" id="sz-left-menu" className={`${showMenu ? "large" : "small"}`}>
            <div id="sz-left-menu-head">
                <button id="sz-left-menu-btn" onClick={onClickShowMenu}>
                    {`${showMenu ? "<" : ">"}`}
                </button>
            </div>
            <div id="sz-left-menu-body">
                <ul>
                    {
                        menuList.map(menu => {
                            if(menu.showyn=='Y') {
                                return (
                                    <li key={menu.menucd} >
                                        <Link ref={refMenu=>refMenu} id={menu.menucd} to={menu.url}>{`${showMenu ? menu.menunm : 'a'}`}</Link>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
            <div id="sz-left-menu-footer">
            </div>
        </div>
    );
}