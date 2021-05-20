import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const pageState = atom({
    key: 'pageState',
    default: {
        tsPage: '1',     // TypeScript 공부 페이지 번호 - 버튼 페이지
        tsSubPage: '1',  // TypeScript 공부 상세페이지 번호 - 버튼 페이지 내 개별 페이징
    }
})

export function usePageState() {
    return useRecoilState(pageState);
}
export function usePageValue() {
    return useRecoilValue(pageState);
}
export function useSetPage() {
    return useSetRecoilState(pageState);
}