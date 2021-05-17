import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataGrid from 'react-data-grid';

export const SimpleApprovalApplyList = () => {
    const state = {
        columnDefs: [
            {headerName: "Make", field: "make"},
            {headerName: "Model", field: "model"},
            {headerName: "Price", field: "price"}

        ],
        rowData: [
            {make: "Toyota", model: "Celica", price: 35000},
            {make: "Ford", model: "Mondeo", price: 32000},
            {make: "Porsche", model: "Boxter", price: 72000}
        ]
    }
    
    useEffect(() => {
        console.log('[INFO] SimpleApprovalApplyList page updated')
        return () => {
            console.log('[INFO] SimpleApprovalApplyList page clear')
        }
    },[])

    const onSubmitSerch = (e) => {
        e.preventDefault();
        console.log('search');
    }

    const columns = [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' }
    ];
      
    const rows = [
        { id: 0, title: 'Example' },
        { id: 1, title: 'Demo' }
    ];

    return (
        <div>
            <h1 className="page-title">결재신청함</h1>

            <h3 className="page-subtitle">결재신청함 검색</h3>
            <div className="page-search">
                <form onSubmit={(e)=>onSubmitSerch(e)}>
                    <div className="page-search-btn">
                        <button type="submit" className="btn-default">조회</button>
                        <button type="button" className="btn-default">초기화</button>
                    </div>
                    <div className="page-search-form">
                        {/* <div className="search-form-input">
                            <div className="cm-d-i-block cm-w-100px">신청제목</div>
                            <input type="text" name="title" className="cm-w-70p" value={title} onChange={(e)=>onChangeInput('title',e.target.value)}/>
                        </div> */}
                    </div>
                </form>
            </div>

            <h3 className="page-subtitle">결재 신청 목록</h3>
            <div className="page-list-btn">
                <Link to="/approval/apply/insert" className="btn-default">등록</Link>
            </div>
            <div className="page-list">
                <DataGrid columns={columns} rows={rows} />;
            </div>
        </div>
    )
}
