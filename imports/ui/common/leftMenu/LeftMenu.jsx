import React, { useState } from 'react';
import { MenuAPI } from '/imports/db/MenuCollection'

export const LeftMenu = () => {
    const [showMenu, setShowMenu] = useState(true);

    const onClickShowMenu = () =>{
    }
    return (
        <div id="sz-left-menu">
            <p>Menu</p>
            {/* <form>
                <input type="name" name="menunm" placeholder="메뉴명을 입력하세요."/>
            </form> */}
        </div>
    )
}