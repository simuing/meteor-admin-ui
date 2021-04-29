import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';
import { Menu } from '/imports/db/MenuCollection';

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

    // const showMenuNM = (menu: Menu) => {
    //     let menunm = 'sfd';
        
    //     setTimeout(function() {
    //         menunm = menu.menunm;
    //     }.bind(this), 3000);

    //     return menunm;
    // }

    const goMenu = (menu: Menu) => {
        console.log(menu.url)
    }

    const makeMenu = (menu: Menu) => {
        return (
            <li onClick={()=>goMenu(menu)}>
                <a href='#'>
                    {`${showMenu ? menu.menunm : 'a'}`}
                </a>
            </li>
        )
    }

    return (
        <div id="sz-left-menu" className={`${showMenu ? "large" : "small"}`}>
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