import { Meteor } from 'meteor/meteor';
import React, { useState, useEffect } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Link, useLocation } from 'react-router-dom';
import { TiThMenu, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { MenuCollection } from '/imports/db/MenuCollection';
import { useMenuState } from '/imports/atoms/menuState';
import { config } from '/imports/type/Config';
import { IMenu } from '/imports/type/IMenu';

/**
   * @function 메뉴활성화여부 클래스명 반환 함수
   * @param url
   * @param menuup
   * @returns
   */
const isActiveMenu = (menu: IMenu, pathName: string) => {
  const url = menu.url;
  const lv = menu.menulv;

  if (pathName != '/' && url == pathName) {
    return 'on active';
  } else if (lv === '1' && pathName.includes(url)) {
    return 'on';
  } else {
    return '';
  }
}

export const LeftMenu = () => {
  const [menuState, setMenuState] = useMenuState(); //recoil state
  const [showMenu, setShowMenu] = useState(true);
  const pathName = useLocation().pathname;

  const menus: IMenu[] = useTracker(() => {
    const handles = Meteor.subscribe('getMenus');
    const loading = !handles.ready();
    const list = MenuCollection.find().fetch()
    const sort = {sort: [['menulv', 'asc'], ['menuor', 'asc']]};
    return MenuCollection.find({}, sort).fetch();
  });

  useEffect(() => {
    console.info('[INFO] LeftMenu componentDidMount')
    // if(!menuState) {
    //   const selectedMenu = menus.find(menu=>menu.url.includes(pathName));
    // }
    return () => {
      setShowMenu(true);
    }
  }, []);

  // url 변경 이벤트
  useEffect(() => {
    // console.log(pathName)
    const selectedMenu = menus.find(menu=>menu.url.includes(pathName));
    if(selectedMenu) {
      setMenuState(selectedMenu);
    }
  }, [pathName]);


  const onClickShowMenu = () => {
    setShowMenu(!showMenu);
  }

  const getMenus = (menu: IMenu) => {
    if (menu.showyn == 'Y') {
      return (
        <li key={menu.menucd}
            className={isActiveMenu(menu, pathName)}
            data-menucd={menu.menucd}
            data-menuup={menu.menuup}
            data-menulv={menu.menulv}
        >
          <div>
            <Link id={menu.menucd} to={menu.url}>
              {`${showMenu ? menu.menunm : menu.menugb}`}
              {showMenu && menu.menulv === '1' && menu.children
                ? <div className="left-menu-toggle-icon">
                  {!isActiveMenu(menu, pathName).includes('on')
                    ? <TiArrowSortedUp/>
                    : <TiArrowSortedDown/>
                  }
                </div>
                : <></>
              }
            </Link>
            {/* TODO -> child menu 뿌려지는 depth정리 */}
            {menu.children ?
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
    <div key="leftmenu" id="ma-left-menu" className={`${showMenu ? "large" : "small"}`}>
      <div id="ma-left-menu-head">
        <button id="ma-left-menu-btn" onClick={onClickShowMenu}>
          {showMenu ? <TiThMenu/> : <TiThMenu/>}
        </button>
      </div>
      <div id="ma-left-menu-body">
        <ul>
          {menus.map((menu) => getMenus(menu))}
        </ul>
      </div>
      <div id="ma-left-menu-footer">
      </div>
    </div>
  );
}
