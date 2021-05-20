import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const NSApproval = () => {
    let history = useHistory();

    useEffect(() => {
        console.log('[INFO] NSApproval page updated')
        history.push("/approval/apply/insert"); //결재신청함으로 이동
        return () => {
            console.log('[INFO] NSApproval page clear')
        }
    },[])

    return (
        <div>
        </div>
    )
}
