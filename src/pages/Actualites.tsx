import ActualitesHero from '../components/sections/ActualitesHero';
import FilterBarActualites from '../components/sections/FilterBarActualites';
import ALaUne from '../components/sections/ALaUne';
import DernieresNews from '../components/sections/DernieresNews';
import EvenementsSection from '../components/sections/EvenementsSection';
import NewsletterSection from '../components/sections/NewsletterSection';

export default function Actualites() {
  return (
    <>
      <ActualitesHero />
      <FilterBarActualites />
      <ALaUne />
      <DernieresNews />
      <EvenementsSection />
      <NewsletterSection />
    </>
  );
}
