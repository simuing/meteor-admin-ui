import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const menuState = atom({
    key: 'menuState',
    default: {
        menucd: '',
        menunm: '',
    },
})

export function useMenuState() {
    return useRecoilState(menuState);
}