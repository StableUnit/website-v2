export const initializeMobileTouchHandlers = () => {
  if (typeof window === 'undefined') return;

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (!isTouchDevice) return;

  document.documentElement.classList.add('touch-device');

  const interactiveSelectors = [
    'button:not(.faq-section button)',
    'a:not(.faq-section a)',
    '[role="button"]:not(.faq-section [role="button"])',
    '.nav-link',
    '.join-button',
    '.form-button',
    '.modal-close',
    '.partner-logo',
    '.partner-item',
    '.scroll-card',
    '.feature-link',
    '.footer-link',
    '.get-usd-pro-button',
    '.hamburger',
    '.mobile-menu-close',
    '[data-touch-interactive="true"]'
  ].join(', ');

  let currentTouchedElement: HTMLElement | null = null;

  const handleTouchStart = (e: TouchEvent) => {
    const target = e.target as HTMLElement;
    
    if (target.closest('.faq-section, .faq-item, .faq-question, .mobile-toggle-btn')) {
      return;
    }
    
    const interactiveElement = target.closest(interactiveSelectors) as HTMLElement;
    
    if (interactiveElement) {
      document.querySelectorAll('.touch-active').forEach(el => {
        el.classList.remove('touch-active');
      });
      
      interactiveElement.classList.add('touch-active');
      currentTouchedElement = interactiveElement;
    }
  };

  const handleTouchEnd = () => {
    if (currentTouchedElement) {
      currentTouchedElement.classList.remove('touch-active');
      currentTouchedElement = null;
    }
    
    document.querySelectorAll('.touch-active').forEach(el => {
      el.classList.remove('touch-active');
    });
  };

  const handleTouchCancel = () => {
    document.querySelectorAll('.touch-active').forEach(el => {
      el.classList.remove('touch-active');
    });
    currentTouchedElement = null;
  };

  const handleContextMenu = (e: Event) => {
    const target = e.target as HTMLElement;
    
    if (target.closest('.faq-section, .faq-item, .faq-question, .mobile-toggle-btn')) {
      return;
    }
    
    const interactiveElement = target.closest(interactiveSelectors);
    
    if (interactiveElement) {
      e.preventDefault();
      return false;
    }
  };

  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchend', handleTouchEnd, { passive: true });
  document.addEventListener('touchcancel', handleTouchCancel, { passive: true });
  document.addEventListener('contextmenu', handleContextMenu, { passive: false });

  return () => {
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchcancel', handleTouchCancel);
    document.removeEventListener('contextmenu', handleContextMenu);
  };
};