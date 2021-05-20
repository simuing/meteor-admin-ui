import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const SimpleApproval = () => {
    let history = useHistory();

    useEffect(() => {
        console.log('[INFO] SimpleApproval page updated')
        history.push("/approval/apply/insert"); //결재신청함으로 이동
        return () => {
            console.log('[INFO] SimpleApproval page clear')
        }
    },[])

    return (
        <div>
            {/* <h1 className="page-title">
                결재 현황
            </h1>

            <h3 className="page-subtitle">결재 현황</h3>
            <div className="page-content">
                
            </div> */}
        </div>
    )
}
