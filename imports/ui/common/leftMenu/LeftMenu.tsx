import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, NavLink } from 'react-router-dom';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';
import { Menu } from '/imports/db/MenuCollection';
// import { Picker } from 'meteor/meteorhacks:picker';
// import { Picker } from 'meteor/meteorhacks:picker';

export const LeftMenu = () => {
    const [showMenu, setShowMenu] = useState(true);

    const menuList = useTracker(() => {
        return MenuCollection.find().fetch();
    });

    const onClickShowMenu = () =>{
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        return () => {
            console.log('setShowMenu(true)');
            setShowMenu(true);
        }
    }, [])

    const goMenu = () => {
        // debugger;
    }

    const makeMenu = (menu: Menu) => {
        // if(menu.menulv!=='1' || menu.showyn!=='Y') {
        //     return null;
        // } else {
            return (
                <li key={menu.menucd}>
                    {/* <a href='#'>{`${showMenu ? menu.menunm : 'a'}`}</a> */}
                    <Link id={menu.menucd} to={menu.url}>{`${showMenu ? menu.menunm : 'a'}`}</Link>
                </li>
            )
        // }
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
                    {menuList.map(makeMenu)}
                </ul>
            </div>
            <div id="sz-left-menu-footer">
            </div>
        </div>
    );
}