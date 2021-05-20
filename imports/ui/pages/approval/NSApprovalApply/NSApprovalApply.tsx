import { useTracker } from 'meteor/react-meteor-data';
import React, { useEffect } from 'react';
import Datetime from 'react-datetime';
import { applyLocation } from '../../../../type/ICommonCode';
import { useApprovalApplyState } from '/imports/atoms/approvalApplyState';

export const NSApprovalApply = () => {
    const [applyState, setApplyState] = useApprovalApplyState(); //recoil state

    useEffect(() => {
        console.log('[INFO] NSApprovalApply page updated')
        return () => {
            console.log('[INFO] NSApprovalApply page clear')
        }
    },[])

    const onSubmitApproval = (e) => {
        e.preventDefault();
        console.log(applyState)

        if(validation) {
            Meteor.call('insertNSApproval', applyState);
        }
    }

    const validation = () => {
        if(applyState.APPLY_ID && applyState.APPLY_NM && applyState.APPLY_TYPE && applyState.APPLY_LOCATION) {
            return true;
        } else {
            return false;
        }
    }

    const handleChange = (e) => {
        setApplyState({
            ...applyState,
            [e.target.name]: e.target.value
        });
    }

    const handleChangeDT = (e, type: string) => {
        if(e.format) {
            if(type==='start') {
                setApplyState({
                    ...applyState,
                    APPLY_ST_DATETIME: e.format("YYYY-MM-DD HH:mm A")
                })
            } else if (type==='end') {
                setApplyState({
                    ...applyState,
                    APPLY_ED_DATETIME: e.format("YYYY-MM-DD HH:mm A")
                })
            }
        }
    }

    return (
        <div className="page-form">
            <h3 className="page-subtitle">결재 신청</h3>
            <div className="page-content">
                <form className="cm-form page-card" onSubmit={(e)=>onSubmitApproval(e)}>
                    <div className="cm-form-row">
                        <div className="cm-d-i-block cm-w-50p">
                            <div className="cm-d-i-block cm-w-100px">*신청자 사번</div>
                            <input type="text" name="APPLY_ID" onChange={(e)=>handleChange(e)}/>
                        </div>
                        <div className="cm-d-i-block cm-w-50p">
                            <div className="cm-d-i-block cm-w-100px">*신청자명</div>
                            <input type="text" name="APPLY_NM" onChange={(e)=>handleChange(e)}/>
                        </div>
                    </div>
                    <div className="cm-form-row">
                        
                        <div className="cm-d-i-block cm-w-50p">
                            <div className="cm-d-i-block cm-w-100px">*시작일시</div>
                            <Datetime 
                                inputProps={{readOnly: true}}
                                dateFormat="YYYY-MM-DD" timeFormat="HH:mm A"
                                onChange={(e)=>handleChangeDT(e, 'start')}/>
                        </div>
                        <div className="cm-d-i-block cm-w-50p">
                            <div className="cm-d-i-block cm-w-100px">*종료일시</div>
                            <Datetime 
                                inputProps={{readOnly: true}}
                                dateFormat="YYYY-MM-DD" timeFormat="HH:mm A" 
                                onChange={(e)=>handleChangeDT(e, 'end')}/>
                        </div>
                    </div>
                    <div className="cm-form-row cm-d-i-block cm-w-50p">
                        <div className="cm-d-i-block cm-w-100px">*근무위치</div> 
                        <select name="APPLY_LOCATION" onChange={(e)=>handleChange(e)}>
                            {applyLocation.map(op=>
                                <option value={op.CMCODE}>{op.CMNAME}</option>
                            )}
                        </select>
                    </div>
                    <div className="cm-form-row cm-d-i-block cm-w-50p">
                        <div className="cm-d-i-block cm-w-100px">*금액</div> 
                        <input type="number" name="APPLY_FEE" onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="cm-form-row cm-d-i-block cm-w-100p">
                        <div className="cm-d-i-block cm-w-100px">신청사유</div> 
                        <textarea name="APPLY_MEMO" className="cm-d-i-block cm-w-90p" 
                            onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="cm-form-row cm-form-btn">
                        <button type="submit" className="btn-insert cm-w-100p">신청</button>
                    </div>
                </form>
            </div>
        </div>
    )
}