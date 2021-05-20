/**
 * @author sz
 * @description 2021.05.14. create
 */
export interface INSApproval { 
    _id?: string;
    id: string;             //사번
    name: string;           //이름
    applyDate: Date;        //결재신청일
    approvalId: string;     //결재자 사번
    approvalStatus: string; //결재상태(대기/반려/승인)
    approvalDate: string;   //결재일
    createDate: Date;       //생성일
    updateDate: Date;       //수정일
    deleteYn: string;       //삭제여부
    deleteDate: Date;       //삭제일
}