import { Mail, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: '产品',
    links: [
      { label: 'UniAuth 统一身份', href: '#platform' },
      { label: 'UniCtrl 统一控制', href: '#platform' },
      { label: 'UniLog 统一日志', href: '#platform' },
      { label: 'UniGate 统一智能安全网关', href: '#platform' },
      { label: 'UniMobile 统一移动接入', href: '#platform' },
      { label: 'UniAP 统一接入点', href: '#platform' },
    ],
  },
  {
    title: '解决方案',
    links: [
      { label: '统一认证', href: '#solutions' },
      { label: '智能组网', href: '#solutions' },
      { label: '安全管控', href: '#solutions' },
      { label: '零信任隔离', href: '#solutions' },
    ],
  },
  {
    title: '支持',
    links: [
      // { label: '产品文档', href: '#resources' },
      { label: '软件下载', href: '#resources' },
      { label: '联系我们', href: '#company' },
    ],
  },
];

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#') && onPageChange) {
      const page = href.replace('#', '');
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark relative overflow-hidden">
      {/* Top Signal Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-green to-transparent" />
      <div className="absolute top-0 left-0 w-20 h-px bg-brand-green-light animate-scan-line" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="UniSASE Logo" 
                className="h-12 w-auto"
              />
              {/* <div>
                <span className="font-bold text-xl text-white">磐络</span>
                <span className="text-xs text-white/60 block">UniSASE</span>
              </div> */}
            </div>
            <p className="text-white/60 mb-6 leading-relaxed max-w-sm">
              坚如磐石的网络与安全。统一网络、安全、身份与可视化能力——更快交付、更易运营、更可控风险。
            </p>
            <div className="space-y-3">
              <a 
                href="mailto:business@unisase.cn"
                className="flex items-center gap-3 text-white/60 hover:text-brand-green-light transition-colors"
              >
                <Mail className="w-5 h-5" />
                business@unisase.cn
              </a>
              <div className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>北京市海淀区东升科技园北街2号院5号楼10层101</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold text-white mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto') ? (
                      <a 
                        href={link.href}
                        className="text-white/60 hover:text-brand-green-light transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-white/60 hover:text-brand-green-light transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            © 2025 安信道合（北京）科技发展有限公司. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>
              <a href="https://beian.miit.gov.cn/#/Integrated/index" className="hover:text-white/60 transition-colors">
              京ICP备2025109513号
            </a>
              </span>
            <a href="https://www.unisase.cn/privacy_policy_en" className="hover:text-white/60 transition-colors">
              隐私政策
            </a>
            {/* <a href="#" className="hover:text-white/60 transition-colors">
              服务条款
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
