import React, { useEffect } from 'react';
import { usePageState } from '/imports/atoms/pageState';
import { useTsBtnValue } from '/imports/atoms/tsBtnState';
import { Decorator, Generic, Iterator, TS1, TS2, TS3, TS4, TS5, TS6, TypeInference } from './tabs'

export const TypeScript = () => {
    const [pageState, setPageState] = usePageState();
    const btnState = useTsBtnValue();

    useEffect(() => {
        console.info('[INFO]TypeScript page updated: '+ pageState.tsPage);
        return () => {
            console.info('[INFO]TypeScript page clear: '+ pageState.tsPage);
        }
    },[pageState])

    const onClickPage = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            case '4': result = <TS4/>; break;
            case '5': result = <TS5/>; break;
            case '6': result = <TS6/>; break;
            case '7': result = <Generic/>; break;
            case '8': result = <Iterator/>; break;
            case '9': result = <Decorator/>; break;
            case '10': result = <TypeInference/>; break;
            default: break;
        }
        return result;
    }

    return (
        <div>
            <div className="page-content">
                <div>
                    {btnState.map((btn)=>(
                        <button type="button" key={btn.name}
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