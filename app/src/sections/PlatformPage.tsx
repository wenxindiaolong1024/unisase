
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Users, 
  Shield, 
  BarChart3,
  CheckCircle2,
  Server,
  Lock,
  Eye,
  Database,
  Fingerprint,
  Globe,
  Zap,
  Network,      // UniGate 网关
  Smartphone,   // UniMobile 移动
  Wifi,         // UniAP 接入点
} from 'lucide-react';

const products = [
  {
    id: 'uniauth',
    icon: Users,
    name: 'UniAuth',
    subtitle: '统一身份认证',
    description: '企业级统一身份与访问管理（IAM）平台，让身份成为安全与访问的唯一入口。',
    highlights: [  // 新增
    '丰富的 IdP 对接与多协议集成',
    '完整的认证安全策略（MFA / 会话控制）',
    '统一认证日志与审计追踪',
  ],
    fullDescription: 'UniAuth 是面向企业级场景打造的统一身份与访问管理（IAM）平台，提供集中化身份治理、单点登录（SSO）、多协议认证集成与细粒度授权控制能力。\n\nUniAuth 支持 OAuth 2.0 / OpenID Connect / SAML / LDAP 等主流标准协议，兼容 Web、移动端及各类业务系统的快速接入；同时内置多因素认证（MFA）、组织与多租户管理、角色与策略模型（RBAC / ABAC）、用户生命周期管理以及会话与审计日志等完整安全能力，实现"统一身份入口、统一权限管控、统一安全审计"。\n\nUniAuth 采用模块化、可扩展架构设计，支持私有化部署与深度定制，适用于企业准入认证、内网系统整合、SaaS 平台账号体系建设以及零信任接入等多种业务场景。',
    features: [
      { icon: Database, title: '多种 IdP 支持', desc: 'AD, LDAP, SAML, OAuth 2.0/OIDC' },
      { icon: Lock, title: '认证安全措施', desc: 'MFA, Passkey, 安全策略' },
      { icon: Globe, title: '多端接入', desc: '远程、本地终端及应用' },
      { icon: Fingerprint, title: '多端身份互通', desc: '客户端到设备，设备到设备' },
    ],
    details: [
      {
        title: '01 多种 IdP 支持',
        items: [
          'AD, LDAP 集成',
          'SAML: Azure AD, Google Workspace',
          'OAuth 2.0/OIDC: 飞书、钉钉、企微',
        ],
      },
      {
        title: '02 认证安全措施',
        items: [
          '密码强度/周期策略，账号锁定',
          '多因素认证(MFA)及人机认证',
          '通行密钥: 指纹、人脸识别',
        ],
      },
      {
        title: '03 远程、本地终端及应用',
        items: [
          '远程: 客户端认证',
          '本地: Web 认证',
          '应用: 用户认证及 SSO',
        ],
      },
      {
        title: '04 多端身份互通',
        items: [
          '客户端->设备',
          '设备->设备',
          
        ],
      },
    ],
  },
  {
    id: 'unictrl',
    icon: Shield,
    name: 'UniCtrl',
    subtitle: '统一控制',
    description: '统一策略控制与编排引擎，让网络与安全真正可控。',
    fullDescription: 'UniCtrl 以身份与应用为核心，将网络访问控制、安全策略与业务规则统一建模，实现跨总部、分支机构、云环境及远程接入场景的一致策略执行。平台支持基于用户、设备、应用、位置与风险状态的多维策略控制。',
    features: [
      { icon: Server, title: '原生融合', desc: '网络与安全功能深度融合' },
      { icon: Zap, title: '高效引擎', desc: '全功能开启延迟<1ms' },
      { icon: CheckCircle2, title: '高可靠', desc: '双机高可用，秒级切换' },
      { icon: Globe, title: '多种接入', desc: '网关、客户端、无线' },
    ],
    details: [
      {
        title: '主要功能',
        items: [
          '是谁?要做什么?(身份认证、应用识别)',
          '路怎么走?(基于身份与应用的流量调度)',
          '如何管控?(基于身份与应用的安全管控)',
          '结果如何?(基于身份与应用的全量会话分析)',
        ],
      },
      {
        title: '01身份认证、应用识别',
        items: [
          '身份管理覆盖员工等对象，支持局域网与远程办公场景',
          '身份认证用 AD/LDAP 等技术，网络层控 IP、协议等要素',
          '应用管理面向私有、公共应用，从三类维度识别',
          '架构通过身份与应用管控，实现访问与资源管理',
        ],
      },
      {
        title: '02基于身份与应用的流量调度',
        items: [
          '路由策略：基于身份与应用',
          '一致的策略：本地与远程用户',
          '支持 SD-WAN 骨干网',
          '基于 SLA 自动切换路径',
          '端到端信道加密及国产商用密码',
        ],
      },
      {
        title: '03基于身份与应用的安全管控',
        items: [
          '访问、行为策略: 基于终端状态、身份与应用',
          '一致的策略：本地与远程用户',
          '精准的威胁情报：针对病毒、勒索、挖矿等',
          '基于时间生效',
        ],
      },
      {
        title: '04终端检测',
        items: [
          '终端认证：是否是允许的终端设备',
          '终端状态检测：针对防火墙、杀毒软件、进程等',
          '终端状态持续检测',
        ],
      },
    ],
  },
  {
    id: 'unilog',
    icon: BarChart3,
    name: 'UniLog',
    subtitle: '统一日志分析',
    description: '统一可视化与分析，让风险与问题一目了然。',
    fullDescription: 'UniLog 是 UniSASE 的 统一日志、可视化与分析系统，为企业提供跨网络与安全域的全量数据采集、集中分析与统一审计能力。\n\n​    UniLog 汇聚来自用户访问、网络连接、安全策略、应用行为与威胁检测的多维日志数据，构建统一的数据视图，帮助企业实现对 运行状态、访问行为与安全风险的全局可见性。\n\n​    平台支持实时监控、可视化分析、审计取证与告警联动，可与策略控制与威胁情报深度协同，形成 “可视化—分析—响应—优化” 的闭环机制，持续提升企业的安全运营能力与业务体验。',
    features: [
      { icon: Database, title: '全量日志', desc: '记录全量网络会话日志' },
      { icon: Eye, title: '网络分析', desc: '时延、丢包分析' },
      { icon: BarChart3, title: '行为分析', desc: '用户行为、安全、体验' },
      { icon: CheckCircle2, title: '合规审计', desc: '满足公安部 151 号令' },
    ],
    details: [
      {
        title: '基于身份和应用的全量会话分析',
        items: [
          '记录全量的真实访问会话（180 天）',
          '行为、安全及体验分析',
          '满足公安部第 151 号令',
        ],
      },
      {
        title: '网络质量分析',
        items: [
          '网络时延、丢包分析',
          '用户体验可视化',
        ],
      },
      {
        title: '安全事件分析',
        items: [
          '威胁检测与告警',
          '安全趋势分析',
        ],
      },
      
    ],
  },
{
  id: 'unigate',
  icon: Network,
  name: 'UniGate',
  subtitle: '统一网关',
  description: '企业级统一应用网关，实现应用发布、流量调度与安全防护的统一入口。',
  highlights: [
    '多协议应用发布（HTTP/HTTPS/TCP）',
    '智能负载均衡与流量调度',
    'Web应用防火墙（WAF）防护',
  ],
  fullDescription: 'UniGate 是面向企业级场景打造的统一应用网关（UAG）平台，提供应用发布、流量调度、安全防护与访问控制的统一入口能力。\n\nUniGate 支持 HTTP/HTTPS/TCP/UDP 等多协议应用发布，兼容传统应用与现代微服务架构；同时内置智能负载均衡、全球流量调度、Web应用防火墙（WAF）、DDoS防护、Bot管理等完整安全能力，实现"统一应用入口、统一流量管控、统一安全防护"。\n\nUniGate 采用云原生、可扩展架构设计，支持多云部署与弹性伸缩，适用于企业应用发布、多云流量调度、零信任接入网关以及API网关等多种业务场景。',
  features: [
    { icon: Globe, title: '多协议发布', desc: 'HTTP, HTTPS, TCP, UDP' },
    { icon: Shield, title: '安全防护', desc: 'WAF, DDoS, Bot管理' },
    { icon: Zap, title: '智能调度', desc: '负载均衡, 流量分发' },
    { icon: Lock, title: '访问控制', desc: '零信任, 细粒度授权' },
  ],
  details: [
    {
      title: '01 应用发布',
      items: [
        'Web应用代理与发布',
        'TCP/UDP四层代理',
        'API网关与路由管理',
      ],
    },
    {
      title: '02 流量调度',
      items: [
        '智能负载均衡算法',
        '全球流量就近调度',
        '健康检查与故障转移',
      ],
    },
    {
      title: '03 安全防护',
      items: [
        'Web应用防火墙（WAF）',
        'DDoS攻击防护',
        'Bot管理与验证码',
      ],
    },
  ],
},
{
  id: 'unimobile',
  icon: Smartphone,
  name: 'UniMobile',
  subtitle: '统一移动接入',
  description: '企业级移动设备管理与安全接入平台，实现移动终端的统一管控与安全访问。',
  highlights: [
    '移动设备全生命周期管理（MDM）',
    '企业应用安全容器（MAM）',
    '移动端零信任安全接入',
  ],
  fullDescription: 'UniMobile 是面向企业级场景打造的统一移动接入（EMM）平台，提供移动设备管理、应用安全、网络接入与数据保护的统一管控能力。\n\nUniMobile 支持 iOS、Android 等主流移动平台，提供设备注册、配置管理、应用分发、安全策略、远程擦除等完整MDM能力；同时内置企业应用安全容器、移动VPN、单点登录、数据防泄漏等安全功能，实现"统一设备管控、统一应用安全、统一网络接入"。\n\nUniMobile 采用轻量化、易部署架构设计，支持私有化与SaaS化部署，适用于企业移动办公、BYOD管理、外勤人员接入以及移动业务系统安全访问等多种业务场景。',
  features: [
    { icon: Smartphone, title: '设备管理', desc: 'MDM, 配置, 远程控制' },
    { icon: Lock, title: '应用安全', desc: 'MAM, 安全容器, 防泄漏' },
    { icon: Globe, title: '安全接入', desc: '移动VPN, 零信任' },
    { icon: Shield, title: '数据保护', desc: '加密, 远程擦除' },
  ],
  details: [
    {
      title: '01 设备管理',
      items: [
        '设备注册与资产盘点',
        '配置策略远程下发',
        '远程锁定与数据擦除',
      ],
    },
    {
      title: '02 应用安全',
      items: [
        '企业应用安全容器',
        '应用黑白名单管理',
        '数据防泄漏（DLP）',
      ],
    },
    {
      title: '03 网络接入',
      items: [
        '移动VPN安全隧道',
        '零信任持续验证',
        '单点登录（SSO）',
      ],
    },
  ],
},
{
  id: 'uniap',
  icon: Wifi,
  name: 'UniAP',
  subtitle: '统一接入点',
  description: '企业级无线接入与安全认证平台，实现有线无线网络的统一接入与访问控制。',
  highlights: [
    '有线无线网络统一接入认证',
    '基于身份的网络访问控制（NAC）',
    '终端安全合规检查与隔离',
  ],
  fullDescription: 'UniAP 是面向企业级场景打造的统一接入点（NAC）平台，提供有线无线网络接入、身份认证、访问控制与终端安全的统一管理能力。\n\nUniAP 支持 802.1X、MAC认证、Portal认证等多种接入方式，兼容主流网络设备厂商；同时内置终端安全合规检查、访客网络管理、IoT设备识别、微分段隔离等安全功能，实现"统一网络接入、统一身份认证、统一安全管控"。\n\nUniAP 采用分布式、高可用架构设计，支持集中管理与分级部署，适用于企业园区网络、分支机构接入、访客网络管理以及IoT设备安全接入等多种业务场景。',
  features: [
    { icon: Wifi, title: '无线接入', desc: 'WiFi6, 漫游, 定位' },
    { icon: Network, title: '有线接入', desc: '802.1X, MAC认证' },
    { icon: Shield, title: '安全合规', desc: '终端检查, 微分段' },
    { icon: Lock, title: '访问控制', desc: 'NAC, 动态授权' },
  ],
  details: [
    {
      title: '01 接入认证',
      items: [
        '802.1X企业级认证',
        'MAC地址白名单',
        'Portal访客认证',
      ],
    },
    {
      title: '02 安全合规',
      items: [
        '终端安全检查（杀毒软件、补丁）',
        '不合规终端自动隔离',
        'IoT设备识别与管控',
      ],
    },
    {
      title: '03 网络管控',
      items: [
        '基于身份的动态授权',
        '网络微分段隔离',
        '访客网络与员工网络分离',
      ],
    },
  ],
}
];

export default function PlatformPage() {
  const [activeProduct, setActiveProduct] = useState('uniauth');
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.replace('#', '');
    setActiveProduct(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentProduct = products.find(p => p.id === activeProduct) || products[0] || {};

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
     <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-50 to-green-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-green rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-green-light rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/20 text-white text-sm font-medium mb-6">
              Platform 产品中心
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark mb-6">
              重新定义企业网络安全边界
            </h1>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto mb-8">
              基于零信任架构的 SASE 解决方案，随时随地安全访问
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-brand-green hover:bg-brand-green-light text-white font-semibold px-8"
                onClick={() => {
  window.location.href = 'mailto:business@unisase.cn?subject=预约演示';
  
  setTimeout(() => {
    const email = 'business@unisase.cn';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    alert(`📧 预约演示\n\n请发送邮件至：${email}\n（已自动复制到剪贴板）\n\n主题：预约演示`);
  }, 500);
}}
              >
                预约演示
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
             
            </div>
          </div>
        </div>
      </section>

      {/* Products Navigation */}
      <section ref={sectionRef} className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  activeProduct === product.id
                    ? 'border-brand-green bg-brand-green/5'
                    : 'border-gray-100 hover:border-brand-green/30 hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeProduct === product.id ? 'bg-brand-green' : 'bg-brand-green/10'
                }`}>
                  <product.icon className={`w-5 h-5 ${activeProduct === product.id ? 'text-white' : 'text-brand-green'}`} />
                </div>
                <div className="text-left">
                  <div className={`font-semibold ${activeProduct === product.id ? 'text-brand-green' : 'text-brand-dark'}`}>
                    {product.name}
                  </div>
                  <div className="text-xs text-brand-gray">{product.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Detail */}
    <section id={currentProduct.id} className="py-24 bg-brand-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-brand-green flex items-center justify-center">
                  <currentProduct.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-brand-dark">{currentProduct.name}</h2>
                  <p className="text-brand-green font-medium">{currentProduct.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                {currentProduct.description}
              </p>
              
             {/* 核心亮点列表 */}
{currentProduct.highlights && (
  <ul className="space-y-2 mb-6">
    {currentProduct.highlights.map((item, idx) => (
      <li key={idx} className="flex items-start gap-2 text-brand-gray">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
)}

{/* fullDescription 段落 */}
<div className="space-y-4 mb-8">
  {currentProduct.fullDescription.split('\n\n').map((paragraph, idx) => (
    <p key={idx} className="text-brand-gray leading-relaxed">
      {paragraph}
    </p>
  ))}
</div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentProduct.features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">{feature.title}</div>
                      <div className="text-xs text-brand-gray">{feature.desc}</div>
                    </div>
                  </div>
                        ))}
        
       {/* 只在 UniCtrl 标签下显示图片 */}
{currentProduct.id === 'unictrl' && (
  <div className="col-span-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
    <img 
      src="/product-detail.png" 
      alt="UniCtrl 详情图" 
      className="w-full h-auto object-cover rounded-lg" 
    />
  </div>
)}
        
      </div>

              <Button
                className="bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => {
  window.location.href = 'mailto:business@unisase.cn?subject=预约演示';
  
  setTimeout(() => {
    const email = 'business@unisase.cn';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    alert(`📧 预约演示\n\n请发送邮件至：${email}\n（已自动复制到剪贴板）\n\n主题：预约演示`);
  }, 500);
}}
              >
                了解详情
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {/* Right Content - Details */}
            <div className="space-y-6">
              {currentProduct.details.map((detail, index) => (
                <div
                  key={detail.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-lg font-bold text-brand-dark mb-4">{detail.title}</h3>
                  <ul className="space-y-2">
                    {detail.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-brand-gray">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
