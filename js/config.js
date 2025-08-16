// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000,  // 验证有效期（90天，约3个月）
    adminLocalStorageKey: 'adminPasswordVerified'  // 新增的管理员验证状态的键名
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    1080zyku: {
        name: 'TV-1080资源',
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        detail: 'https://api.1080zyku.com'
    },
    360zy: {
        name: 'TV-360资源',
        api: 'https://360zy.com/api.php/provide/vod',
        detail: 'https://360zy.com'
    },
    ckzy: {
        name: 'TV-CK资源',
        api: 'https://ckzy.me/api.php/provide/vod',
        detail: 'https://ckzy.me'
    },
    ukuapi: {
        name: 'TV-U酷资源',
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        detail: 'https://api.ukuapi.com'
    },
    ukuapi88: {
        name: 'TV-U酷资源',
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        detail: 'https://api.ukuapi88.com'
    },
    ikunzyapi: {
        name: 'TV-ikun资源',
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        detail: 'https://ikunzyapi.com'
    },
    wujinapi: {
        name: 'TV-wujinapi无尽',
        api: 'https://api.wujinapi.cc/api.php/provide/vod'
    },
    yayazy: {
        name: 'TV-丫丫点播',
        api: 'https://api.wujinapi.cc/api.php/provide/vod',
        detail: 'https://cj.yayazy.net'
    },
    guangsuapi: {
        name: 'TV-光速资源',
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        detail: 'https://api.guangsuapi.com'
    },
    tyyszy: {
        name: 'TV-天涯资源',
        api: 'https://tyyszy.com/api.php/provide/vod',
        detail: 'https://tyyszy.com'
    },
    rycjapi: {
        name: 'TV-如意资源',
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        detail: ''
    },
    xinlangapi: {
        name: 'TV-新浪点播',
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        detail: 'https://api.xinlangapi.com'
    },
    wujinapi: {
        name: 'TV-无尽资源',
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        detail: ''
    },
    wujinapi2: {
        name: 'TV-无尽资源',
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        detail: ''
    },
    wujinapi3: {
        name: 'TV-无尽资源',
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        detail: ''
    },
    wwzy: {
        name: 'TV-旺旺短剧',
        api: 'https://wwzy.tv/api.php/provide/vod',
        detail: 'https://wwzy.tv'
    },
    wwzy2: {
        name: 'TV-旺旺资源',
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        detail: 'https://api.wwzy.tv'
    },
    bfzyapi: {
        name: 'TV-暴风资源',
        api: 'https://bfzyapi.com/api.php/provide/vod',
        detail: ''
    },
    zuidazy: {
        name: 'TV-最大点播',
        api: 'http://zuidazy.me/api.php/provide/vod',
        detail: 'http://zuidazy.me'
    },
        zuida: {
        api: 'https://zuidazy.com/api.php/provide/vod/',
        name: '最大资源'
    },
    zuidapi: {
        name: 'TV-最大资源',
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        detail: 'https://api.zuidapi.com'
    },
    api_26: {
        name: 'TV-樱花资源',
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        detail: ''
    },
    api_27: {
        name: 'TV-步步高资源',
        api: 'https://api.yparse.com/api/json',
        detail: ''
    },
    api_28: {
        name: 'TV-牛牛点播',
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        detail: 'https://api.niuniuzy.me'
    },
    api_29: {
        name: 'TV-电影天堂资源',
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        detail: 'http://caiji.dyttzyapi.com'
    },
    api_31: {
        name: 'TV-百度云资源',
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        detail: 'https://api.apibdzy.com'
    },
    api_32: {
        name: 'TV-神马云',
        api: 'https://api.1080zyku.com/inc/apijson.php/',
        detail: 'https://api.1080zyku.com'
    },
    api_33: {
        name: 'TV-索尼资源',
        api: 'https://suoniapi.com/api.php/provide/vod',
        detail: ''
    },
    api_34: {
        name: 'TV-红牛资源',
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        detail: 'https://www.hongniuzy2.com'
    },
    api_35: {
        name: 'TV-茅台资源',
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        detail: 'https://caiji.maotaizy.cc'
    },
    api_36: {
        name: 'TV-虎牙资源',
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        detail: 'https://www.huyaapi.com'
    },
    api_37: {
        name: 'TV-豆瓣资源',
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        detail: 'https://caiji.dbzy.tv'
    },
    api_38: {
        name: 'TV-豆瓣资源',
        api: 'https://dbzy.tv/api.php/provide/vod',
        detail: 'https://dbzy.tv'
    },
    api_39: {
        name: 'TV-豪华资源',
        api: 'https://hhzyapi.com/api.php/provide/vod',
        detail: 'https://hhzyapi.com'
    },
    api_40: {
        name: 'TV-速博资源',
        api: 'https://subocaiji.com/api.php/provide/vod',
        detail: ''
    },
    api_41: {
        name: 'TV-量子资源',
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        detail: ''
    },
    api_42: {
        name: 'TV-金鹰点播',
        api: 'https://jinyingzy.com/api.php/provide/vod',
        detail: 'https://jinyingzy.com'
    },
    api_43: {
        name: 'TV-金鹰资源',
        api: 'https://jyzyapi.com/api.php/provide/vod',
        detail: 'https://jyzyapi.com'
    },
    api_44: {
        name: 'TV-閃電资源',
        api: 'https://sdzyapi.com/api.php/provide/vod',
        detail: 'https://sdzyapi.com'
    },
    api_45: {
        name: 'TV-非凡资源',
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        detail: 'https://cj.ffzyapi.com'
    },
    api_46: {
        name: 'TV-飘零资源',
        api: 'https://p2100.net/api.php/provide/vod',
        detail: 'https://p2100.net'
    },
    api_47: {
        name: 'TV-魔爪资源',
        api: 'https://mozhuazy.com/api.php/provide/vod',
        detail: 'https://mozhuazy.com'
    },
    api_48: {
        name: 'TV-魔都动漫',
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        detail: 'https://caiji.moduapi.cc'
    },
    ffzynew: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视new',
        detail: 'http://ffzy5.tv'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    taopian: {
        api: 'https://taopianapi.com/cjapi/mc10/vod/json.html',
        name: '淘片资源'
    },
    hongniuziyuan: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源'
    },
    suonisandian: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '索尼-闪电资源'
    },
    yayaziyuan: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: '鸭鸭资源'
    },
    kauicheziyuan: {
        api: 'https://caiji.kuaichezy.org/api.php/provide/vod',
        name: '快车资源阿'
    },
    xinlangaa: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: '新浪资源阿'
    },
    yingshigongchang: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '影视工厂'
    },
    shandian: {
        api: 'https://sdzyapi.com/api.php/provide/vod/',
        name: '闪电资源'
    },

//-----------------------------------------------------------
        
    api_2: {
        name: 'AV-155资源',
        api: 'https://155api.com/api.php/provide/vod',
        detail: 'https://155api.com',
        adult: true
    },
    api_30: {
        name: 'AV-百万资源',
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        detail: 'https://api.bwzyz.com',
        adult: true
    },
    api_52: {
        name: 'AV-91麻豆',
        api: 'https://91md.me/api.php/provide/vod',
        detail: 'https://91md.me',
        adult: true
    },
    api_53: {
        name: 'AV-AIvin',
        api: 'http://lbapiby.com/api.php/provide/vod',
        detail: '',
        adult: true
    },
    api_54: {
        name: 'AV-JKUN资源',
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    api_55: {
        name: 'AV-souav资源',
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        detail: 'https://api.souavzy.vip',
        adult: true
    },
    api_56: {
        name: 'AV-乐播资源',
        api: 'https://lbapi9.com/api.php/provide/vod',
        detail: '',
        adult: true
    },
    api_57: {
        name: 'AV-奥斯卡资源',
        api: 'https://aosikazy.com/api.php/provide/vod',
        detail: 'https://aosikazy.com',
        adult: true
    },
    api_58: {
        name: 'AV-奶香香',
        api: 'https://Naixxzy.com/api.php/provide/vod',
        detail: 'https://Naixxzy.com',
        adult: true
    },
    api_59: {
        name: 'AV-森林资源',
        api: 'https://slapibf.com/api.php/provide/vod',
        detail: 'https://slapibf.com',
        adult: true
    },
    api_60: {
        name: 'AV-淫水机资源',
        api: 'https://www.xrbsp.com/api/json.php',
        detail: 'https://www.xrbsp.com',
        adult: true
    },
    api_61: {
        name: 'AV-玉兔资源',
        api: 'https://apiyutu.com/api.php/provide/vod',
        detail: 'https://apiyutu.com',
        adult: true
    },
    api_62: {
        name: 'AV-番号资源',
        api: 'http://fhapi9.com/api.php/provide/vod',
        detail: '',
        adult: true
    },
    api_63: {
        name: 'AV-白嫖资源',
        api: 'https://www.kxgav.com/api/json.php',
        detail: 'https://www.kxgav.com',
        adult: true
    },
    api_64: {
        name: 'AV-精品资源',
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        detail: 'https://www.jingpinx.com',
        adult: true
    },
    api_65: {
        name: 'AV-美少女资源',
        api: 'https://www.msnii.com/api/json.php',
        detail: 'https://www.msnii.com',
        adult: true
    },
    api_66: {
        name: 'AV-老色逼资源',
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        detail: 'https://apilsbzy1.com',
        adult: true
    },
    api_67: {
        name: 'AV-色南国',
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        detail: 'https://api.sexnguon.com',
        adult: true
    },
    api_69: {
        name: 'AV-辣椒资源',
        api: 'https://apilj.com/api.php/provide/vod',
        detail: 'https://apilj.com',
        adult: true
    },
    api_70: {
        name: 'AV-香奶儿资源',
        api: 'https://www.gdlsp.com/api/json.php',
        detail: 'https://www.gdlsp.com',
        adult: true
    },
    api_71: {
        name: 'AV-鲨鱼资源',
        api: 'https://shayuapi.com/api.php/provide/vod',
        detail: 'https://shayuapi.com',
        adult: true
    },
    api_72: {
        name: 'AV-黄AV资源',
        api: 'https://www.pgxdy.com/api/json.php',
        detail: 'https://www.pgxdy.com',
        adult: true
    },
    kauiboziyuan: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源网站',
        adult: true
    },
    xingbaziyuan: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '杏吧资源',
        adult: true
    },
    senlinziyuan: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: '森林资源',
        adult: true
    },
    huangseziy: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
        adult: true
    },
    xiaojiziy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
        adult: true
    },
    lajiaoziyu: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: '辣椒资源黄黄',
        adult: true
    },
    xibaocaiji: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集黄色',
        adult: true
    },
    ckzy: {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: 'CK资源',
        adult: true
    },
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
