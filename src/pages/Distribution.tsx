import DistributionHero from '../components/sections/DistributionHero';
import DistributionTabs from '../components/sections/DistributionTabs';
import CatalogueSection from '../components/sections/CatalogueSection';
import BrandsSection from '../components/sections/BrandsSection';
import SupportReseauSection from '../components/sections/SupportReseauSection';
import CTAPage from '../components/sections/CTAPage';

export default function Distribution() {
  return (
    <>
      <DistributionHero />
      <DistributionTabs />
      <CatalogueSection />
      <BrandsSection />
      <SupportReseauSection />
      <CTAPage />
    </>
  );
}
