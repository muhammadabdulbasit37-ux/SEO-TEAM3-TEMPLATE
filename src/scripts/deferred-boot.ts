import { openAccordionFromTrigger, openDrawerFromTrigger, reinitDeferredStarwind, setupDeferredStarwind } from './deferred-starwind';

function bootWidgets() {
  setupDeferredStarwind();

  if (document.querySelector('[data-media-slider]')) {
    void import('./product-media-slider').then((mod) => mod.setupProductMediaSliders());
  }
}

function boot() {
  bootWidgets();
  document.documentElement.dataset.deferredBoot = '1';
  window.__openDeferredDrawer = (trigger) => {
    void openDrawerFromTrigger(trigger);
  };
  window.__openDeferredAccordion = (trigger) => {
    void openAccordionFromTrigger(trigger);
  };
  window.__reinitDeferred = () => {
    reinitDeferredStarwind();
    bootWidgets();
  };
}

boot();

document.addEventListener('astro:page-load', () => {
  if (document.documentElement.dataset.deferredBoot === '1') bootWidgets();
});

declare global {
  interface Window {
    __openDeferredDrawer?: (trigger: HTMLElement) => void;
    __openDeferredAccordion?: (trigger: HTMLElement) => void;
    __reinitDeferred?: () => void;
  }
}
