import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { MenuCollection, MenuAPI } from '/imports/db/MenuCollection';
import { Menu } from '/imports/db/MenuCollection';
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

    const goMenu = (menu: Menu) => {
        console.log(menu.url)
    }

    const makeMenu = (menu: Menu) => {
        if(menu.view!=='Y') {
            return null;
        } else {
            return (
                <li key={menu.menucd} onClick={()=>goMenu(menu)}>
                    <a href='#'>
                        {`${showMenu ? menu.menunm : 'a'}`}
                    </a>
                    {/* <Link to="/">dd</Link> */}
                </li>
            )
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
                    {menuList.map(makeMenu)}
                </ul>
            </div>
            <div id="sz-left-menu-footer">
            </div>
        </div>
    );
}