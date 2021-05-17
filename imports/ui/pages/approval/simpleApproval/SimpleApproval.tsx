import React, { useEffect, useState } from 'react';

export const SimpleApproval = () => {
    const [page, setPage] = useState('1');

    useEffect(() => {
        console.log('[INFO] TypeScript page updated')
        return () => {
            console.log('[INFO] TypeScript page clear')
        }
    },[page])

    const onClickPage = (e) => {
        setPage(e.target.name);
    }

    
    return (
        <div>
            <h1 className="page-title">
                결재 현황
            </h1>

            <h3 className="page-subtitle">결재 현황</h3>
            <div className="page-content">
                
            </div>
        </div>
    )
}
