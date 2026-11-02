import { ChapterEnrichment } from './fullNotesClass10';
import { FULL_NOTES_CLASS_11_HIST } from './fullNotesClass11Hist';
import { FULL_NOTES_CLASS_11_GEO_POL } from './fullNotesClass11GeoPol';
import { FULL_NOTES_CLASS_11_POL2_ECO } from './fullNotesClass11Pol2Eco';

export const FULL_NOTES_CLASS_11: Record<string, ChapterEnrichment> = {
  ...FULL_NOTES_CLASS_11_HIST,
  ...FULL_NOTES_CLASS_11_GEO_POL,
  ...FULL_NOTES_CLASS_11_POL2_ECO,
};
