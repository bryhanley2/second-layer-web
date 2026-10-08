// Display metadata shared by the memo list and detail pages.

export const REC_KLASS: Record<string, string> = {
  Invest: 'text-accent',
  'Further Review': 'text-ink',
  Pass: 'text-gray-400',
};

// Memos independently corroborated by the automated pipeline's own scrape
// targets (see vertical_sources.py) — convergent validation, not just thematic fit.
export const CONVERGENT_SLUGS = new Set(['glacian-technologies', 'capezero']);
