/**
 * @description 결재 관련 interface / data 정의
 * @author silversero
 * @create 2021.05.17
 */

/**
 * @interface 결재신청-DB스키마타입
 * @description NSApprovalCollection 'NSApprovals'
 * web 데이터를 TNSApproval 타입으로 세팅하여 NSApprovals에 저장 
 */
export interface IApprovalApply {
  APPLY_ID          : string;        // applyID 신청자 사번
  APPLY_NM          : string;        // applyName 신청자명
  APPLY_TYPE        : string;        // applyType 근무형태
  APPLY_LOCATION    : string;        // applyLocation 근무지
  APPLY_ST_DATETIME : Date;          // applyStartDatetime 신청 시작일시
  APPLY_ED_DATETIME : Date;          // applyEndDatetime 신청 종료시간
  APPLY_FEE         : number;        // applyFee 결재신청금액
  APPLY_MEMO        : string | null; // applyMemo 결재사유
  APPROVAL_STATUS   : string | null; // approvalStatus 결재상태
  APPROVAL_ID       : string | null; // approvalID 결재자 사번
  APPROVAL_NM       : string | null; // approvalID 결재자명
  APPROVAL_DATETIME : Date | null;   // approvalDatetime 결재일
  REJECT_MEMO       : string | null; // rejectMemo 반려사유
  CREATE_DT         : Date | null;   // createDate 생성일
  UPDATE_DT         : Date | null;   // updateDate 수정일
}

/**
 * @interface 검색조건-결재신청함/승인함
 */
export interface IApprovalSearch {
  applyYear      ?: string;  //조회년도 YYYY
  applyID        ?: string;  //신청자 사번
  applyName      ?: number;  //신청자명
  applyDate      ?: Date;    //신청일
  applyCost      ?: number;  //결재신청금액
  approvalID     ?: string;  //결재자 사번
  approvalStatus ?: string;  //결재상태
  createDate     ?: Date;    //생성일
}