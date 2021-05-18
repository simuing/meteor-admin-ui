import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const Study = () => {
    let history = useHistory();

    useEffect(() => {
        console.log('[INFO] Study page updated')
        history.push("/study/typescript"); //타입스크립트 화면으로 이동..
        return () => {
            console.log('[INFO] Study page clear')
        }
    },[])

    return (
        <div>
        </div>
    )
}
