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
      APPLY_MEMO: '',
      APPROVAL_STATUS: '',
<<<<<<< HEAD
      APPROVAL_ID: '',
      APPROVAL_NM: '',
      APPROVAL_DATETIME: null,
      REJECT_MEMO: '',
=======
      APPROVAL_DATETIME: null,
>>>>>>> fa65aa83c089f8376af15e6eeee81ef62092e70d
      CREATE_DT: null,
      UPDATE_DT: null
    },
})

export function useApprovalApplyState() {
    return useRecoilState(approvalApplyState);
}