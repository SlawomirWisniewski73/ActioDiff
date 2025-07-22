import { TimelineEvent } from '@actiodiff/core';

/**
 * Opisuje pojedynczy, przewidywany krok w przyszłości.
 */
export interface PredictedStep {
  event: TimelineEvent;
  outcome: string; // np. "accepted", "rejected"
  probability: number; // Prawdopodobieństwo wystąpienia (0-1)
}

/**
 * Reprezentuje kompletną, hipotetyczną linię czasu.
 */
export interface HypotheticalTimeline {
  id: string;
  description: string; // np. "Strategy: Aggressive Opening Offer"
  steps: PredictedStep[];
  overallProbability: number;
}
