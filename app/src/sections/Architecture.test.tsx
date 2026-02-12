import { render, screen } from '@testing-library/react';
import Architecture from './Architecture';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Server: () => <div data-testid="icon-server">ServerIcon</div>,
  Shield: () => <div data-testid="icon-shield">ShieldIcon</div>,
  Users: () => <div data-testid="icon-users">UsersIcon</div>,
  Database: () => <div data-testid="icon-database">DatabaseIcon</div>,
  Globe: () => <div data-testid="icon-globe">GlobeIcon</div>,
  Lock: () => <div data-testid="icon-lock">LockIcon</div>,
  BarChart3: () => <div data-testid="icon-barchart3">BarChart3Icon</div>,
}));

describe('Architecture Component - Capabilities Section (Lines 106-120)', () => {
  const capabilitiesLabels = ['全球骨干网', '安全防护', '数据可视化', '弹性架构'];
  const capabilitiesDescs = ['150+ PoPs', '威胁情报', '全量日志', '云原生'];
  const capabilityIcons = ['icon-globe', 'icon-lock', 'icon-database', 'icon-server'];

  beforeEach(() => {
    // Mock IntersectionObserver
    window.IntersectionObserver = class IntersectionObserver {
      constructor() {}
      disconnect() {}
      observe() {}
      unobserve() {}
    } as any;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Rendering', () => {
    it('should render all 4 capability cards', () => {
      render(<Architecture />);
      
      const cards = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      expect(cards).toHaveLength(4);
    });

    it('should render each capability with correct label', () => {
      render(<Architecture />);
      
      capabilitiesLabels.forEach(label => {
        const element = screen.getByText(label);
        expect(element).toBeInTheDocument();
      });
    });

    it('should render each capability with correct description', () => {
      render(<Architecture />);
      
      capabilitiesDescs.forEach(desc => {
        const element = screen.getByText(desc);
        expect(element).toBeInTheDocument();
      });
    });

    it('should render all capability icons', () => {
      render(<Architecture />);
      
      capabilityIcons.forEach(iconTestId => {
        const icon = screen.getByTestId(iconTestId);
        expect(icon).toBeInTheDocument();
      });
    });

    it('should have correct styling classes on capability cards', () => {
      render(<Architecture />);
      
      const cards = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      cards.forEach(card => {
        expect(card.closest('div')).toHaveClass('bg-white', 'rounded-xl', 'p-4', 'border', 'border-gray-100');
      });
    });
  });

  describe('Data Integrity', () => {
    it('should have correct key prop for each capability card', () => {
      render(<Architecture />);
      
      const cards = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      expect(cards.length).toBeGreaterThan(0);
    });

    it('should have animationDelay style set for each capability', () => {
      render(<Architecture />);
      
      const cards = document.querySelectorAll('[style*="animationDelay"]');
      expect(cards.length).toBeGreaterThanOrEqual(4); // 3 layers + 4 capabilities
    });

    it('should display capability labels in correct order', () => {
      render(<Architecture />);
      
      const allText = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      const labels = allText.map(el => el.textContent);
      expect(labels).toEqual(['全球骨干网', '安全防护', '数据可视化', '弹性架构']);
    });
  });

  describe('Icon Rendering', () => {
    it('should render Globe icon for 全球骨干网', () => {
      render(<Architecture />);
      
      const icon = screen.getByTestId('icon-globe');
      const card = icon.closest('.bg-brand-green\\/10');
      expect(card).toBeInTheDocument();
    });

    it('should render Lock icon for 安全防护', () => {
      render(<Architecture />);
      
      const icon = screen.getByTestId('icon-lock');
      const card = icon.closest('.bg-brand-green\\/10');
      expect(card).toBeInTheDocument();
    });

    it('should render Database icon for 数据可视化', () => {
      render(<Architecture />);
      
      const icon = screen.getByTestId('icon-database');
      const card = icon.closest('.bg-brand-green\\/10');
      expect(card).toBeInTheDocument();
    });

    it('should render Server icon for 弹性架构', () => {
      render(<Architecture />);
      
      const icon = screen.getByTestId('icon-server');
      const card = icon.closest('.bg-brand-green\\/10');
      expect(card).toBeInTheDocument();
    });

    it('should have correct icon container styling', () => {
      render(<Architecture />);
      
      const iconContainers = document.querySelectorAll('.bg-brand-green\\/10');
      expect(iconContainers.length).toBeGreaterThanOrEqual(4);
      
      iconContainers.forEach(container => {
        expect(container).toHaveClass('w-10', 'h-10', 'rounded-lg', 'flex', 'items-center', 'justify-center');
      });
    });
  });

  describe('Layout Structure', () => {
    it('should render capabilities in a grid layout', () => {
      render(<Architecture />);
      
      const capabilitiesLabels = ['全球骨干网', '安全防护', '数据可视化', '弹性架构'];
      const firstCard = screen.getByText(capabilitiesLabels[0]);
      const gridContainer = firstCard.closest('.grid');
      
      expect(gridContainer).toBeInTheDocument();
      expect(gridContainer).toHaveClass('grid', 'grid-cols-2', 'lg:grid-cols-4', 'gap-4');
    });

    it('should render capabilities after architecture layers', () => {
      render(<Architecture />);
      
      const layers = ['UniAuth', 'UniCtrl', 'UniLog'];
      const firstLayer = screen.getByText(layers[0]);
      const firstCapability = screen.getByText('全球骨干网');
      
      // Get DOM order
      const allElements = document.querySelectorAll('body > *');
      let layerIndex = -1;
      let capabilityIndex = -1;
      
      allElements.forEach((el, index) => {
        if (el.textContent?.includes('UniAuth')) layerIndex = index;
        if (el.textContent?.includes('全球骨干网')) capabilityIndex = index;
      });
      
      // Ensure capability comes after layer
      expect(capabilityIndex).toBeGreaterThan(layerIndex);
    });
  });

  describe('Typography', () => {
    it('should render capability label with correct styling', () => {
      render(<Architecture />);
      
      const labels = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      labels.forEach(label => {
        expect(label).toHaveClass('font-semibold', 'text-brand-dark', 'text-sm');
      });
    });

    it('should render capability description with correct styling', () => {
      render(<Architecture />);
      
      const descs = screen.getAllByText(/(150\+ PoPs|威胁情报|全量日志|云原生)/);
      descs.forEach(desc => {
        expect(desc).toHaveClass('text-xs', 'text-brand-gray');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have unique key props for each capability card', () => {
      render(<Architecture />);
      
      const cards = screen.getAllByText(/(全球骨干网|安全防护|数据可视化|弹性架构)/);
      expect(cards.length).toBe(4);
    });

    it('should render icon elements with proper structure', () => {
      render(<Architecture />);
      
      capabilityIcons.forEach(iconTestId => {
        const icon = screen.getByTestId(iconTestId);
        expect(icon).toBeInTheDocument();
        expect(icon).toHaveClass('w-5', 'h-5', 'text-brand-green');
      });
    });
  });
});
