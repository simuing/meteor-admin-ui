/**
 * @interface 공통코드
 */
 export interface ICommonCode {
  CMCODE: string; 
  CMNAME: string;
}


export const commonCode: Array<ICommonCode> = [
  { CMCODE: "MN0000", CMNAME: "메뉴 공통코드" },
  { CMCODE: "LO0000", CMNAME: "근무지 공통코드" },
  { CMCODE: "APST00", CMNAME: "결재상태 공통코드" },
  { CMCODE: "APTP00", CMNAME: "결재신청 유형 공통코드" },
]

/**
 * @constant 결재신청 유형
 * @description LO: Location
 */
 export const applyType: Array<ICommonCode> = [
  { CMCODE: "APTP01", CMNAME: "식대비" },
  { CMCODE: "APTP02", CMNAME: "교통비" },
  { CMCODE: "APTP03", CMNAME: "기타" },
]

/**
 * @constant 근무지 
 * @description LO: Location
 */
 export const applyLocation: Array<ICommonCode> = [
  { CMCODE: "LO0001", CMNAME: "미정" },
  { CMCODE: "LO0002", CMNAME: "사무실" },
  { CMCODE: "LO0003", CMNAME: "재택" },
  { CMCODE: "LO0004", CMNAME: "외근" },
]

/**
* @constant 결재상태
* @description AP: Approval / ST: Status
*/
export const approvalStatus: Array<ICommonCode> = [
  { CMCODE: "APST01", CMNAME: "대기" }, //(=결재신청)
  { CMCODE: "APST02", CMNAME: "반려" },
  { CMCODE: "APST03", CMNAME: "승인" }
]