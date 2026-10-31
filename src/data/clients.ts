export interface ClientApp {
  name: string;
  badge?: string;
  os: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt';
  core: string;
  feature: string;
  targetUser: string;
  downloadLabel: string;
  downloadUrl: string;
  protocolSupport: string[];
}

export interface OsClientGroup {
  id: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt';
  name: string;
  icon: string;
  subtitle: string;
  coreKeyword: string;
  notice?: string;
  apps: ClientApp[];
}

export const CLIENT_GROUPS: OsClientGroup[] = [
  {
    id: 'windows',
    name: 'Windows 电脑',
    icon: 'laptop',
    subtitle: 'PC 端高并发、大流量下载与 4K 办公首选',
    coreKeyword: 'Clash Verge Rev 下载, v2rayN 电脑版, Windows 机场客户端',
    notice: 'Windows 端建议优先使用 Clash Verge Rev 并开启 TUN 虚拟网卡模式，可接管全局应用流量（含命令行与游戏）。',
    apps: [
      {
        name: 'Clash Verge Rev',
        badge: '年度首选',
        os: 'windows',
        core: 'Mihomo (Clash.Meta) 内核',
        feature: '现代高颜值界面、多订阅聚合、智能规则分流、一键开启 TUN 虚拟网卡接管系统流量',
        targetUser: '新手与进阶首选',
        downloadLabel: 'GitHub Releases / 官网',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria2']
      },
      {
        name: 'v2rayN',
        badge: '多协议全能',
        os: 'windows',
        core: 'Xray / Sing-box 核心',
        feature: '老牌经典工具，支持全协议手动机房调试、多节点延迟横向测速与详细日志分析',
        targetUser: '多协议调试与极客用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/2dust/v2rayN/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'SOCKS5']
      },
      {
        name: 'FlClash',
        badge: '极简轻量',
        os: 'windows',
        core: 'Mihomo 内核',
        feature: '基于 Flutter 研发的现代简洁界面，内存占用低，支持直接导入 Clash YAML 订阅',
        targetUser: '轻度办公与追求简洁界面的用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Hiddify',
        badge: '多协议通用',
        os: 'windows',
        core: 'Sing-box 核心',
        feature: '开箱即用、自动节点探测选择、支持一键粘贴各格式订阅链接，配置极简',
        targetUser: '不想折腾规则的新手用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/hiddify/hiddify-next/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Hysteria2', 'SSH']
      },
      {
        name: 'Karing',
        badge: '跨平台新秀',
        os: 'windows',
        core: 'Sing-box 核心',
        feature: '全平台统一 UI 设计，支持兼容 Clash、V2ray、Sing-box 等多种复杂订阅格式',
        targetUser: '多设备跨端协同用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/KaringX/karing/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      }
    ]
  },
  {
    id: 'android',
    name: 'Android 安卓',
    icon: 'smartphone',
    subtitle: '移动端省电保活、分应用代理与游戏加速',
    coreKeyword: 'v2rayNG 下载, 安卓机场代理, FlClash 安卓版',
    notice: '安卓系统请在手机设置中将所用客户端加入“电池优化白名单”，避免后台切出时被系统误杀断网。',
    apps: [
      {
        name: 'v2rayNG',
        badge: '安卓装机必备',
        os: 'android',
        core: 'Xray 核心',
        feature: '成熟稳定、支持扫描二维码导入、分应用代理（白名单/黑名单模式）、分流测试',
        targetUser: '所有安卓手机及平板用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'FlClash (Android)',
        badge: '高颜值推荐',
        os: 'android',
        core: 'Mihomo 内核',
        feature: 'Material You 质感设计，动效流畅，支持完整 Clash 策略组切换与节点延迟排序',
        targetUser: '注重手机 UI 体验的用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Hiddify (Android)',
        badge: '智能自选',
        os: 'android',
        core: 'Sing-box 核心',
        feature: '极简卡片式主页，自动检测节点可用性，多语言支持，导入即连',
        targetUser: '初次接触海外网络的小白',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/hiddify/hiddify-next/releases',
        protocolSupport: ['VLESS', 'Trojan', 'Hysteria2']
      },
      {
        name: 'Clash Meta for Android',
        badge: '经典规则',
        os: 'android',
        core: 'Mihomo 内核',
        feature: '深度支持 Clash YAML 规则组，可自定义特定 App 走直连或代理',
        targetUser: '熟悉 Clash 规则体系的高级用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/MetaCubeX/ClashMetaForAndroid/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      }
    ]
  },
  {
    id: 'ios',
    name: 'iOS (iPhone / iPad)',
    icon: 'apple',
    subtitle: '苹果生态流媒体解锁与极致后台稳定性',
    coreKeyword: 'Shadowrocket 下载, 小火箭节点配置, Stash 苹果客户端, Surge 5',
    notice: 'iOS 端主流客户端（如 Shadowrocket、Stash、Surge）在非中国大陆地区 App Store 上架，需使用外区 Apple ID 登录下载。',
    apps: [
      {
        name: 'Shadowrocket (小火箭)',
        badge: '国民级爆款',
        os: 'ios',
        core: '自研高性能代理核心',
        feature: '售价 $2.99，支持扫码导入订阅、规则分流、延迟测速、全局路由与电量深度优化',
        targetUser: 'iPhone / iPad 用户首选必备',
        downloadLabel: 'App Store (美区/港区)',
        downloadUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria2']
      },
      {
        name: 'Stash',
        badge: 'iOS 上的 Clash',
        os: 'ios',
        core: 'Clash 规则引擎',
        feature: '售价 $3.99，完美兼容 Clash 配置文件与策略组切换，界面精致，支持请求覆写与脚本',
        targetUser: '习惯 Clash 逻辑与追剧分流的苹果用户',
        downloadLabel: 'App Store (海外区)',
        downloadUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063349',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Quantumult X (圈 X)',
        badge: '强大脚本重写',
        os: 'ios',
        core: '自研规则核心',
        feature: '售价 $7.99，专为高级玩家设计，支持强大 JavaScript 脚本、URL 重写与精细化策略调度',
        targetUser: '极客、去广告规则与自动化脚本玩家',
        downloadLabel: 'App Store (海外区)',
        downloadUrl: 'https://apps.apple.com/us/app/quantumult-x/id1453926894',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Surge 5',
        badge: '旗舰级开发调试',
        os: 'ios',
        core: '顶级专业网络协议栈',
        feature: '专为网络工程师打造的顶级工具，支持复杂网络环境诊断、抓包调试与增强模式',
        targetUser: '专业开发者与不差钱的极致体验者',
        downloadLabel: 'App Store (官方)',
        downloadUrl: 'https://nssurge.com/',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Snell', 'Shadowsocks']
      }
    ]
  },
  {
    id: 'macos',
    name: 'macOS 苹果电脑',
    icon: 'monitor',
    subtitle: '原生兼容 Apple Silicon M1-M4 与 Intel 双架构',
    coreKeyword: 'Clash Verge Mac 版, Surge Mac, macOS 机场代理工具',
    notice: 'macOS 下载时请注意区分芯片架构：M1/M2/M3/M4 系列选 arm64/Apple Silicon，老款 Intel 选 x64。',
    apps: [
      {
        name: 'Clash Verge Rev (Mac)',
        badge: 'Mac 平台首选',
        os: 'macos',
        core: 'Mihomo 内核',
        feature: '全面支持 macOS 暗色模式与状态栏菜单，集成增强 TUN 模式，终端命令行自动代理',
        targetUser: 'MacBook 与 Mac 桌面端全人群',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Surge for Mac',
        badge: 'Mac 性能怪兽',
        os: 'macos',
        core: 'Surge Engine',
        feature: '深度接管 Mac 系统网络栈，进程级流量追踪，企业级内网穿透与网关中继代理',
        targetUser: '开发者、外贸团队与重度专业用户',
        downloadLabel: '官网下载',
        downloadUrl: 'https://nssurge.com/mac',
        protocolSupport: ['VLESS', 'Trojan', 'Snell', 'Shadowsocks']
      },
      {
        name: 'FlClash (Mac)',
        badge: '极简轻快',
        os: 'macos',
        core: 'Mihomo 内核',
        feature: '轻巧顺滑，资源占用极小，支持一键切换延迟最低节点',
        targetUser: '轻量办公用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/chen08209/FlClash/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan']
      }
    ]
  },
  {
    id: 'linux',
    name: 'Linux 系统',
    icon: 'terminal',
    subtitle: '服务器运维、无头主机与开发环境代理',
    coreKeyword: 'v2rayA Linux, Clash Verge Linux, 命令行代理配置',
    notice: '桌面版提供 AppImage/DEB/RPM 安装包；无桌面或远程 VPS 推荐部署 v2rayA，通过浏览器 Web 界面可视化管理。',
    apps: [
      {
        name: 'Clash Verge Rev (Linux)',
        badge: '桌面图形首选',
        os: 'linux',
        core: 'Mihomo 内核',
        feature: '提供 AppImage 与 DEB 格式，Ubuntu / Debian / Arch Linux 即开即用，支持桌面托盘',
        targetUser: 'Linux 桌面办公与深度开发者',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'v2rayA',
        badge: 'Web 控制台透明代理',
        os: 'linux',
        core: 'Xray / Sing-box',
        feature: '内置 WebUI 服务（默认 2017 端口），一键开启 iptables/nftables 全局透明代理',
        targetUser: 'Linux 服务器、软路由及 Docker 环境',
        downloadLabel: 'GitHub / APT / Docker',
        downloadUrl: 'https://github.com/v2rayA/v2rayA/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      }
    ]
  },
  {
    id: 'openwrt',
    name: '软路由 / OpenWrt',
    icon: 'cpu',
    subtitle: '全屋智能设备、电视盒子与游戏主机无感全局直连',
    coreKeyword: 'OpenClash 安装配置, PassWall2 节点导入, 软路由翻墙',
    notice: '软路由安装前请核对 CPU 架构（x86_64、aarch64_cortex-a53 等）与系统内核依赖，建议先备份路由器配置。',
    apps: [
      {
        name: 'OpenClash',
        badge: '软路由霸主',
        os: 'openwrt',
        core: 'Mihomo / Clash.Meta 核心',
        feature: '家庭局域网透明网关，Apple TV、PS5、Switch、智能家居无感分流，DNS 防污染防泄漏',
        targetUser: '软路由家庭网络中枢与发烧友',
        downloadLabel: 'GitHub IPK',
        downloadUrl: 'https://github.com/vernesong/OpenClash/releases',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'PassWall2',
        badge: '稳定经典',
        os: 'openwrt',
        core: 'Xray / Sing-box 核心',
        feature: '老牌软路由插件，双节点负载均衡、分流灵活，长期运行内存占用极低',
        targetUser: '追求极致长期不掉线的软路由用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/xiaorouji/openwrt-passwall',
        protocolSupport: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks']
      },
      {
        name: 'Nikki',
        badge: '现代轻量 (24.10+)',
        os: 'openwrt',
        core: 'Mihomo 核心',
        feature: '全新现代架构，专为 OpenWrt 24.10+ 优化开发，策略组更直观，开销更低',
        targetUser: '新版 OpenWrt 路由器固件用户',
        downloadLabel: 'GitHub Releases',
        downloadUrl: 'https://github.com/nikkinikki-org/OpenWrt-nikki',
        protocolSupport: ['VLESS', 'VMess', 'Trojan']
      }
    ]
  }
];
