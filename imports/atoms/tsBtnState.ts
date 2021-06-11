import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const tsBtnState = atom({
    key: 'tsBtnState',
    default: [
        {name: '0' , title: 'Introduction'},
        {name: '1' , title: 'TypeScript'},
        {name: '2' , title: 'Type'},
        {name: '3' , title: 'Type Assertionsm, alias'},
        {name: '4' , title: 'Interface'},
        {name: '5' , title: 'Indexable Types'},
        {name: '6' , title: 'Class'},
        {name: '7' , title: 'Generic'},
        {name: '8' , title: 'iterator'},
        {name: '9' , title: 'Decorator'},
        {name: '10' , title: 'Type Inference'},
        {name: '11', title: 'React with TypeScript'},
        {name: '12', title: 'React Migration'}
    ]
})

export function useTsBtnState() {
    return useRecoilState(tsBtnState);
}
export function useTsBtnValue() {
    return useRecoilValue(tsBtnState);
}
export function useSetTsBtn() {
    return useSetRecoilState(tsBtnState);
}