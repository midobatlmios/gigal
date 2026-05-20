import SolutionsHero from '../components/sections/SolutionsHero';
import SolutionsTabs from '../components/sections/SolutionsTabs';
import EquipementsSection from '../components/sections/EquipementsSection';
import TestsRapidesSection from '../components/sections/TestsRapidesSection';
import MilieuxSection from '../components/sections/MilieuxSection';
import CTAPage from '../components/sections/CTAPage';

export default function Solutions() {
  return (
    <>
      <SolutionsHero />
      <SolutionsTabs />
      <EquipementsSection />
      <TestsRapidesSection />
      <MilieuxSection />
      <CTAPage />
    </>
  );
}
