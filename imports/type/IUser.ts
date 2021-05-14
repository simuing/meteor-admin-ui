export interface IUser {
    _id?: string;
    id: string;
    pw?: string;
    nickname: string;
    createDate: Date;
    updateDate: Date;

    // TODO ADD Auth
    // accessToken: string;
}