import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { IApprovalApply } from "../type/IApproval";

const approvalApplyState = atom<IApprovalApply>({
    key: 'approvalApplyState',
    default: {
      APPLY_ID: '',
      APPLY_NM: '',
      APPLY_TYPE: '',
      APPLY_LOCATION: '',
      APPLY_ST_DATETIME: null,
      APPLY_ED_DATETIME: null,
      APPLY_FEE: 0,
      APPROVAL_ID: '',
      APPROVAL_STATUS: '',
      APPROVAL_DT: null,
      CREATE_DT: null,
      UPDATE_DT: null
    },
})

export function useApprovalApplyState() {
    return useRecoilState(approvalApplyState);
}