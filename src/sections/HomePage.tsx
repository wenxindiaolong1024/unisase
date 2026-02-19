import Hero from './Hero';
import EnterpriseNeeds from './EnterpriseNeeds';
import WhatIsSASE from './WhatIsSASE';
import Architecture from './Architecture';
import Features from './Features';
import Solutions from './Solutions';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <EnterpriseNeeds />
      <WhatIsSASE />
      <Architecture />
      <Features />
      <Solutions />
    </main>
  );
}
