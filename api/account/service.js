import request from "./index";

export const unreadCount = () =>
    request({
        method: 'get',
        url: '/messenger/unreadCount',
    });

//律师认证状态获取
export const findLawyer= () =>
    request({
        url: '/lawyer/findById',
        method: "get",
    });