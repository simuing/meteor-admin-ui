import React, { useEffect, useState } from 'react';

export const SimpleApprovalApply = () => {
    const [page, setPage] = useState('1');

    useEffect(() => {
        console.log('[INFO] SimpleApprovalApply page updated')
        return () => {
            console.log('[INFO] SimpleApprovalApply page clear')
        }
    },[page])

    const onClickPage = (e) => {
        setPage(e.target.name);
    }

    const onSubmitApproval = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="page-title">
                결재 신청
            </h1>

            <h3 className="page-subtitle">결재 현황</h3>
            <div className="page-content">
                <form onSubmit={(e)=>onSubmitApproval(e)}>
                    신청자 사번: <input type="text" name="id" />
                    금액: <input type="number" name="cost"/>
                </form>
            </div>
        </div>
    )
}
