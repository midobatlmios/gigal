import ManufacturingHero from '../components/sections/ManufacturingHero';
import StatsBand from '../components/sections/StatsBand';
import CapaciteProduction from '../components/sections/CapaciteProduction';
import QualiteConformite from '../components/sections/QualiteConformite';
import GammeManufacturing from '../components/sections/GammeManufacturing';
import VisionPDG from '../components/sections/VisionPDG';
import CTAPage from '../components/sections/CTAPage';

export default function ManufacturingPage() {
  return (
    <>
      <ManufacturingHero />
      <StatsBand />
      <CapaciteProduction />
      <QualiteConformite />
      <GammeManufacturing />
      <VisionPDG />
      <CTAPage />
    </>
  );
}
