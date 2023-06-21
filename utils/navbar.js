
const navList = [
    {
        name: '首页',
        link: process.env.VUE_APP_TSA,
        target: '_blank',
    },
    {
        name: '产品服务',
        link: '',
        children: [
            {
                name: '电子取证',
                link: process.env.VUE_APP_EV,
                target: '_blank',
            },
            {
                name: '知识产权',
                link: process.env.VUE_APP_COPYRIGHT,
                target: '_blank',
            },
            {
                name: '邮件认证',
                link: process.env.VUE_APP_EMAIL,
                target: '_blank',
            },
            {
                name: '电子签约',
                link: process.env.VUE_APP_SIGN,
                target: '_blank',
            },
            {
                name: '权利卫士APP',
                link: process.env.VUE_APP_TSA+'/qlwsDownLoad',
                target: '_blank',
            },
            {
                name: '时间戳公共服务',
                link: process.env.VUE_APP_TSA+'/openService?type=0',
                target: '_blank',
            },
            {
                name: '开放平台',
                link: '',
                children: [
                    {
                        name: '可信时间戳®接口',
                        link: process.env.VUE_APP_TSA+'/openService?type=0',
                        target: '_blank',
                            },
                    {
                        name: '电子证据取证接口',
                        link: process.env.VUE_APP_TSA+'/openService?type=1',
                        target: '_blank',
                    },
                    {
                        name: '知识产权保护接口',
                        link: process.env.VUE_APP_TSA+'/openService?type=2',
                        target: '_blank',
                    },
                    {
                        name: '电子签名接口',
                        link: process.env.VUE_APP_TSA+'/openService?type=3',
                        target: '_blank',            
                    },
                    {
                        name: 'PDF专用接口',
                        link: process.env.VUE_APP_TSA+'/adobe',
                        target: '_blank',           
                    },
                    {
                        name: '可信区块链接口',
                        link: process.env.VUE_APP_TSA+'/openService?type=4',
                        target: '_blank',            
                    },
                ]
            },
        ]
    },
    {
        name: '验证中心',
        link: process.env.VUE_APP_VERIFY,
        target:'_blank',
    },
    {
        name: '帮助中心',
        link: '',
        children: [
            {
                name: '操作指引',
                link: process.env.VUE_APP_TSA+'/guide',
                target: '_blank',
            },
            {
                name: '典型案例',
                link: process.env.VUE_APP_TSA+'/precedent',
                target: '_blank',
            },
            {
                name: '常见问题',
                link: process.env.VUE_APP_TSA+'/question',
                target: '_blank',
            },
        ]
    },
    {
        name: '关于我们',
        link: '',
        children: [
            {
                name: '时间戳服务中心',
                link: process.env.VUE_APP_TSA+'/phoneUs',
                target: '_blank',
            },
            {
                name: '国家授时中心',
                link: process.env.VUE_APP_TSA+'/timingCenter',
                target: '_blank',
            },
            {
                name: '荣誉资质',
                link: process.env.VUE_APP_TSA+'/honor',
                target: '_blank',
            },
            {
                name: '联系我们',
                link: process.env.VUE_APP_TSA+'/about',
                target: '_blank',
            },
            {
                name: '典型用户',
                link: process.env.VUE_APP_TSA+'/partner',
                target: '_blank',
            },
            {
                name: '商标声明',
                link: process.env.VUE_APP_TSA+'/tradeMark',
                target: '_blank',
            },
        ]
    }
]

module.exports=navList;