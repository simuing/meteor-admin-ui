import { Meteor } from 'meteor/meteor';

/**
 * @description Cookie Control Methods
 */
Meteor.methods({
    /**
     * @function setCookie 쿠키 저장
     * @param {string} name  이름
     * @param {string} value 내용
     * @param {number} exp   저장기간
     */
    setCookie: function(name: string, value: string, exp: number) {
        let date = new Date();
        date.setTime(date.getTime() + exp*24*60*60*1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    },

    /**
     * @function getCookie 쿠키 조회
     * @param {string} name 이름
     */
    getCookie: function(name: string) {
        const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
        return value? value[2] : null;
    },

    /**
     * @function deleteCookie 쿠키 삭제
     * @param {string} name 이름
     */
    deleteCookie: function(name: string) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
    }
});