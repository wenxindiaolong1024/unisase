import { useState } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HomePage from './sections/HomePage';
import PlatformPage from './sections/PlatformPage';
import SolutionsPage from './sections/SolutionsPage';
import ResourcesPage from './sections/ResourcesPage';
import CompanyPage from './sections/CompanyPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'platform':
        return <PlatformPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'company':
        return <CompanyPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
