var express = require('express');
var router = express.Router();
var API = require('../api/service');
var ACCOUNTAPI = require('../api/account/service');
var qs = require('qs');
var navlist=require('../utils/navbar');
/* GET users listing. */
router.get('/', async (req, res, next)=> {
    var navListRecursion=(obj, navList, idx)=>{
        navList.map((item, index) => {
            item.selected = false
            item.show = false
            // item.link && (item.link = channelLink(item.link, 'bdipr'))
            item.index = idx ? idx + '-' + index : index.toString()
            if((req.baseUrl+'?'+qs.stringify(req.query) )=== item.link){
                let indexArray = item.index.split('-')
                initialIndex = parseInt(indexArray[0])
            }
            item.children && navListRecursion(obj, item.children, item.index)
        })
        return obj
    }
    var list = JSON.parse(JSON.stringify(navListRecursion(navlist, navlist)))
    var userInfo='';
    var isLawyer=false;
    try { 
        userInfo=await ACCOUNTAPI.Me();
        let lawyerInfo=await ACCOUNTAPI.findLawyer();
        lawyerInfo ? isLawyer=true : isLawyer=false;
    } catch (error) {
        console.log(error);
    }

    let data1 = await API.newsSearch({
        size: 3,
        type: 4,
        page: 1,
        sort: 1,
    });
    let data2 = await API.questionAnswer({
        size: 5,
        sourceType: 700028,
        page: 1,
        sort: 1,
    });
    let data3=await API.precedentStatistics();
    let data={
        currentRoute:req.baseUrl,
        list,
        userInfo:userInfo?userInfo:'',
        isLawyer,
        addressInfo: [
            {
                img: "/images/home/address1.png",
                title: "司法认可",
                info: "使用可信时间戳生效判决80000件",
            },
            {
                img: "/images/home/address2.png",
                title: "世界知识产权组织、国家版权局 版权金奖",
                info: "荣获2018年“中国版权金奖”保护奖",
            },
            {
                img: "/images/home/address3.png",
                title: "安全保密",
                info: "公安等保三级，脱敏认证不上传原文",
            },
        ],
        newList:data1.data,
        questionsList:data2.data,
        ...data3,
        process:{
            env:process.env
        }
    };
    res.render('aigc', data);
    // res.redirect('http://www.tsa.cn'); 
});

module.exports = router;
