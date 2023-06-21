var API = require('../api/service');
const moment = require('moment');
const date = moment().format('YYYY-MM-DD HH:mm:ss');


let data1 = await API.newsSearch({
    size: 3,
    type: 4,
    page: 1,
    sort: 1,
});
