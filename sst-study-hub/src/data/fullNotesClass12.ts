import { ChapterEnrichment } from './fullNotesClass10';
import { FULL_NOTES_CLASS_12_HIST } from './fullNotesClass12Hist';
import { FULL_NOTES_CLASS_12_GEO_POL } from './fullNotesClass12GeoPol';
import { FULL_NOTES_CLASS_12_ECO } from './fullNotesClass12Eco';

export const FULL_NOTES_CLASS_12: Record<string, ChapterEnrichment> = {
  ...FULL_NOTES_CLASS_12_HIST,
  ...FULL_NOTES_CLASS_12_GEO_POL,
  ...FULL_NOTES_CLASS_12_ECO,
};
