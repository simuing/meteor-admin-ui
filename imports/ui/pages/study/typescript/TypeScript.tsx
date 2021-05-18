import React, { useEffect } from 'react';
import { useTsBtnValue } from '/imports/atoms/tsBtnState';
import { usePageState } from '/imports/atoms/pageState';
import TS1 from './TS1';
import TS2 from './TS2';
import TS3 from './TS3';
import TS4 from './TS4';


export const TypeScript = () => {
    const [pageState, setPageState] = usePageState();
    const btnState = useTsBtnValue();

    useEffect(() => {
        console.log('[INFO] TypeScript page updated')
        return () => {
            console.log('[INFO] TypeScript page clear')
        }
    },[pageState])

    const onClickPage = (e) => {
        setPageState({
            ...pageState,
            tsPage: e.target.name
        });
    }

    const getPage = () => {
        let result = (<></>);
        switch (pageState.tsPage) {
            case '1': result = <TS1/>; break;
            case '2': result = <TS2/>; break;
            case '3': result = <TS3/>; break;
            case '3': result = <TS4/>; break;
            default: break;
        }
        return result;
    }

    return (
        <div>
            <div className="page-content">
                <div>
                    {btnState.map((btn)=>(
                        <button type="button" 
                                name={btn.name} 
                                onClick={onClickPage}
                                className={"btn-default cm-w-25p"+(pageState.tsPage===btn.name?" btn-default-active":"")}
                        >{btn.title}</button>
                    ))}
                </div>
                <div>
                    {getPage()}
                </div>
            </div>
        </div>
    )
}