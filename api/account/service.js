var request = require('./index');

const Me = params =>
    request({
        method: 'get',
        url: '/me',
    });

const unreadCount = () =>
    request({
        method: 'get',
        url: '/messenger/unreadCount',
    });

//律师认证状态获取
const findLawyer= () =>
    request({
        url: '/lawyer/findById',
        method: "get",
    });


module.exports={
    Me,
    unreadCount,
    findLawyer,
}