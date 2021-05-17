/**
 * @description 결재 관련 interface / data 정의
 * @author silversero
 * @create 2021.05.17
 */

/**
 * @interface 결재신청-DB스키마타입
 * @description SimpleApprovalCollection 'simpleApprovals'
 * web 데이터를 TSimpleApproval 타입으로 세팅하여 simpleApprovals에 저장 
 */
export interface IApprovalApply {
  APPLY_ID  : string;  // applyID 신청자 사번
  APPLY_NM  : number;  // applyName 신청자 이름
  APPLY_DT  : Date;    // applyDate 신청일
  APPLY_CT  : number;  // applyCost 결재신청금액
  APPRO_ID  : string;  // approvalID 결재자 사번
  APPRO_ST  : string;  // approvalStatus 결재상태
  APPRO_DT  : Date;    // approvalDate 결재일
  CREATE_DT : Date;    // createDate 생성일
  UPDATE_DT : Date;    // updateDate 수정일
}


/**
 * @interface 결재상태
 */
export interface IApprovalStatus {
  apply   : string; //결재신청(=승인대기)
  reject  : string; //결재반려
  approval: string; //결재승인
}

/**
 * @constant 결재상태
 * @description ST: Status / AP: Approval 
 */
export const ApprovalStatus: IApprovalStatus = { 
  apply   : "STAP01", //결재신청(=승인대기)
  reject  : "STAP02", //결재반려
  approval: "STAP03"  //결재승인
}



/**
 * @interface 검색조건-결재신청함/승인함
 */
export interface IApprovalSearch {
  applyID       ?: string;  //신청자 사번
  applyName     ?: number;  //신청자 이름
  applyDate     ?: Date;    //신청일
  applyCost     ?: number;  //결재신청금액
  approvalID    ?: string;  //결재자 사번
  approvalStatus?: string;  //결재상태
  approvalDate  ?: Date;    //결재일
  createDate    ?: Date;    //생성일
}