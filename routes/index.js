var express = require('express');
var API = require('../api/service');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next)=>{
    let courtRank= [
      {
        id: 1001549,
        name: "商业秘密",
        type: "precedent_usage",
      },
      {
        id: 970753,
        name: "商标",
        type: "precedent_column",
      },
      {
        id: 971777,
        name: "专利",
        type: "precedent_column",
      },
      {
        id: 972801,
        name: "著作权",
        type: "precedent_column",
      },
      {
        id: 1001548,
        name: "数字资产",
        type: "precedent_usage",
      },
    ];
    let data1 = await API.precedentSearchByCondition({
      size: 3,
      usageDictionaryIds: 1001549,
      page: 1,
      sort: 1,
    });
    let data2 = await API.questionAnswer({
      size: 5,
      sourceType: 952310,
      page: 1,
      sort: 1,
    });
    let data3=await API.precedentStatistics();
    let data={
      courtRank,
      conditionList:data1.data,
      questionsList:data2.data,
      title:'测试axios请求数据',
      ...data3,
    }
    res.render('index', data);
});

module.exports = router;
