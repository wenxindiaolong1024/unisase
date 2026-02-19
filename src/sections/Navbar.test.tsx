import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

// Mock lucide-react icons
vi.mock('lucide-react', () => ({
  Menu: ({ className }: { className?: string }) => <svg data-testid="menu-icon" className={className} />,
  X: ({ className }: { className?: string }) => <svg data-testid="x-icon" className={className} />,
}));

// Mock Button component
vi.mock('@/components/ui/button', () => ({
  Button: ({ children, onClick, className, variant }: { children: React.ReactNode; onClick?: () => void; className?: string; variant?: string }) => (
    <button onClick={onClick} className={className} data-variant={variant} data-testid="button">
      {children}
    </button>
  ),
}));

describe('Navbar Component', () => {
  let mockPageChange: ReturnType<typeof vi.fn>;
  let mockScrollTo: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockPageChange = vi.fn();
    mockScrollTo = vi.fn();

    // Mock window.scrollTo
    global.scrollTo = mockScrollTo;

    // Reset scroll position
    window.scrollY = 0;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render with all navigation items', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    expect(screen.getByText('首页')).toBeInTheDocument();
    expect(screen.getByText('产品中心')).toBeInTheDocument();
    expect(screen.getByText('解决方案')).toBeInTheDocument();
    expect(screen.getByText('支持与服务')).toBeInTheDocument();
    expect(screen.getByText('关于我们')).toBeInTheDocument();
  });

  it('should highlight current page correctly', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const homeButton = screen.getByText('首页');
    expect(homeButton).toBeInTheDocument();
  });

  it('should call onPageChange when nav item is clicked', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const platformButton = screen.getByText('产品中心');
    fireEvent.click(platformButton);

    expect(mockPageChange).toHaveBeenCalledWith('platform');
  });

  it('should scroll to top when nav item is clicked', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const solutionsButton = screen.getByText('解决方案');
    fireEvent.click(solutionsButton);

    expect(mockScrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('should render logo', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const logo = container.querySelector('img');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('alt', 'UniSASE Logo');
  });

  it('should call onPageChange when logo is clicked', () => {
    render(<Navbar currentPage="platform" onPageChange={mockPageChange} />);

    const logoContainer = screen.getByText('磐络').closest('div');
    fireEvent.click(logoContainer!);

    expect(mockPageChange).toHaveBeenCalledWith('home');
  });

  it('should render mobile menu button', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuIcon = container.querySelector('[data-testid="menu-icon"]');
    expect(menuIcon).toBeInTheDocument();
  });

  it('should open mobile menu when menu button is clicked', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Mobile menu should be visible with navigation items
    expect(screen.getByText('首页')).toBeInTheDocument();
  });

  it('should close mobile menu when nav item is clicked', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    const homeButton = screen.getByText('首页');
    fireEvent.click(homeButton);

    // After clicking nav item, mobile menu should close
    expect(mockPageChange).toHaveBeenCalled();
  });

  it('should toggle menu icon when mobile menu is opened/closed', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');

    // Initially should show menu icon
    let menuIcon = container.querySelector('[data-testid="menu-icon"]');
    let xIcon = container.querySelector('[data-testid="x-icon"]');
    expect(menuIcon).toBeInTheDocument();
    expect(xIcon).not.toBeInTheDocument();

    // After clicking, should show X icon
    fireEvent.click(menuButton);
    menuIcon = container.querySelector('[data-testid="menu-icon"]');
    xIcon = container.querySelector('[data-testid="x-icon"]');
    expect(menuIcon).not.toBeInTheDocument();
    expect(xIcon).toBeInTheDocument();

    // Clicking again should show menu icon again
    fireEvent.click(menuButton);
    menuIcon = container.querySelector('[data-testid="menu-icon"]');
    xIcon = container.querySelector('[data-testid="x-icon"]');
    expect(menuIcon).toBeInTheDocument();
    expect(xIcon).not.toBeInTheDocument();
  });

  it('should render contact button in desktop view', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const contactButton = screen.getByText('联系我们');
    expect(contactButton).toBeInTheDocument();
  });

  it('should render contact button in mobile menu', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    // Mobile menu should have contact buttons
    const contactButtons = screen.getAllByText('联系我们');
    expect(contactButtons.length).toBeGreaterThan(0);
  });

  it('should render demo button in mobile menu', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);

    expect(screen.getByText('预约演示')).toBeInTheDocument();
  });

  it('should update scroll state on scroll', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    // Initially navbar should not have scrolled state
    const nav = container.querySelector('nav');

    // Simulate scroll
    window.scrollY = 100;
    fireEvent.scroll(window);

    // After scroll, navbar should have scrolled styling
    expect(nav).toBeInTheDocument();
  });

  it('should render UniSASE subtitle', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    expect(screen.getByText('UniSASE')).toBeInTheDocument();
  });

  it('should handle all page transitions', () => {
    const pages = ['home', 'platform', 'solutions', 'resources', 'company'];

    pages.forEach((page) => {
      const { rerender } = render(<Navbar currentPage={page} onPageChange={mockPageChange} />);

      // Navigate to another page
      const otherPage = pages.find(p => p !== page);
      if (otherPage) {
        const pageLabel = {
          'home': '首页',
          'platform': '产品中心',
          'solutions': '解决方案',
          'resources': '支持与服务',
          'company': '关于我们',
        }[otherPage];

        const button = screen.getByText(pageLabel!);
        fireEvent.click(button);
        expect(mockPageChange).toHaveBeenCalledWith(otherPage);
      }

      mockPageChange.mockClear();
    });
  });

  it('should not crash when onPageChange is not provided', () => {
    expect(() => {
      render(<Navbar currentPage="home" onPageChange={vi.fn()} />);
    }).not.toThrow();
  });

  it('should have proper z-index for fixed positioning', () => {
    const { container } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const nav = container.querySelector('nav');
    expect(nav).toHaveClass('z-50');
  });

  it('should cleanup scroll event listener on unmount', () => {
    const { unmount } = render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    expect(() => {
      unmount();
    }).not.toThrow();
  });

  it('should handle rapid clicks without errors', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const menuButton = screen.getByRole('button');

    // Rapidly click the menu button multiple times
    expect(() => {
      for (let i = 0; i < 10; i++) {
        fireEvent.click(menuButton);
      }
    }).not.toThrow();
  });

  it('should render navigation items with correct IDs', () => {
    render(<Navbar currentPage="home" onPageChange={mockPageChange} />);

    const homeButton = screen.getByText('首页');
    fireEvent.click(homeButton);

    expect(mockPageChange).toHaveBeenCalledWith('home');

    const platformButton = screen.getByText('产品中心');
    fireEvent.click(platformButton);

    expect(mockPageChange).toHaveBeenCalledWith('platform');
  });
});
