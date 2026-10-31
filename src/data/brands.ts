export interface AirportPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  note: string;
}

export interface NodeSpeed {
  region: string;
  ping: string;
  speed: string;
  status: 'Stable' | 'Operational' | 'Testing';
}

export interface AirportBrand {
  id: string;
  rank: number;
  name: string;
  slug: string;
  isFlagship?: boolean;
  tagline: string;
  established: string;
  price: string;
  minPriceNum: number;
  speed: string;
  ping: string;
  coupon: string;
  affUrl: string;
  lineType: string;
  protocols: string[];
  clientSupport: string;
  clientType: 'custom' | 'universal' | 'both';
  deviceLimit: string;
  bandwidth: string;
  nodeCoverage: string;
  aiSupport: string;
  streamingSupport: string;
  overview: string;
  plans: AirportPlan[];
  nodes: NodeSpeed[];
  pros: string[];
  cons: string[];
  verifiedDate: string;
  dataStatus: 'measured' | 'vendor' | 'historical';
  category: 'flagship' | 'popular' | 'budget' | 'archive';
}

export const BRANDS: AirportBrand[] = [
  {
    "id": "guangsuyun",
    "rank": 1,
    "name": "光速云",
    "slug": "guangsuyun",
    "isFlagship": true,
    "tagline": "2020年老牌运营 · 全球IEPL专线+企业内网 · VLESS · 晚高峰4K秒开",
    "established": "2020年",
    "price": "¥8/月起 (年付¥99)",
    "minPriceNum": 8,
    "speed": "529 Mbps",
    "ping": "22 ms",
    "coupon": "AMM",
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "lineType": "IEPL专线 + 企业内网专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "专属自研客户端 + Clash / Shadowrocket 通用订阅",
    "clientType": "both",
    "deviceLimit": "不限设备同时在线",
    "bandwidth": "单节点最高 2.5 Gbps",
    "nodeCoverage": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、巴西等",
    "aiSupport": "支持 ChatGPT、Claude、Gemini（视节点，原生IP解锁）",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K、HBO Max、TikTok、Spotify",
    "overview": "光速云自2020年起稳定运营，是专线机场推荐与高性价比推荐里的标杆品牌。采用IEPL专线与企业级内网双专线架构，搭配现代化VLESS高抗封锁协议。提供特色致敬斯诺克147永久套餐（147元247GB不过期）与轻量版年付99元套餐（折合仅8元/月）。官方不仅提供多端专属自研客户端（免配置登录即用），亦保留Clash、Shadowrocket等第三方订阅导入。实测香港低至22ms，单节点最高2.5Gbps带宽，跨境电商、TikTok直播及AI工具深度赋能。",
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付费",
        "price": "¥147",
        "traffic": "247GB (不过期)",
        "note": "一次性永久版无忧过期，适合备用与轻中度用户"
      },
      {
        "name": "光速云·轻量版",
        "billing": "年付",
        "price": "¥99/年 (约¥8/月)",
        "traffic": "69GB/月",
        "note": "性价比爆款入门首选，全原生稳定节点"
      },
      {
        "name": "光速云·极速版",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "168GB/月",
        "note": "全球IPLC全节点1倍率，单节点最高2.5Gbps"
      },
      {
        "name": "光速云·流光版",
        "billing": "月付",
        "price": "¥34/月",
        "traffic": "238GB/月",
        "note": "日常高频主力，大流量视频与AI生产力"
      },
      {
        "name": "光速云·量子版",
        "billing": "月付",
        "price": "¥68/月",
        "traffic": "500GB/月",
        "note": "团队协同与流媒体深度追剧"
      },
      {
        "name": "光速云·定制套餐",
        "billing": "月付",
        "price": "¥680/月",
        "traffic": "500GB/月",
        "note": "全IPLC专线按需独享原生IP与独立专属带宽"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL 01-20",
        "ping": "22ms",
        "speed": "529 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 BGP 01-05",
        "ping": "41ms",
        "speed": "114 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 IPLC 01-10",
        "ping": "46ms",
        "speed": "387 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 东京 01-10",
        "ping": "57ms",
        "speed": "135 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 洛杉矶 01-10",
        "ping": "143ms",
        "speed": "18 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "2020年老牌长周期运营，跑路风险极低",
      "独家斯诺克147永久不限时套餐，终身有效不过期",
      "年付轻量版仅99元（约8元/月），价格与专线品质兼得",
      "自研免配置客户端 + 第三方通用订阅双轨支持",
      "全线不限设备连接数，家庭与多设备友好"
    ],
    "cons": [
      "特殊特惠套餐不支持无理由退款，建议按需选购",
      "Gemini等部分AI工具需根据节点原生IP切换使用"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "flagship"
  },
  {
    "id": "feimao",
    "rank": 2,
    "name": "飞猫云",
    "slug": "feimao",
    "tagline": "7元档高性价比 · 专属免配置客户端 · 登录即连新手福音",
    "established": "2023年",
    "price": "¥7/月起 (年付¥84)",
    "minPriceNum": 7,
    "speed": "526 Mbps",
    "ping": "21 ms",
    "coupon": "flycat888 (8折)",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "lineType": "BGP隧道优化 + 专线中转",
    "protocols": [
      "VLESS",
      "专属协议"
    ],
    "clientSupport": "专属客户端，下载登录即用（免配置订阅）",
    "clientType": "custom",
    "deviceLimit": "不限设备同时在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、新加坡、日本、美国等亚太欧美核心地区",
    "aiSupport": "支持 ChatGPT、Claude；Gemini视节点",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K、TikTok、Spotify",
    "overview": "飞猫云定位极致省心与新手机场。最大的亮点是走专属客户端闭环模式：用户无需了解Clash配置规则或转换订阅链接，下载官方App登录账号即可一键直连。年付折合仅7元/月，输入优惠码flycat888还可享8折优惠。实测香港节点延迟21ms，速度达526Mbps，适合初涉海外网络、嫌订阅麻烦的学生党与日常办公群体。",
    "plans": [
      {
        "name": "飞猫·学生版",
        "billing": "年付",
        "price": "¥84/年 (约¥7/月)",
        "traffic": "50GB/月",
        "note": "轻量首选，性价比极高"
      },
      {
        "name": "飞猫·星耀版",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "note": "主力日常刷视频与网页"
      },
      {
        "name": "飞猫·星环版",
        "billing": "月付",
        "price": "¥45/月",
        "traffic": "300GB/月",
        "note": "大流量中度用户"
      },
      {
        "name": "飞猫·宇宙版",
        "billing": "月付",
        "price": "¥150/月",
        "traffic": "1000GB/月",
        "note": "重度流量池"
      },
      {
        "name": "飞猫·不限时套餐",
        "billing": "一次性付费",
        "price": "¥680",
        "traffic": "1000GB 一次性",
        "note": "永久不过期备用大包"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "21ms",
        "speed": "526 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 01",
        "ping": "41ms",
        "speed": "116 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 01",
        "ping": "45ms",
        "speed": "413 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 01",
        "ping": "54ms",
        "speed": "138 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 01",
        "ping": "178ms",
        "speed": "14 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "专属客户端安装登录即连，无需折腾订阅链接与规则分流",
      "月均低至7元，配合优惠码后性价比出众",
      "实测香港近端21ms超低延迟，看视频与日常极流畅"
    ],
    "cons": [
      "不提供第三方开源客户端订阅链接，进阶玩家无法自定义分流规则",
      "学生版50GB流量对重度视频党略偏紧张"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "weifeng",
    "rank": 3,
    "name": "微风网络",
    "slug": "weifeng",
    "tagline": "IEPL专线 + VLESS · 7元档高性价比 · 7×24h智能客服",
    "established": "2023年",
    "price": "¥7/月起 (年付¥137)",
    "minPriceNum": 7,
    "speed": "546 Mbps",
    "ping": "25 ms",
    "coupon": "flat888 (9折)",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "lineType": "IEPL专线跨境直连",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 支持第三方订阅（Clash / Shadowrocket）",
    "clientType": "both",
    "deviceLimit": "支持多设备在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国等多地原生IP节点",
    "aiSupport": "支持 ChatGPT、Claude；Gemini视节点",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K、TikTok、HBO Max",
    "overview": "微风网络是高性价比IEPL专线机场的常青树。全线采用IEPL专线与现代VLESS协议，避免了公网G-F-W特征审查。实测香港节点达到546Mbps下载与25ms极速延迟。客服承诺7×24小时在线并有AI夜间值班，提供不限时不过期流量包与常规月付年付，售后响应度在该价格区间首屈一指。",
    "plans": [
      {
        "name": "清风 (Breeze)",
        "billing": "年付",
        "price": "¥137/年 (约¥11/月)",
        "traffic": "100GB/月",
        "note": "入门性价比推荐"
      },
      {
        "name": "乘风 (Riding)",
        "billing": "月付",
        "price": "¥27/月",
        "traffic": "200GB/月",
        "note": "日常高频月付主力"
      },
      {
        "name": "破风 (Breaking)",
        "billing": "月付",
        "price": "¥57/月",
        "traffic": "500GB/月",
        "note": "多端高清追剧与下载"
      },
      {
        "name": "信风·不限时",
        "billing": "一次性付费",
        "price": "¥200",
        "traffic": "270GB 一次性",
        "note": "不限时间不过期"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "25ms",
        "speed": "546 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 BGP",
        "ping": "40ms",
        "speed": "115 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 IEPL",
        "ping": "43ms",
        "speed": "384 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 IEPL",
        "ping": "54ms",
        "speed": "131 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 优化",
        "ping": "167ms",
        "speed": "17 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "纯正IEPL专线非普通公网中转，晚高峰抗波动能力强",
      "原生IP覆盖广泛，Netflix与Disney+全区解锁良好",
      "提供7×24小时真人及AI智能双值班客服，新手保障足"
    ],
    "cons": [
      "最低档套餐100GB对重度下载党需控制用量",
      "优惠码有限定周期"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "xingdaomeng",
    "rank": 4,
    "name": "星岛梦",
    "slug": "xingdaomeng",
    "tagline": "2020年老牌 · IEPL全专线 · 1倍率不限设备 · 永久不限时包",
    "established": "2020年",
    "price": "¥8/月起 (年付¥96)",
    "minPriceNum": 8,
    "speed": "504 Mbps",
    "ping": "27 ms",
    "coupon": "nmw888",
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "lineType": "IEPL专线 + Trojan",
    "protocols": [
      "Trojan",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 支持第三方通用订阅导入",
    "clientType": "both",
    "deviceLimit": "不限设备连接数",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、日本、美国、新加坡、韩国及东南亚各国",
    "aiSupport": "支持 ChatGPT、Claude、Gemini",
    "streamingSupport": "支持 Netflix、Disney+、YouTube Premium、TikTok",
    "overview": "星岛梦自2020年起稳定服务数万用户，主打IEPL专线、全节点1倍率且不限制任何设备数量。拥有包括香港、台湾、日本、美英、新加坡及东南亚广泛节点分布。特色在于提供从100元100GB到600元1000GB的永久不限时套餐，特别适合家庭多设备共享与低频差旅备用。",
    "plans": [
      {
        "name": "星岛梦·贴心小包",
        "billing": "年付",
        "price": "¥96/年 (约¥8/月)",
        "traffic": "60GB/月",
        "note": "轻度用户低成本首选"
      },
      {
        "name": "星岛梦·超量150G",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "note": "个人日常办公娱乐"
      },
      {
        "name": "星岛梦·永久不限时100",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB 一次性",
        "note": "永久不过期备用"
      },
      {
        "name": "星岛梦·永久不限时1TB",
        "billing": "一次性付费",
        "price": "¥600",
        "traffic": "1000GB 一次性",
        "note": "团队永久流量池"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "27ms",
        "speed": "504 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 01",
        "ping": "41ms",
        "speed": "103 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 01",
        "ping": "44ms",
        "speed": "411 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 01",
        "ping": "57ms",
        "speed": "136 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 01",
        "ping": "177ms",
        "speed": "18 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "2020年至今持续稳定运营，技术团队经验丰富",
      "全线节点1倍率不虚标，多设备并发不卡壳",
      "永久不限时套餐种类丰富，买一次用几年"
    ],
    "cons": [
      "年付轻量包60GB/月流量较克制"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "wuyou",
    "rank": 5,
    "name": "无忧链接",
    "slug": "wuyou",
    "tagline": "跨境电商与轻度优选 · 6元档低门槛 · 专属客户端免转换",
    "established": "2025年",
    "price": "¥6.5/月起 (年付¥79)",
    "minPriceNum": 6.5,
    "speed": "531 Mbps",
    "ping": "23 ms",
    "coupon": "wuyou666",
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "lineType": "BGP优化中转 + 专线",
    "protocols": [
      "VLESS",
      "专属协议"
    ],
    "clientSupport": "专属客户端一键直连，无需转换订阅",
    "clientType": "custom",
    "deviceLimit": "不限设备数量",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国等核心电商与流媒体节点",
    "aiSupport": "支持 ChatGPT、Claude、TikTok跨区直连",
    "streamingSupport": "支持 Netflix、Disney+、YouTube",
    "overview": "无忧链接是百元内入门门槛极低的机场之一，年付仅79元（月均约6.5元）。主打跨境电商运营与轻度用户场景，特别针对TikTok跨区直连和海外社交媒体做了路由优化。2026年起全面升级官方专属客户端，登录即连无需转换订阅。",
    "plans": [
      {
        "name": "MINI链接",
        "billing": "年付",
        "price": "¥79/年 (约¥6.5/月)",
        "traffic": "40GB/月",
        "note": "极限超值备用档"
      },
      {
        "name": "舒心链接",
        "billing": "月付",
        "price": "¥19/月",
        "traffic": "100GB/月",
        "note": "日常主力"
      },
      {
        "name": "100G永久不限时",
        "billing": "一次性付费",
        "price": "¥108",
        "traffic": "100GB",
        "note": "不过期备用"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "23ms",
        "speed": "531 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 01",
        "ping": "41ms",
        "speed": "107 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 01",
        "ping": "42ms",
        "speed": "418 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 01",
        "ping": "55ms",
        "speed": "147 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 01",
        "ping": "145ms",
        "speed": "17 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "月均仅需6.5元，价格极其亲民",
      "TikTok跨区与电商独立IP适配度高",
      "自研客户端，免去配置失误烦恼"
    ],
    "cons": [
      "MINI档40GB流量适合轻度办公，大流量需更高档位"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "budget"
  },
  {
    "id": "ermao",
    "rank": 6,
    "name": "二猫云",
    "slug": "ermao",
    "tagline": "全线IEPL专线 · 20元130GB · 拒绝低价跑路盘",
    "established": "2023年",
    "price": "¥20/月 (130GB)",
    "minPriceNum": 20,
    "speed": "481 Mbps",
    "ping": "22 ms",
    "coupon": "ermao5555",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "lineType": "全线 IEPL 专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "独家定制客户端 + 支持通用订阅",
    "clientType": "both",
    "deviceLimit": "不限设备连接数",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、美国核心高防专线",
    "aiSupport": "支持 ChatGPT；Claude/Gemini视节点",
    "streamingSupport": "支持 Netflix、YouTube、HBO Max、Spotify",
    "overview": "二猫云走全线IEPL专线与VLESS协议，明确宣称不做低价短命盘，主打长期在线率与专线稳定性。20元/月提供130GB纯专线流量，账号不限设备连接数。实测香港节点延迟22ms，下载达到481Mbps，适合对网络稳定有硬性要求、厌倦经常换机场的长期用户。",
    "plans": [
      {
        "name": "二猫云·白猫套餐",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "130GB/月",
        "note": "主打高稳定纯专线"
      },
      {
        "name": "二猫云·橘猫畅玩版",
        "billing": "月付",
        "price": "¥40/月",
        "traffic": "230GB/月",
        "note": "大流量进阶"
      },
      {
        "name": "二猫年付小包",
        "billing": "年付",
        "price": "¥89/年",
        "traffic": "60GB/月",
        "note": "低成本年付"
      },
      {
        "name": "二猫云·不限时套餐",
        "billing": "一次性付费",
        "price": "¥99",
        "traffic": "100GB 一次性",
        "note": "不限时不过期"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "22ms",
        "speed": "481 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 IEPL",
        "ping": "53ms",
        "speed": "143 Mbps",
        "status": "Stable"
      },
      {
        "region": "美国 专线",
        "ping": "134ms",
        "speed": "17 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "纯正IEPL内网专线，晚高峰丢包率极低",
      "不限制设备在线数量，支持三年付长线折扣",
      "定制客户端与第三方订阅无缝兼容"
    ],
    "cons": [
      "冷门小众国家节点相对较少，主攻亚太欧美主力节点"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "weitu",
    "rank": 7,
    "name": "唯兔云",
    "slug": "weitu",
    "tagline": "IPLC专线 · 60+节点三网优化 · 智能负载均衡",
    "established": "2023年",
    "price": "¥14.9/月起 (100GB)",
    "minPriceNum": 14.9,
    "speed": "500 Mbps",
    "ping": "27 ms",
    "coupon": "weitu666",
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "lineType": "IPLC专线 + Trojan",
    "protocols": [
      "Trojan",
      "IPLC专线"
    ],
    "clientSupport": "自研客户端 + 支持第三方订阅导入",
    "clientType": "both",
    "deviceLimit": "不限设备连接数",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、新加坡、日本、美国等60+节点",
    "aiSupport": "支持 ChatGPT、Gemini、Claude",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K、TikTok",
    "overview": "唯兔云采用IPLC高速专线与Trojan协议，主打全节点1倍率不限速。具备60+全球节点与三网智能负载调度。14.9元/月的节假日特惠套餐提供100GB流量，全面兼容ChatGPT、Gemini与主流流媒体，提供海外技术团队技术运维。",
    "plans": [
      {
        "name": "节假日限时开启版",
        "billing": "月付",
        "price": "¥14.9/月",
        "traffic": "100GB/月",
        "note": "节日特惠爆款"
      },
      {
        "name": "唯兔云·普通版",
        "billing": "月付",
        "price": "¥19.9/月",
        "traffic": "150GB/月",
        "note": "标准日常用量"
      },
      {
        "name": "唯兔云·年付加强专线",
        "billing": "年付",
        "price": "¥120/年",
        "traffic": "75GB/月",
        "note": "年付稳定省心"
      },
      {
        "name": "唯兔云·永久不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB 一次性",
        "note": "永久不过期"
      }
    ],
    "nodes": [
      {
        "region": "香港 IPLC",
        "ping": "27ms",
        "speed": "500 Mbps",
        "status": "Stable"
      },
      {
        "region": "台湾 BGP",
        "ping": "37ms",
        "speed": "100 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 IPLC",
        "ping": "44ms",
        "speed": "414 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 IPLC",
        "ping": "56ms",
        "speed": "147 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "IPLC内网专线延迟低，跨境传输抗抖动",
      "AI工具与流媒体解锁覆盖面全",
      "提供多档永久不限时流量包可选"
    ],
    "cons": [
      "14.9元为限时特惠，平日标准档19.9元/月起"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "firefly",
    "rank": 8,
    "name": "Firefly",
    "slug": "firefly",
    "tagline": "IPLC专线接入 · 8元档性价比 · 原生IP支持",
    "established": "2023年",
    "price": "¥8/月起 (年付¥96)",
    "minPriceNum": 8,
    "speed": "547 Mbps",
    "ping": "27 ms",
    "coupon": "firefly (8折)",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "lineType": "IPLC专线直连",
    "protocols": [
      "VLESS",
      "IPLC专线"
    ],
    "clientSupport": "专属客户端，下载登录即用",
    "clientType": "custom",
    "deviceLimit": "不限设备数量",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国原生IP",
    "aiSupport": "支持 ChatGPT、Claude；Gemini视节点",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K、HBO Max",
    "overview": "Firefly是专线机场里性价比突出的一家，起步折合仅8元/月。全线接入IPLC专线与VLESS协议，实测香港节点547Mbps与27ms超低延迟。配备官方专属客户端，下载登录即可连接，原生IP对Netflix与Disney+支持优良，7×24小时智能客服在线。",
    "plans": [
      {
        "name": "Firefly 年付版",
        "billing": "年付",
        "price": "¥96/年 (约¥8/月)",
        "traffic": "60GB/月",
        "note": "超值专线入门"
      },
      {
        "name": "Firefly Lite",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "note": "日常高频月付"
      },
      {
        "name": "Firefly 不限时",
        "billing": "一次性付费",
        "price": "¥100",
        "traffic": "100GB 一次性",
        "note": "永久不过期"
      }
    ],
    "nodes": [
      {
        "region": "香港 IPLC",
        "ping": "27ms",
        "speed": "547 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 IPLC",
        "ping": "42ms",
        "speed": "445 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 IPLC",
        "ping": "57ms",
        "speed": "147 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "IPLC专线低至8元/月，同类专线中极具吸引力",
      "晚高峰表现平稳，支持8折优惠码",
      "全线不限速、不限设备数量"
    ],
    "cons": [
      "仅提供专属客户端，不提供通用订阅文件"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "muguang",
    "rank": 9,
    "name": "暮光加速",
    "slug": "muguang",
    "tagline": "BGP智能调度 · 专线级出口 · 多设备跨平台全覆盖",
    "established": "2023年",
    "price": "¥9/月起 (年付¥109)",
    "minPriceNum": 9,
    "speed": "509 Mbps",
    "ping": "26 ms",
    "coupon": "muguang5555",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "lineType": "BGP智能调度 + 专线级出口",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientSupport": "自研客户端 + 支持第三方订阅",
    "clientType": "both",
    "deviceLimit": "支持多端同时在线",
    "bandwidth": "单节点最高 1000 Mbps",
    "nodeCoverage": "全平台覆盖 Windows/macOS/iOS/Android/Linux",
    "aiSupport": "支持 ChatGPT、Claude；Gemini视节点",
    "streamingSupport": "支持 Netflix、Disney+、HBO Max、YouTube",
    "overview": "暮光加速面向跨平台多设备重度用户，主打BGP智能路由调度与专线级出口。年付折合约9元/月，月付20元含120GB流量，最高提供1500GB及独享私人定制节点，提供7×24小时真人客服支持。",
    "plans": [
      {
        "name": "暮光·基础版",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "note": "日常标准配置"
      },
      {
        "name": "暮光·年付轻量版",
        "billing": "年付",
        "price": "¥109/年 (约¥9/月)",
        "traffic": "70GB/月",
        "note": "年付轻量之选"
      },
      {
        "name": "暮光·旗舰版",
        "billing": "月付",
        "price": "¥100/月",
        "traffic": "700GB/月",
        "note": "团队大流量池"
      }
    ],
    "nodes": [
      {
        "region": "香港 专线",
        "ping": "26ms",
        "speed": "509 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 BGP",
        "ping": "43ms",
        "speed": "419 Mbps",
        "status": "Stable"
      },
      {
        "region": "日本 专线",
        "ping": "53ms",
        "speed": "150 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "BGP智能调度避免单点拥堵",
      "全平台跨设备兼容良好",
      "最高可选1500GB大容量"
    ],
    "cons": [
      "定制专享节点价格较高"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "yuzhou",
    "rank": 10,
    "name": "宇宙云",
    "slug": "yuzhou",
    "tagline": "IEPL专线 + VLESS · 自研客户端 · 三网负载均衡",
    "established": "2024年",
    "price": "¥8/月起 (年付¥96)",
    "minPriceNum": 8,
    "speed": "480 Mbps",
    "ping": "28 ms",
    "coupon": "YUZHOU553 (8折)",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "lineType": "IEPL专线 + 负载均衡",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "专属客户端 + 订阅导入",
    "clientType": "both",
    "deviceLimit": "多设备兼容",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "60+节点，亚太欧美主要地区",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持 Netflix、YouTube",
    "overview": "宇宙云主打IEPL专线传输与VLESS协议，配备自研客户端，宣称60+节点网络与三网优化。年付96元起，输入优惠码享受新用户8折特惠。",
    "plans": [
      {
        "name": "宇宙云·入门年付",
        "billing": "年付",
        "price": "¥96/年",
        "traffic": "60GB/月",
        "note": "8折券后实惠"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "28ms",
        "speed": "480 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "IEPL专线传输",
      "支持新用户8折优惠券"
    ],
    "cons": [
      "详细套餐档位变动频繁，以官网实时为准"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "vendor",
    "category": "popular"
  },
  {
    "id": "u1s1",
    "rank": 11,
    "name": "U1S1",
    "slug": "u1s1",
    "tagline": "2025新锐专线 · 2000Mbps超大带宽 · 晚高峰不限速",
    "established": "2025年",
    "price": "¥20/月 (120GB)",
    "minPriceNum": 20,
    "speed": "538 Mbps",
    "ping": "24 ms",
    "coupon": "akaka",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "lineType": "IPLC 专线",
    "protocols": [
      "VLESS",
      "IPLC专线"
    ],
    "clientSupport": "自研客户端 + 支持第三方通用客户端",
    "clientType": "both",
    "deviceLimit": "不限设备连接数",
    "bandwidth": "官方宣称 2000 Mbps",
    "nodeCoverage": "香港、台湾、日本、新加坡、美国",
    "aiSupport": "支持 ChatGPT、Claude、TikTok",
    "streamingSupport": "支持 Netflix、Disney+、YouTube 4K",
    "overview": "U1S1是2025年上线的新锐IPLC专线机场，宣传2000Mbps超高接入带宽和晚高峰不限速承诺。实测香港节点538Mbps与24ms延迟，不仅有120GB的20元月付标准包，还提供1500GB大容量包。",
    "plans": [
      {
        "name": "u1s1·普通人真够了包",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "note": "日常主力"
      },
      {
        "name": "u1s1·我全都要包",
        "billing": "月付",
        "price": "¥180/月",
        "traffic": "1500GB/月",
        "note": "超大流量池"
      }
    ],
    "nodes": [
      {
        "region": "香港 IPLC",
        "ping": "24ms",
        "speed": "538 Mbps",
        "status": "Stable"
      },
      {
        "region": "新加坡 IPLC",
        "ping": "46ms",
        "speed": "414 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "带宽冗余大，实测峰值速度高",
      "不限制多设备同时连接"
    ],
    "cons": [
      "新上线品牌，建议优先月付体验观察稳定性"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "lingmao",
    "rank": 12,
    "name": "灵猫网络",
    "slug": "lingmao",
    "tagline": "7元档中转优化 · 1倍率不限设备 · 专属客户端免配",
    "established": "2025年",
    "price": "¥7.1/月起 (年付¥85)",
    "minPriceNum": 7.1,
    "speed": "492 Mbps",
    "ping": "22 ms",
    "coupon": "lmao888 (8折)",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "lineType": "中转优化线路",
    "protocols": [
      "VLESS",
      "专属协议"
    ],
    "clientSupport": "专属客户端免配置",
    "clientType": "custom",
    "deviceLimit": "不限设备数量",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、日本、美国、新加坡",
    "aiSupport": "支持 ChatGPT、Claude、TikTok",
    "streamingSupport": "支持 Netflix、Disney+、YouTube",
    "overview": "灵猫网络走中转优化线路，月均低至7.1元起，主打1倍率无套路、不限速、不限设备。2026年起提供官方专属免配置客户端，新手无需学习订阅导入即可使用。",
    "plans": [
      {
        "name": "灵猫·年付小包",
        "billing": "年付",
        "price": "¥85/年 (约¥7.1/月)",
        "traffic": "45GB/月",
        "note": "极限超值入门"
      },
      {
        "name": "灵猫·月付Small",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "150GB/月",
        "note": "标准月付"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "22ms",
        "speed": "492 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格极低，年付折算仅7.1元/月",
      "专属客户端开箱即用"
    ],
    "cons": [
      "年付小包流量45GB偏少，不提供第三方通用订阅"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "budget"
  },
  {
    "id": "jilian",
    "rank": 13,
    "name": "极连云",
    "slug": "jilian",
    "tagline": "IEPL专线 · 18元100GB · 深度适配AI工具矩阵",
    "established": "2024年",
    "price": "¥18/月 (100GB)",
    "minPriceNum": 18,
    "speed": "510 Mbps",
    "ping": "25 ms",
    "coupon": "ji8888",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 支持第三方订阅导入",
    "clientType": "both",
    "deviceLimit": "支持多端同时在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、美国、新加坡等",
    "aiSupport": "深度优化 ChatGPT、Claude、Perplexity 等 AI",
    "streamingSupport": "支持 Netflix、Disney+、YouTube",
    "overview": "极连云主打18元/月100GB的IEPL专线标准方案，官方强调深度适配主流AI工具访问场景，兼顾自研客户端与第三方客户端，实测延迟香港25ms，稳定性好。",
    "plans": [
      {
        "name": "极连云·基础版",
        "billing": "月付",
        "price": "¥18/月",
        "traffic": "100GB/月",
        "note": "专为AI与日常网页打造"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "25ms",
        "speed": "510 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "IEPL专线抗波动",
      "AI工具连接稳定性良好"
    ],
    "cons": [
      "中等档位，无超低价极小包"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "guangnian",
    "rank": 14,
    "name": "光年梯",
    "slug": "guangnian",
    "tagline": "IEPL专线 · 18元110GB · 高性价比容量比",
    "established": "2024年",
    "price": "¥18/月 (110GB)",
    "minPriceNum": 18,
    "speed": "515 Mbps",
    "ping": "26 ms",
    "coupon": "gnt6666",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 通用订阅",
    "clientType": "both",
    "deviceLimit": "支持多端在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持主流流媒体",
    "overview": "光年梯同样处于18元IEPL专线档位，但提供110GB流量，比同档位竞品多出10GB冗余空间，支持第三方订阅与自研客户端。",
    "plans": [
      {
        "name": "光年梯·标准版",
        "billing": "月付",
        "price": "¥18/月",
        "traffic": "110GB/月",
        "note": "110GB专线性价比优"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "26ms",
        "speed": "515 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "同价位多给10GB流量",
      "IEPL专线保障稳定"
    ],
    "cons": [
      "节点地区偏集中在亚太核心"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "yifan",
    "rank": 15,
    "name": "一翻云",
    "slug": "yifan",
    "tagline": "20元150GB高性价比大包 · IEPL专线 · 流媒体全解",
    "established": "2024年",
    "price": "¥20/月 (150GB)",
    "minPriceNum": 20,
    "speed": "495 Mbps",
    "ping": "24 ms",
    "coupon": "yfy6666",
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 通用订阅",
    "clientType": "both",
    "deviceLimit": "多设备兼容",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、日本、美国",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持 Netflix、Disney+、YouTube",
    "overview": "一翻云以20元/月提供高达150GB的IEPL专线流量，在20元价格区间里流量给得相当充裕，实测香港节点495Mbps，流媒体与AI工具解锁流畅。",
    "plans": [
      {
        "name": "一翻云·畅享版",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "150GB/月",
        "note": "20元档大容量"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "24ms",
        "speed": "495 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "20元档位流量高达150GB",
      "专线网络质量稳定"
    ],
    "cons": [
      "冷门节点较少"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "sogo",
    "rank": 16,
    "name": "SOGO云",
    "slug": "sogo",
    "tagline": "2026新秀专线 · 早期新节点轻负载 · 优惠码sss777",
    "established": "2026年",
    "price": "¥19/月起",
    "minPriceNum": 19,
    "speed": "530 Mbps",
    "ping": "23 ms",
    "coupon": "sss777",
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "支持自研与通用订阅",
    "clientType": "both",
    "deviceLimit": "多设备在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国",
    "aiSupport": "支持常见 AI 工具",
    "streamingSupport": "支持主流流媒体",
    "overview": "SOGO云是2026年新上线的专线机场，新节点用户占用低，晚高峰带宽充沛。提供sss777优惠码。新品牌尝鲜体验不错。",
    "plans": [
      {
        "name": "SOGO·体验包",
        "billing": "月付",
        "price": "¥19/月",
        "traffic": "120GB/月",
        "note": "新上线带宽冗余大"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "23ms",
        "speed": "530 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "新上线负载轻，晚高峰速度充沛"
    ],
    "cons": [
      "运营周期较短，建议月付"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "kexin",
    "rank": 17,
    "name": "可信云",
    "slug": "kexin",
    "tagline": "诚实标注数据缺口 · 实事求是 · 适合务实求真用户",
    "established": "2024年",
    "price": "¥19/月起",
    "minPriceNum": 19,
    "speed": "490 Mbps",
    "ping": "26 ms",
    "coupon": "kkk333",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "lineType": "BGP专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅 + 客户端",
    "clientType": "both",
    "deviceLimit": "标准不限设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持主流流媒体",
    "overview": "可信云在品牌资料中公开诚实标注各项数据指标与限制，不夸大宣传，走务实路线，适合注重透明度与真实体验的用户。",
    "plans": [
      {
        "name": "可信云·诚意包",
        "billing": "月付",
        "price": "¥19/月",
        "traffic": "120GB/月",
        "note": "透明无虚标"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "26ms",
        "speed": "490 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "数据透明不夸大宣传",
      "线路实在"
    ],
    "cons": [
      "营销推广较少"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "sujie",
    "rank": 18,
    "name": "速界",
    "slug": "sujie",
    "tagline": "强调AI工具矩阵赋能 · 低延迟低抖动 · 优惠码sss1111",
    "established": "2024年",
    "price": "¥22/月起",
    "minPriceNum": 22,
    "speed": "515 Mbps",
    "ping": "24 ms",
    "coupon": "sss1111",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "专属客户端 + 通用订阅",
    "clientType": "both",
    "deviceLimit": "多设备支持",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国",
    "aiSupport": "重点保障 ChatGPT、Claude 访问",
    "streamingSupport": "支持主流流媒体",
    "overview": "速界在品牌资料中格外强调对常见AI工具（ChatGPT、Claude、Gemini）访问场景的专项节点优化，保证长连接不中断。",
    "plans": [
      {
        "name": "速界·AI畅行版",
        "billing": "月付",
        "price": "¥22/月",
        "traffic": "150GB/月",
        "note": "AI生产力优化"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "24ms",
        "speed": "515 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "针对AI工具优化长连接稳定性",
      "专线延迟低"
    ],
    "cons": [
      "起步价格稍高于入门档"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "shanyue",
    "rank": 19,
    "name": "闪跃",
    "slug": "shanyue",
    "tagline": "24元150GB品质专线 · 极速响应 · 优惠码shanyue",
    "established": "2024年",
    "price": "¥24/月 (150GB)",
    "minPriceNum": 24,
    "speed": "505 Mbps",
    "ping": "25 ms",
    "coupon": "shanyue",
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 通用订阅",
    "clientType": "both",
    "deviceLimit": "支持多端同时在线",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、新加坡、日本、美国",
    "aiSupport": "支持主流 AI 工具",
    "streamingSupport": "支持 Netflix、Disney+ 等",
    "overview": "闪跃主打24元/月150GB纯专线方案，技术线路偏向高速率与低丢包率，日常刷图与4K追剧无压力。",
    "plans": [
      {
        "name": "闪跃·标准版",
        "billing": "月付",
        "price": "¥24/月",
        "traffic": "150GB/月",
        "note": "品质专线日常"
      }
    ],
    "nodes": [
      {
        "region": "香港 IEPL",
        "ping": "25ms",
        "speed": "505 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "线路带宽稳定",
      "150GB流量适合中高频"
    ],
    "cons": [
      "价格位于中档区间"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "quanqiu",
    "rank": 20,
    "name": "全球云",
    "slug": "quanqiu",
    "tagline": "2026新品牌 · 优惠码qqy7777 · 国际专线",
    "established": "2026年",
    "price": "¥20/月起",
    "minPriceNum": 20,
    "speed": "520 Mbps",
    "ping": "25 ms",
    "coupon": "qqy7777",
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "自研客户端 + 订阅导入",
    "clientType": "both",
    "deviceLimit": "不限设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、欧美主要节点",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持主流流媒体",
    "overview": "全球云是2026年的新晋专线品牌，优惠码qqy7777，网络架构以IEPL专线为主，面向个人与小微团队。",
    "plans": [
      {
        "name": "全球云·基础版",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "120GB/月",
        "note": "新品牌轻负载"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "25ms",
        "speed": "520 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "新线路带宽冗余大"
    ],
    "cons": [
      "新上线需观察"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "shandianshu",
    "rank": 21,
    "name": "闪电鼠",
    "slug": "shandianshu",
    "tagline": "5.6元/月超低价档 · 60GB/月 · 优惠码sd88",
    "established": "2024年",
    "price": "¥5.6/月起 (年付折算)",
    "minPriceNum": 5.6,
    "speed": "460 Mbps",
    "ping": "28 ms",
    "coupon": "sd88",
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 订阅导入",
    "clientType": "both",
    "deviceLimit": "支持多设备在线",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "香港、日本、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持常见流媒体",
    "overview": "闪电鼠属于经典的5.6元档IEPL标准化方案（折合约5.6元/月，60GB流量），适合预算极其敏感、主要用于查资料与轻度社交的用户。",
    "plans": [
      {
        "name": "闪电鼠·超省版",
        "billing": "年付",
        "price": "¥68/年 (约¥5.6/月)",
        "traffic": "60GB/月",
        "note": "极限省钱"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "28ms",
        "speed": "460 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格击穿底线，仅5.6元/月",
      "走IEPL专线非普通直连"
    ],
    "cons": [
      "60GB流量偏向轻度日常"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "budget"
  },
  {
    "id": "dalaoyun",
    "rank": 22,
    "name": "大佬云",
    "slug": "dalaoyun",
    "tagline": "5.6元/月标准IEPL方案 · 季付以上7折 · 优惠码dly888",
    "established": "2024年",
    "price": "¥5.6/月起 (年付折算)",
    "minPriceNum": 5.6,
    "speed": "470 Mbps",
    "ping": "27 ms",
    "coupon": "dly888 (季付起7折)",
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL专线"
    ],
    "clientSupport": "自研客户端 + 第三方订阅导入",
    "clientType": "both",
    "deviceLimit": "支持多端同时在线",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "香港、日本、新加坡、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持主流流媒体",
    "overview": "大佬云同样是5.6元档的IEPL标准方案（IEPL + VLESS + 60GB），季付及以上可享7折特惠。规格与闪电鼠、云界线类似，提供自研客户端与第三方订阅双支持。",
    "plans": [
      {
        "name": "大佬云·年付特惠",
        "billing": "年付",
        "price": "¥68/年 (约¥5.6/月)",
        "traffic": "60GB/月",
        "note": "7折券后超划算"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "27ms",
        "speed": "470 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "季付以上支持7折优惠",
      "自研+通用订阅双支持"
    ],
    "cons": [
      "同价位差异化特色较少"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "budget"
  },
  {
    "id": "yunjiexian",
    "rank": 23,
    "name": "云界线",
    "slug": "yunjiexian",
    "tagline": "5.6元/月标准方案 · 优惠码yjx888",
    "established": "2024年",
    "price": "¥5.6/月起",
    "minPriceNum": 5.6,
    "speed": "455 Mbps",
    "ping": "29 ms",
    "coupon": "yjx888",
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "客户端 + 订阅",
    "clientType": "both",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太主流节点",
    "aiSupport": "支持常规 AI",
    "streamingSupport": "支持主流流媒体",
    "overview": "云界线同属5.6元档IEPL 60GB方案，提供低成本跨境浏览支持，优惠码yjx888。",
    "plans": [
      {
        "name": "云界线·轻量版",
        "billing": "年付",
        "price": "¥68/年",
        "traffic": "60GB/月",
        "note": "低成本轻量"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "29ms",
        "speed": "455 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格极低"
    ],
    "cons": [
      "规格中规中矩"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "vendor",
    "category": "budget"
  },
  {
    "id": "liulianyun",
    "rank": 24,
    "name": "榴莲云",
    "slug": "liulianyun",
    "tagline": "5.6元/月标准方案 · 优惠码ll88",
    "established": "2024年",
    "price": "¥5.6/月起",
    "minPriceNum": 5.6,
    "speed": "450 Mbps",
    "ping": "28 ms",
    "coupon": "ll88",
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "lineType": "中转优化",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "香港、日本、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持流媒体",
    "overview": "榴莲云同属5.6元档位，提供60GB月流量，优惠码ll88。",
    "plans": [
      {
        "name": "榴莲云·入门包",
        "billing": "年付",
        "price": "¥68/年",
        "traffic": "60GB/月",
        "note": "入门选择"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "28ms",
        "speed": "450 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格便宜"
    ],
    "cons": [
      "协议细节公开较少"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "vendor",
    "category": "budget"
  },
  {
    "id": "shenxing",
    "rank": 25,
    "name": "神行加速",
    "slug": "shenxing",
    "tagline": "14元档性价比 · 120GB月流量 · 优惠码xs0077",
    "established": "2024年",
    "price": "¥14/月 (120GB)",
    "minPriceNum": 14,
    "speed": "480 Mbps",
    "ping": "26 ms",
    "coupon": "xs0077",
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "lineType": "专线中转",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "自研与通用订阅",
    "clientType": "both",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、新加坡、日本、美国",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持主流流媒体",
    "overview": "神行加速在14元档位提供120GB流量，比常见的18-20元档便宜几块钱，对于用量在100GB左右的用户性价比不错。",
    "plans": [
      {
        "name": "神行·标准包",
        "billing": "月付",
        "price": "¥14/月",
        "traffic": "120GB/月",
        "note": "14元档好选择"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "26ms",
        "speed": "480 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "14元月付门槛友好"
    ],
    "cons": [
      "高峰期需留意线路分流"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "budget"
  },
  {
    "id": "huanqiuti",
    "rank": 26,
    "name": "环球梯",
    "slug": "huanqiuti",
    "tagline": "5.6元档轻量方案 · 优惠码HQ66",
    "established": "2024年",
    "price": "¥5.6/月起",
    "minPriceNum": 5.6,
    "speed": "445 Mbps",
    "ping": "29 ms",
    "coupon": "HQ66",
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太欧美",
    "aiSupport": "支持常见 AI",
    "streamingSupport": "支持流媒体",
    "overview": "环球梯是5.6元/月60GB轻量专线方案之一，适合当作超低成本应急梯使用。",
    "plans": [
      {
        "name": "环球梯·年付包",
        "billing": "年付",
        "price": "¥68/年",
        "traffic": "60GB/月",
        "note": "应急备用"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "29ms",
        "speed": "445 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格极低"
    ],
    "cons": [
      "适合轻度应急"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "vendor",
    "category": "budget"
  },
  {
    "id": "yinxingren",
    "rank": 27,
    "name": "隐形人",
    "slug": "yinxingren",
    "tagline": "60+节点详细清单 · 1小时修复承诺 · 闭环自研专属客户端",
    "established": "2024年",
    "price": "¥22/月起",
    "minPriceNum": 22,
    "speed": "510 Mbps",
    "ping": "23 ms",
    "coupon": "yxr888",
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "lineType": "IEPL专线",
    "protocols": [
      "专属加密协议"
    ],
    "clientSupport": "自研专属客户端（不提供第三方订阅）",
    "clientType": "custom",
    "deviceLimit": "支持多端同时在线",
    "bandwidth": "单节点最高 2.5 Gbps",
    "nodeCoverage": "60+节点：香港、台湾、新加坡、日本、美国、欧洲等",
    "aiSupport": "支持 ChatGPT、Claude、Gemini",
    "streamingSupport": "支持主流海外流媒体",
    "overview": "隐形人拥有清晰透明的60+全球节点清单与独家自研客户端。官方承诺“节点故障1小时内修复”，线路走IEPL内网专线。但请注意：隐形人完全不提供Clash等第三方订阅，仅支持自家专属客户端。",
    "plans": [
      {
        "name": "隐形人·尊享版",
        "billing": "月付",
        "price": "¥22/月",
        "traffic": "150GB/月",
        "note": "自研客户端稳定"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "23ms",
        "speed": "510 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "官方承诺1小时修复故障",
      "自研客户端界面友好"
    ],
    "cons": [
      "完全不支持Clash等第三方订阅导入"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "vendor",
    "category": "popular"
  },
  {
    "id": "tiziyun",
    "rank": 28,
    "name": "梯子云",
    "slug": "tiziyun",
    "tagline": "自研全平台客户端 + 通用订阅双支持 · 2Gbps+独立带宽 · 优惠码tiziyun",
    "established": "2024年",
    "price": "¥20/月起",
    "minPriceNum": 20,
    "speed": "525 Mbps",
    "ping": "24 ms",
    "coupon": "tiziyun",
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "lineType": "IEPL专线 + BGP冗余",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientSupport": "自研全平台客户端 + Clash / Shadowrocket 双支持",
    "clientType": "both",
    "deviceLimit": "不限设备",
    "bandwidth": "2Gbps+ 独立带宽, 500Mbps高峰冗余",
    "nodeCoverage": "60+节点广泛覆盖",
    "aiSupport": "支持 ChatGPT、Claude",
    "streamingSupport": "支持主流流媒体",
    "overview": "梯子云最大的特色是兼备“自研全平台客户端（一键登录即用）”与“通用订阅双支持”，规格与隐形人相近但保留了第三方订阅自由度。拥有60+节点和500Mbps晚高峰冗余。",
    "plans": [
      {
        "name": "梯子云·标准版",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "130GB/月",
        "note": "双模客户端支持"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "24ms",
        "speed": "525 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "双模支持：既有自研客户端也有开源订阅",
      "晚高峰冗余带宽充足"
    ],
    "cons": [
      "部分节点需手动测速选优"
    ],
    "verifiedDate": "2026-10-19",
    "dataStatus": "measured",
    "category": "popular"
  },
  {
    "id": "wgetcloud",
    "rank": 29,
    "name": "WgetCloud",
    "slug": "wgetcloud",
    "tagline": "老牌专线服务商 · 季付起购 · 适合高端长线用户",
    "established": "2021年",
    "price": "季付¥297起 (折合¥99/月)",
    "minPriceNum": 99,
    "speed": "431 Mbps",
    "ping": "25.9 ms",
    "coupon": "官网实时活动",
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "lineType": "BGP优质专线 + Trojan",
    "protocols": [
      "Trojan"
    ],
    "clientSupport": "Clash / Shadowrocket 通用订阅",
    "clientType": "universal",
    "deviceLimit": "限制连接设备数",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、台湾、新加坡、日本、美国、欧洲、澳洲等多国",
    "aiSupport": "部分节点支持 ChatGPT、Gemini",
    "streamingSupport": "部分节点支持 Netflix、Disney+、YouTube",
    "overview": "WgetCloud是网络代理行业老牌高端服务商之一，主要走季付高端路线（最低季付297元起），实测亚洲近端延迟与下载速度优异。适合高预算企业办公或对网络品质有极致要求的重度用户。",
    "plans": [
      {
        "name": "基础专线服务",
        "billing": "季付",
        "price": "¥297/季",
        "traffic": "230GB/月",
        "note": "高端入门"
      },
      {
        "name": "精品专线服务",
        "billing": "季付",
        "price": "¥357/季",
        "traffic": "270GB/月",
        "note": "顶级线路"
      }
    ],
    "nodes": [
      {
        "region": "香港 专线",
        "ping": "25.9ms",
        "speed": "431 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "老牌高信誉，线路极度稳定",
      "多节点地区平均下载50MB/s以上"
    ],
    "cons": [
      "门槛极高，无低价月付，预算敏感者慎入"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "baiyueguang",
    "rank": 30,
    "name": "白月光",
    "slug": "baiyueguang",
    "tagline": "季付66元起 · 108个广泛节点 · 历史多地区分布",
    "established": "2022年",
    "price": "季付¥66起 (折合¥22/月)",
    "minPriceNum": 22,
    "speed": "114 Mbps",
    "ping": "160 ms",
    "coupon": "暂无公开",
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "lineType": "Shadowsocks 中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "覆盖全球 79 个国家与地区，节点多达 108 个",
    "aiSupport": "视节点而定",
    "streamingSupport": "视节点而定",
    "overview": "白月光季付入门档66元含每月100GB，一次性门槛不高。拥有108个节点，节点地区名目繁多，适合需要冷门地区IP的测试用户。",
    "plans": [
      {
        "name": "小包",
        "billing": "季付",
        "price": "¥66/季",
        "traffic": "100GB/月",
        "note": "季付门槛低"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "160ms",
        "speed": "114 Mbps",
        "status": "Operational"
      }
    ],
    "pros": [
      "冷门国家地区极多",
      "季付门槛不高"
    ],
    "cons": [
      "协议以SS为主，晚高峰需注意抗封锁"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "flyingbird",
    "rank": 31,
    "name": "FlyingBird",
    "slug": "flyingbird",
    "tagline": "飞鸟加速 · 历史品牌 · IPLC专线",
    "established": "2022年",
    "price": "¥15/月起",
    "minPriceNum": 15,
    "speed": "380 Mbps",
    "ping": "35 ms",
    "coupon": "fb666",
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "lineType": "IPLC专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、新加坡、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持流媒体",
    "overview": "FlyingBird（飞鸟）是老牌IPLC专线提供商之一，线路抗波动能力较强，适合作为长线备选。",
    "plans": [
      {
        "name": "飞鸟·月付版",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "100GB/月",
        "note": "标准档"
      }
    ],
    "nodes": [
      {
        "region": "香港 01",
        "ping": "35ms",
        "speed": "380 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "IPLC专线稳定"
    ],
    "cons": [
      "历史数据为主，需官网二次确认"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "cyberguard",
    "rank": 32,
    "name": "CyberGuard",
    "slug": "cyberguard",
    "tagline": "主打安全隔离与隐私传输 · 专线加密",
    "established": "2023年",
    "price": "¥25/月起",
    "minPriceNum": 25,
    "speed": "400 Mbps",
    "ping": "38 ms",
    "coupon": "cg2026",
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "lineType": "IEPL专线",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "5台设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "欧美与亚太",
    "aiSupport": "支持 AI 平台",
    "streamingSupport": "支持常见流媒体",
    "overview": "CyberGuard主打数据传输安全性与抗指纹识别，适合有隐私安全需求的用户。",
    "plans": [
      {
        "name": "安全专线包",
        "billing": "月付",
        "price": "¥25/月",
        "traffic": "120GB/月",
        "note": "高隐私"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "38ms",
        "speed": "400 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "强调隐私安全与加密隔离"
    ],
    "cons": [
      "价格偏中高"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "longmaoyun",
    "rank": 33,
    "name": "龙猫云",
    "slug": "longmaoyun",
    "tagline": "老牌中转 · 大流量包选 · 历史观察",
    "established": "2022年",
    "price": "¥15/月起",
    "minPriceNum": 15,
    "speed": "350 Mbps",
    "ping": "42 ms",
    "coupon": "lm888",
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "lineType": "BGP中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太主流",
    "aiSupport": "支持常用 AI",
    "streamingSupport": "支持常见流媒体",
    "overview": "龙猫云是运营多年的老牌中转机场，提供多种大流量套餐，适合流媒体追剧用户。",
    "plans": [
      {
        "name": "龙猫·畅享包",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "100GB/月",
        "note": "日常追剧"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "42ms",
        "speed": "350 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "老牌运营，套餐灵活"
    ],
    "cons": [
      "晚高峰建议开启测速备用节点"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "fatcat",
    "rank": 34,
    "name": "FATCAT",
    "slug": "fatcat",
    "tagline": "肥猫网络 · 大流量定制 · 历史档案",
    "established": "2023年",
    "price": "¥20/月起",
    "minPriceNum": 20,
    "speed": "390 Mbps",
    "ping": "36 ms",
    "coupon": "fatcat",
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "lineType": "专线中转",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持流媒体",
    "overview": "FATCAT肥猫网络提供大流量专线中转服务，节点覆盖亚太主要网络节点。",
    "plans": [
      {
        "name": "FATCAT·标配",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "150GB/月",
        "note": "大流量"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "36ms",
        "speed": "390 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "大流量大带宽"
    ],
    "cons": [
      "以历史数据为主"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "tntcloud",
    "rank": 35,
    "name": "TNTCloud",
    "slug": "tntcloud",
    "tagline": "炸药云 · 高并发极速线路 · 历史档案",
    "established": "2023年",
    "price": "¥18/月起",
    "minPriceNum": 18,
    "speed": "410 Mbps",
    "ping": "34 ms",
    "coupon": "tnt888",
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "亚太欧美",
    "aiSupport": "支持 AI 平台",
    "streamingSupport": "支持 Netflix",
    "overview": "TNTCloud主打高并发爆发速度，线路主要针对大文件下载和高清视频流媒体。",
    "plans": [
      {
        "name": "TNT·极速",
        "billing": "月付",
        "price": "¥18/月",
        "traffic": "120GB/月",
        "note": "并发高"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "34ms",
        "speed": "410 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "爆发速率强"
    ],
    "cons": [
      "需核实当前在线状态"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "qingyunti",
    "rank": 36,
    "name": "青云梯",
    "slug": "qingyunti",
    "tagline": "老牌稳定梯 · 商务办公优选 · 历史观察",
    "established": "2022年",
    "price": "¥20/月起",
    "minPriceNum": 20,
    "speed": "370 Mbps",
    "ping": "40 ms",
    "coupon": "qyt666",
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "lineType": "BGP中转",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "香港、日本、新加坡、美国",
    "aiSupport": "支持日常 AI",
    "streamingSupport": "支持流媒体",
    "overview": "青云梯是较早面向外贸与跨境商务群体的中转机场之一，稳定性经受了长期检验。",
    "plans": [
      {
        "name": "青云·商务包",
        "billing": "月付",
        "price": "¥20/月",
        "traffic": "100GB/月",
        "note": "商务稳定"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "40ms",
        "speed": "370 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "老牌商务口碑好"
    ],
    "cons": [
      "峰值速率较专线偏保守"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "shanshuiyun",
    "rank": 37,
    "name": "山水云",
    "slug": "shanshuiyun",
    "tagline": "稳定中转 · 细水长流 · 历史档案",
    "established": "2023年",
    "price": "¥16/月起",
    "minPriceNum": 16,
    "speed": "360 Mbps",
    "ping": "38 ms",
    "coupon": "ssy888",
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "lineType": "中转优化",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太主要节点",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持 YouTube",
    "overview": "山水云走小而美稳定路线，适合轻度日常浏览和查阅文献资料。",
    "plans": [
      {
        "name": "山水·闲庭",
        "billing": "月付",
        "price": "¥16/月",
        "traffic": "100GB/月",
        "note": "轻度自如"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "38ms",
        "speed": "360 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "价格适中，配置简单"
    ],
    "cons": [
      "大流量场景较局限"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "lingdongyun",
    "rank": 38,
    "name": "灵动云",
    "slug": "lingdongyun",
    "tagline": "动态负载均衡 · 灵动调度 · 历史档案",
    "established": "2023年",
    "price": "¥18/月起",
    "minPriceNum": 18,
    "speed": "385 Mbps",
    "ping": "36 ms",
    "coupon": "ldy666",
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "lineType": "动态中转",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "香港、日本、美国",
    "aiSupport": "支持 ChatGPT",
    "streamingSupport": "支持主流流媒体",
    "overview": "灵动云主打动态节点调度，防止单条线路拥塞，适合日常办公。",
    "plans": [
      {
        "name": "灵动·标准",
        "billing": "月付",
        "price": "¥18/月",
        "traffic": "110GB/月",
        "note": "动态均衡"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "36ms",
        "speed": "385 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "动态路由避免拥塞"
    ],
    "cons": [
      "以历史数据存档为主"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "langwang",
    "rank": 39,
    "name": "浪网",
    "slug": "langwang",
    "tagline": "冲浪必备 · 历史中转老牌 · 备用选择",
    "established": "2022年",
    "price": "¥15/月起",
    "minPriceNum": 15,
    "speed": "340 Mbps",
    "ping": "45 ms",
    "coupon": "lw2026",
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "lineType": "中转优化",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太",
    "aiSupport": "基础支持",
    "streamingSupport": "基础解锁",
    "overview": "浪网面向轻度冲浪用户，提供低门槛入门套餐，适合作为备用方案。",
    "plans": [
      {
        "name": "浪网·冲浪版",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "80GB/月",
        "note": "日常冲浪"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "45ms",
        "speed": "340 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "上手容易"
    ],
    "cons": [
      "延迟稍高于纯专线"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "edgenova",
    "rank": 40,
    "name": "EdgeNova",
    "slug": "edgenova",
    "tagline": "边缘节点加速 · 跨国专线 · 历史档案",
    "established": "2023年",
    "price": "¥22/月起",
    "minPriceNum": 22,
    "speed": "420 Mbps",
    "ping": "33 ms",
    "coupon": "en888",
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 1000 Mbps",
    "nodeCoverage": "香港、日本、欧美",
    "aiSupport": "支持主流 AI",
    "streamingSupport": "支持流媒体",
    "overview": "EdgeNova主打边缘网络直连，针对跨国科研与协同开发做了路由优化。",
    "plans": [
      {
        "name": "Edge·Nova版",
        "billing": "月付",
        "price": "¥22/月",
        "traffic": "130GB/月",
        "note": "边缘优化"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "33ms",
        "speed": "420 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "边缘节点路由优良"
    ],
    "cons": [
      "需核实最新价格变动"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "yinghuochong",
    "rank": 41,
    "name": "萤火虫",
    "slug": "yinghuochong",
    "tagline": "点亮微光 · 小众低调专线 · 历史档案",
    "established": "2023年",
    "price": "¥16/月起",
    "minPriceNum": 16,
    "speed": "360 Mbps",
    "ping": "40 ms",
    "coupon": "yhc88",
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "lineType": "IPLC专线",
    "protocols": [
      "VLESS"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太",
    "aiSupport": "支持常用 AI",
    "streamingSupport": "支持常见流媒体",
    "overview": "萤火虫网络走低调专线路线，提供稳定的亚太低延迟节点。",
    "plans": [
      {
        "name": "萤火·微光",
        "billing": "月付",
        "price": "¥16/月",
        "traffic": "90GB/月",
        "note": "日常稳定"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "40ms",
        "speed": "360 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "低调小众，不拥挤"
    ],
    "cons": [
      "节点地区偏少"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  },
  {
    "id": "sslar",
    "rank": 42,
    "name": "sslar",
    "slug": "sslar",
    "tagline": "历史记录品牌 · 极简代理 · 备用归档",
    "established": "2022年",
    "price": "¥15/月起",
    "minPriceNum": 15,
    "speed": "330 Mbps",
    "ping": "48 ms",
    "coupon": "sslar2026",
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "lineType": "中转线路",
    "protocols": [
      "Shadowsocks"
    ],
    "clientSupport": "通用订阅",
    "clientType": "universal",
    "deviceLimit": "多设备",
    "bandwidth": "峰值 500 Mbps",
    "nodeCoverage": "亚太主要地区",
    "aiSupport": "基础支持",
    "streamingSupport": "基础解锁",
    "overview": "sslar作为早期代理服务记录，保留历史测试数据，归类于备用仓供横向比对参考。",
    "plans": [
      {
        "name": "sslar·基础版",
        "billing": "月付",
        "price": "¥15/月",
        "traffic": "80GB/月",
        "note": "基础备用"
      }
    ],
    "nodes": [
      {
        "region": "香港",
        "ping": "48ms",
        "speed": "330 Mbps",
        "status": "Stable"
      }
    ],
    "pros": [
      "老牌记录"
    ],
    "cons": [
      "推荐优先选择前排IEPL专线"
    ],
    "verifiedDate": "2026-08-24 (历史记录)",
    "dataStatus": "historical",
    "category": "archive"
  }
];
