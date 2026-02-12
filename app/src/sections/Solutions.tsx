import { useEffect, useRef, useState } from 'react';
import { 
  Users, 
  Network, 
  Shield, 
  Lock, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const solutions = [
  {
    id: 'auth',
    icon: Users,
    title: '认证',
    subtitle: '统一身份入口',
    description: '基于 UniAuth 统一身份与访问管理平台，为企业提供面向远程终端、本地终端及应用系统的统一认证与准入能力。',
    features: [
      '远程终端认证',
      '本地终端认证',
      '应用系统认证',
      '终端准入控制',
      '应用认证集成',
    ],
    details: [
      { title: '多种 IdP 支持', items: ['AD, LDAP', 'SAML: Azure AD, Google Workspace', 'OAuth 2.0/OIDC: 飞书、钉钉、企微'] },
      { title: '认证安全措施', items: ['密码强度/周期策略', '多因素认证(MFA)', '通行密钥(Passkey)'] },
    ],
  },
  {
    id: 'network',
    icon: Network,
    title: '组网',
    subtitle: '智能网络连接',
    description: '面向企业多分支、多云与全球化业务场景，提供统一接入与智能组网能力，替代传统专线与复杂网络架构。',
    features: [
      '全球骨干网接入',
      '智能应用选路',
      '隐藏公网暴露面',
      '广域网组网',
      '局域网 Wi-Fi',
    ],
    details: [
      { title: '质量保证', items: ['全球骨干网及 PoP 点', '基于应用的智能选路'] },
      { title: '信道加密', items: ['端到端加密', '国产商用密码支持'] },
    ],
  },
  {
    id: 'control',
    icon: Shield,
    title: '管控',
    subtitle: '统一安全控制',
    description: '基于 UniCtrl 统一控制平面，将分散的网络与安全策略集中治理，实现跨网络、跨位置的一致策略执行。',
    features: [
      '防火墙访问控制',
      '上网行为管理',
      '威胁情报防护',
      '攻击防护',
      '终端状态检测',
    ],
    details: [
      { title: '防火墙', items: ['基于身份和应用的策略', '阻断网络层攻击'] },
      { title: '威胁情报', items: ['百万级威胁情报库', '实时阻断恶意流量'] },
    ],
  },
  {
    id: 'isolation',
    icon: Lock,
    title: '隔离',
    subtitle: '零信任访问',
    description: '以零信任理念为基础，替代传统 VPN 和基于网络边界的访问模式，实现"最小权限、按需访问"。',
    features: [
      '用户-应用隔离',
      '远程用户访问',
      '本地用户访问',
      '数据中心隔离',
      '分支园区隔离',
    ],
    details: [
      { title: 'User-App 隔离', items: ['远程/本地用户隔离', '应用级访问控制'] },
      { title: '设备隔离', items: ['每台终端独立网络', '无需手动修改配置'] },
    ],
  },
];

interface SolutionsProps {
  isCompact?: boolean;
}

export default function Solutions({ isCompact = false }: SolutionsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSolution, setActiveSolution] = useState<string | null>(null);

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

  return (
    <section ref={sectionRef} className={`${isCompact ? 'py-16' : 'py-24'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {!isCompact && (
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-sm font-medium mb-4">
              UniSASE 方案
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
              坚如磐石的网络与安全
            </h2>
             <p className="text-lg text-brand-gray max-w-3xl mx-auto mb-8">
              UniSASE 以统一身份、统一控制与统一可视化为核心能力，覆盖连接、管控、隔离与分析的完整闭环
            </p>
{/* UniSASE 架构图 */}
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden p-6 sm:p-10">
        <img 
          src="/solution.png"
          alt="UniSASE 统一身份、控制与可视化架构图" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  
          </div>
        )}

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`group relative bg-brand-light-gray rounded-2xl p-6 lg:p-8 border-2 border-transparent hover:border-brand-green/30 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${activeSolution === solution.id ? 'border-brand-green/50 shadow-lg' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveSolution(activeSolution === solution.id ? null : solution.id)}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green group-hover:scale-110 transition-all duration-300">
                  <solution.icon className="w-6 h-6 text-brand-green group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-brand-dark">{solution.title}</h3>
                    <span className="text-sm text-brand-green font-medium">{solution.subtitle}</span>
                  </div>
                  <p className="text-sm text-brand-gray mt-1">{solution.description}</p>
                </div>
                <ArrowRight className={`w-5 h-5 text-brand-gray transition-transform ${activeSolution === solution.id ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-xs text-brand-gray border border-gray-100"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-green" />
                    {feature}
                  </span>
                ))}
              </div>

              {/* Expanded Details */}
              {activeSolution === solution.id && (
                <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {solution.details.map((detail) => (
                      <div key={detail.title}>
                        <h4 className="font-semibold text-brand-dark mb-2">{detail.title}</h4>
                        <ul className="space-y-1">
                          {detail.items.map((item) => (
                            <li key={item} className="text-sm text-brand-gray flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-brand-green" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        {!isCompact && (
          <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-semibold rounded-xl hover:bg-brand-green/90 hover:shadow-glow transition-all"
             onClick={() => {
  window.location.href = 'mailto:business@unisase.cn?subject=获取定制化方案';
  
  setTimeout(() => {
    const email = 'business@unisase.cn';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    alert(`📧 获取定制化方案\n\n请发送邮件至：${email}\n（已自动复制到剪贴板）`);
  }, 500);
}}
            >
              获取定制化方案
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
