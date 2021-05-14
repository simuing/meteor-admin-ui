export interface IUser {
    _id?: string;
    id: string;
    pw?: string;
    nickname: string;
    createdAt: string;

    // TODO ADD Auth
    // accessToken: string;
}