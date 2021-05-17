/**
 * @interface 공통코드
 */
 export interface ICommonCode {
  CMCODE: string; 
  CMNAME: string;
}


/**
 * @constant 근무지
 * @description LO: Location
 */
 export const applyLocation: Array<ICommonCode> = [
  { CMCODE: "LO0000", CMNAME: "미정" },
  { CMCODE: "LO0001", CMNAME: "사무실" },
  { CMCODE: "LO0002", CMNAME: "재택근무" }
]

/**
* @constant 결재상태
* @description ST: Status / AP: Approval 
*/
export const approvalStatus: Array<ICommonCode> = [
  { CMCODE: "STAP01", CMNAME: "결재신청" },
  { CMCODE: "STAP02", CMNAME: "결재반려" },
  { CMCODE: "STAP03", CMNAME: "결재승인" }
]