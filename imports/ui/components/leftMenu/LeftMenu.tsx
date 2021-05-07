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

    /// 메뉴 순서(menuor)대로 출력
    const menuList = useTracker(() => {
        return MenuCollection.find({}, {sort: [['menulv', 'asc'],['menuor', 'asc']]}).fetch();
    });

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

    const isActiveMenu = (url: string, menuup: string) => {
        if(pathName!='/' && url==pathName) {
            if(menuup!=config.menucd) {
                console.log('gsdfgsd', menuup)
                menuOpen(menuup)
            }
            return true;
        } else {
            return false;
        }
    }

    const menuOpen = (menucd: string) => {
        // setOpenMenucd(menucd);

        //(1) 다른 코드는 모두 닫는다.
        // menuup.classList.remove("on");

        //(2) menucd의 최상위 코드를 재귀조회하여 모두 오픈하도록 한다.
        const menu = document.querySelector("#"+menucd);
        if(menu) {
            let parent = document.querySelector("#"+menucd).parentElement;
            parent.classList.add("on");
    
            let menuup = parent.getAttribute("data-menuup");
            if(menuup!=config.menucd) {
                parent.classList.add("on");
                menuOpen(menuup);
            }
        }
    }

    const getMenuList = (menu: IMenu) => {
        if(menu.showyn=='Y') {
            return (
                <li key={menu.menucd} data-menucd={menu.menucd} data-menuup={menu.menuup}>
                    <Link id={menu.menucd} to={menu.url} className={isActiveMenu(menu.url, menu.menuup) ? 'active' : ''}>
                        {`${showMenu ? menu.menunm : menu.menugb}`}
                    </Link>
                    {
                        menu.children
                        ? 
                        <ul className={`left-menu-child`}>
                            {menu.children.map(getMenuList)}
                        </ul>
                        : 
                        <></>
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