/**
 * System Log Type
 */

export interface ILog {
    _id?: string;
    db: string; // db collection name (guestbooks, boards, chats...)
    log: string;
}