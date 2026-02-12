import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', labelZh: '首页' },
  { id: 'platform', label: 'Platform', labelZh: '产品中心' },
  { id: 'solutions', label: 'Solutions', labelZh: '解决方案' },
  { id: 'resources', label: 'Resources', labelZh: '支持与服务' },
  { id: 'company', label: 'Company', labelZh: '关于我们' },
];

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-white-800/60 backdrop-blur-xl shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/logo.png" 
              alt="UniSASE Logo" 
              className="h-14 w-auto"
            />
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? isScrolled
                      ? 'bg-brand-green/10 text-brand-green'
                      : 'bg-white/20 text-green-800'
                    : isScrolled
                      ? 'text-brand-gray hover:text-brand-green hover:bg-brand-green/5'
                      : 'text-green-800/80 hover:text-green-800 hover:bg-white/10'
                }`}
              >
                {item.labelZh}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className={`text-sm font-medium ${
                isScrolled 
                  ? 'text-brand-gray hover:text-brand-green' 
                  : 'text-green-800/80 hover:text-green-800 hover:bg-white/10'
              }`}
              onClick={() => onPageChange('company')}
            >
              联系我们
            </Button>
           
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-brand-dark' : 'text-green-800'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-brand-dark' : 'text-green-800'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-brand-green/10 text-brand-green'
                    : 'text-brand-gray hover:bg-brand-green/5 hover:text-brand-green'
                }`}
              >
                {item.labelZh}
              </button>
            ))}
            <div className="pt-4 border-t space-y-2">
              <Button
                variant="outline"
                className="w-full border-brand-green text-brand-green"
                onClick={() => {
  window.location.href = 'mailto:business@unisase.cn?subject=预约演示';
  
  setTimeout(() => {
    const email = 'business@unisase.cn';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    alert(`📧 预约演示\n\n请发送邮件至：${email}\n（已自动复制到剪贴板）`);
  }, 500);
}}
              >
                联系我们
              </Button>
              <Button
                className="w-full bg-brand-green hover:bg-brand-green/90 text-white"
                onClick={() => {
  window.location.href = 'mailto:business@unisase.cn?subject=预约演示';
  
  setTimeout(() => {
    const email = 'business@unisase.cn';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    alert(`📧 预约演示\n\n请发送邮件至：${email}\n（已自动复制到剪贴板）`);
  }, 500);
}}
              >
                预约演示
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
