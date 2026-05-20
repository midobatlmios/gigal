import { useState } from 'react';

import RessourcesHero from '../components/sections/RessourcesHero';
import FilterBarRessources from '../components/sections/FilterBarRessources';
import DocsSection from '../components/sections/DocsSection';
import FichesSection from '../components/sections/FichesSection';
import VideosSection from '../components/sections/VideosSection';
import SoftwareSection from '../components/sections/SoftwareSection';
import CTARessources from '../components/sections/CTARessources';

export default function Ressources() {
  const [searchInput, setSearchInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Tout');

  const docs = [
    {
      cat: 'Manuel',
      title: "Manuel d'utilisation Biolis i50 Superior",
      desc: "Guide complet d'installation, calibration, maintenance et dépannage de l'analyseur Biolis i50 Superior — 480 t/h, HbA1c intégré.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '4.2 Mo — v3.1',
      delay: 'delay-1',
      iconWrapClass: 'doc-icon-red',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      cat: 'Manuel',
      title: 'Manuel utilisateur Celltac G — Hématologie',
      desc: "Procédures d'exploitation complètes pour l'analyseur hématologique Celltac G — 90 éch/h, laser + cytométrie en flux.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '3.8 Mo — v2.4',
      delay: 'delay-2',
      iconWrapClass: 'doc-icon-dark',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
    },
    {
      cat: 'Protocole',
      title: 'Protocole de contrôle qualité — Maglumi X8',
      desc: "Procédures CQ, intervalles de référence et validation des méthodes pour l'immunoanalyse sur Maglumi X8 (Snibe).",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '1.9 Mo — v1.2',
      delay: 'delay-3',
      iconWrapClass: 'doc-icon-blue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6m-6 0-4 3m10-3 4 3M9 14h6" />
        </svg>
      ),
    },
    {
      cat: 'Certification',
      title: 'Certificat ISO 13485:2016 — GIGALAB Manufacturing',
      desc: "Certificat officiel ISO 13485:2016 délivré par Bureau Veritas, valable jusqu'en mars 2029. Couvre conception, fabrication et distribution.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '0.5 Mo',
      delay: 'delay-1',
      iconWrapClass: 'doc-icon-green',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      cat: 'Guide rapide',
      title: 'Quick Start Guide — Blue Diver Platinum',
      desc: "Guide de démarrage rapide en 5 étapes pour l'immunodot Blue Diver Platinum. Mise en route en moins de 30 minutes.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '0.8 Mo — v1.5',
      delay: 'delay-2',
      iconWrapClass: 'doc-icon-purple',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
        </svg>
      ),
    },
    {
      cat: 'Catalogue',
      title: 'Catalogue complet GIGALAB 2026',
      desc: "Catalogue produits complet : biochimie, hématologie, immunoanalyse, coagulation, tests rapides et milieux de culture — édition 2026.",
      format: 'PDF',
      fmtClass: 'fmt-pdf',
      size: '12.4 Mo',
      delay: 'delay-3',
      iconWrapClass: 'doc-icon-orange',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
    },
  ];

  const fiches = [
    { name: 'Biolis 30i', brand: 'Tokyo Boeki / Biolis', bg: '#1a3a5c', specs: ['450 tests/heure', 'ISE Na/K/Cl intégré', 'Plateau réfrigéré'], delay: 'delay-1', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'Biolis i24 Premium', brand: 'Tokyo Boeki / Biolis', bg: '#1a3a5c', specs: ['400 tests/heure', '39 paramètres', 'Connexion LIS'], delay: 'delay-2', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'Celltac G', brand: 'Nihon Kohden', bg: '#2d1b4e', specs: ['90 échantillons/heure', 'Laser + cytométrie', 'WBC 5-part diff'], delay: 'delay-3', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg> },
    { name: 'Maglumi X8', brand: 'Snibe Diagnostic', bg: '#1e3a2e', specs: ['Chimiluminescence CLIA', 'Chargement continu', 'Connexion LIS/HIS'], delay: 'delay-4', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg> },
    { name: 'Blue Diver Platinum', brand: 'D-Tek', bg: '#3a1a1a', specs: ['24 tests / 60 minutes', 'Sans fluides', 'Immunodot autoimmunité'], delay: 'delay-1', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg> },
    { name: 'Coag 4D', brand: 'GIGALAB / STA', bg: '#1a2a3a', specs: ['4 canaux simultanés', 'Chromogénique + turbid.', 'D-dimère intégré'], delay: 'delay-2', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" /></svg> },
    { name: 'CalproSmart', brand: 'CALPRO AS', bg: '#2a1a3a', specs: ['Calprotectine fécale', 'Résultat en 18 min', 'MICI & rectocolite'], delay: 'delay-3', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /></svg> },
    { name: 'IDS-ISYS', brand: 'Immunodiagnostic Systems', bg: '#1e3a1a', specs: ['120 tests/heure', 'Vitamin D, PTH, AMH', 'Chimiluminescence'], delay: 'delay-4', icon: <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  ];

  const videos = [
    {
      title: 'Installation et première mise en route du Biolis i50 Superior',
      desc: "De l'unboxing à la première calibration — étape par étape avec notre ingénieur.",
      duration: '14:32',
      level: 'Initiation',
      levelClass: 'level-init',
      bg: 'linear-gradient(135deg, #1a3a5c, #0d2240)',
      author: 'Dr. Karim Z.',
      role: 'Ingénieur Applications',
      avatar: 'KZ',
      delay: 'delay-1',
    },
    {
      title: 'Maintenance préventive mensuelle du Celltac G',
      desc: "Nettoyage des fluidiques, remplacement des lampes, vérification du laser — procédures complètes.",
      duration: '08:15',
      level: 'Intermédiaire',
      levelClass: 'level-inter',
      bg: 'linear-gradient(135deg, #2d1b4e, #1a0f30)',
      author: 'A. Rahmani',
      role: 'Dir. Technique',
      avatar: 'AR',
      delay: 'delay-2',
    },
    {
      title: 'Validation de méthode et contrôle qualité sur Blue Diver Platinum',
      desc: 'Protocole complet de validation analytique : précision, exactitude, valeurs de référence.',
      duration: '22:48',
      level: 'Avancé',
      levelClass: 'level-adv',
      bg: 'linear-gradient(135deg, #1e3a2e, #0f2018)',
      author: 'Dr. S. Benali',
      role: 'Biologiste Référent',
      avatar: 'SB',
      delay: 'delay-3',
    },
  ];

  const software = [
    {
      title: 'GIGALAB LIS Connector v4.2',
      desc: "Interface universelle de connexion au Système d'Information de Laboratoire. Compatible HL7, ASTM, FHIR. Supporte tous les appareils du catalogue.",
      version: 'v4.2.1 — Avr 2026',
      delay: 'delay-1',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
    },
    {
      title: 'Biolis DataManager v3.0',
      desc: "Logiciel de gestion des données analytiques pour la gamme Biolis (30i, i24, i50). Courbes de calibration, archivage CQ, export Excel.",
      version: 'v3.0.5 — Mars 2026',
      delay: 'delay-2',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v11l-4 3m4-3h6" />
        </svg>
      ),
    },
    {
      title: 'DiverSoft Reporting v2.1',
      desc: "Suite d'analyse et de rapport pour le Blue Diver Platinum. Génération automatique de comptes-rendus au format PDF ou HL7 pour les systèmes experts.",
      version: 'v2.1.0 — Fév 2026',
      delay: 'delay-3',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4l3 3" />
        </svg>
      ),
    },
    {
      title: 'GIGALAB Remote Diagnostics',
      desc: "Application mobile iOS/Android pour le suivi à distance des équipements, alertes de maintenance et visualisation des paramètres en temps réel.",
      version: 'v1.4.2 — Avr 2026',
      delay: 'delay-4',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
  ];

  const handleSearch = () => setSearchQuery(searchInput.toLowerCase().trim());

  const matchesSearch = (texts: (string | undefined)[]) =>
    searchQuery === '' || texts.some((t) => t?.toLowerCase().includes(searchQuery));

  const filteredDocs = docs.filter((d) =>
    matchesSearch([d.title, d.desc, d.cat, d.format, d.size])
  );

  const filteredFiches = fiches.filter((f) =>
    matchesSearch([f.name, f.brand, ...f.specs])
  );

  const filteredVideos = videos.filter((v) =>
    matchesSearch([v.title, v.desc, v.author, v.role, v.level])
  );

  const filteredSoftware = software.filter((s) =>
    matchesSearch([s.title, s.desc, s.version])
  );

  const certifDocs = filteredDocs.filter((d) => d.cat === 'Certification');

  const showDocs = ['Tout', 'Documentation'].includes(activeTab) || (activeTab === 'Certifications' && certifDocs.length > 0);
  const showFiches = ['Tout', 'Fiches produits'].includes(activeTab);
  const showVideos = ['Tout', 'Vidéos formation'].includes(activeTab);
  const showSoftware = ['Tout', 'Logiciels'].includes(activeTab);

  const hasAnyResults =
    (showDocs && (activeTab === 'Certifications' ? certifDocs.length : filteredDocs.length) > 0) ||
    (showFiches && filteredFiches.length > 0) ||
    (showVideos && filteredVideos.length > 0) ||
    (showSoftware && filteredSoftware.length > 0);

  const noResults = (searchQuery !== '' || activeTab !== 'Tout') && !hasAnyResults;

  const docsToShow = activeTab === 'Certifications' ? certifDocs : filteredDocs;

  return (
    <>
      <RessourcesHero
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        setActiveTab={setActiveTab}
      />

      <FilterBarRessources activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* No results */}
      {noResults && (
        <section className="docs-section fade-in-section">
          <div className="container">
            <div
              style={{
                textAlign: 'center',
                padding: '80px 20px',
                color: 'var(--gray-600)',
              }}
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                style={{ marginBottom: 16, opacity: 0.5 }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                <line x1="8" y1="8" x2="14" y2="14" />
                <line x1="14" y1="8" x2="8" y2="14" />
              </svg>
              <h3 style={{ fontSize: 20, fontWeight: 700, color: 'var(--charcoal)', marginBottom: 8 }}>
                Aucun résultat
              </h3>
              <p style={{ fontSize: 14, maxWidth: 400, margin: '0 auto' }}>
                Aucun document ne correspond à votre recherche. Essayez un autre mot-clé ou parcourez les catégories.
              </p>
              <button
                className="btn btn-primary"
                style={{ marginTop: 24 }}
                onClick={() => {
                  setSearchInput('');
                  setSearchQuery('');
                  setActiveTab('Tout');
                }}
              >
                Voir tout
              </button>
            </div>
          </div>
        </section>
      )}

      {showDocs && <DocsSection docs={docsToShow} />}
      {showFiches && <FichesSection fiches={filteredFiches} />}
      {showVideos && <VideosSection videos={filteredVideos} />}
      {showSoftware && <SoftwareSection software={filteredSoftware} />}

      <CTARessources />
    </>
  );
}
