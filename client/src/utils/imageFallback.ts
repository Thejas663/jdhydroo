import type { SyntheticEvent } from 'react';

/**
 * Swaps a broken <img> to a placeholder on error, once. React attaches
 * onError via its own synthetic event system, not the native `.onerror`
 * property — so setting `img.onerror = null` here does NOT stop React from
 * calling this handler again. Without a guard, if the placeholder itself
 * ever fails (e.g. the external service rate-limits many simultaneous
 * broken images at once), the browser retries on every re-assignment of the
 * same src, re-firing onError forever. The data-attribute flag is the actual
 * guard: once set, every later call is a no-op.
 */
export function imageFallback(url: string) {
  return (e: SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    img.src = url;
  };
}
