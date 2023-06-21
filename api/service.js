var request = require('./index');

const Me = params =>
    request({
        method: 'get',
        url: '/me',
    });

const questionAnswerSearch = data =>
    request({
        url: `/questionAnswer/search`,
        method: "get",
        params: data,
    });

const guideSearch = data =>
    request({
        url: `/guide/search`,
        method: "get",
        params: data,
    });

//栏目对应案例
const precedent = params =>
    request({
        url: `/precedent/search`,
        method: "get",
        params
    });

//常见问题
const questionAnswer = params =>
    request({
        url: `/questionAnswer/search`,
        method: "get",
        params
    });

//获取时间戳
const getCurrentTime = params =>
    request({
        url: `/time/getCurrentTime`,
        method: "get"
    });

// 判例数
const precedentStatistics = params =>
    request({
        url: `/precedentStatistics/searchOne`,
        method: "get"
    });

// 案例场景
const precedentSearchByCondition = params =>
    request({
        url: `/precedent/searchByCondition`,
        method: "get",
        params
    });

//新闻场景
const newsSearch = data =>
    request({
        url: `/news/search`,
        method: "get",
        params: data,
    });








module.exports={
    Me,
    questionAnswerSearch,
    guideSearch,
    precedent,
    questionAnswer,
    getCurrentTime,
    precedentStatistics,
    precedentSearchByCondition,
    newsSearch
}