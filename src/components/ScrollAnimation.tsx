import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollAnimation() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.fade-in-section:not(.is-visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    const timeout = setTimeout(observeAll, 100);

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [location]);

  return null;
}
