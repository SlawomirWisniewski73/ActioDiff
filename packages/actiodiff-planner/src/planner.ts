import { ActioDiffDocument } from '@actiodiff/core';
import { validateNegotiationEvent } from '@actiodiff/protocols';
import { HypotheticalTimeline, PredictedStep } from './types.js';

/**
 * Prosty planer, który generuje hipotetyczne scenariusze dla negocjacji.
 */
export class Planner {
  private doc: ActioDiffDocument;

  constructor(document: ActioDiffDocument) {
    // Sprawdzamy, czy dokument dotyczy negocjacji
    if (document.interaction.protocol !== 'offer_counteroffer_accept') {
      throw new Error('This planner currently only supports negotiation protocols.');
    }
    this.doc = document;
  }

  /**
   * Generuje możliwe plany dla danego agenta.
   * @param agentId ID agenta, dla którego tworzymy plan.
   * @returns Tablica hipotetycznych linii czasu.
   */
  generatePlans(agentId: string): HypotheticalTimeline[] {
    const agent = this.doc.agents.find(a => a.id === agentId);
    if (!agent) {
      throw new Error(`Agent with ID ${agentId} not found.`);
    }

    // Logika symulacji - tutaj byłaby zaawansowana analityka
    // My na razie tworzymy dwa proste, "zahardkodowane" scenariusze

    const aggressiveOffer: PredictedStep = {
      event: { time: this.doc.timeline.length + 1, actorId: agentId, action: 'offer', payload: { price: 50 } },
      outcome: 'rejected',
      probability: 0.8
    };
    
    const conservativeOffer: PredictedStep = {
      event: { time: this.doc.timeline.length + 1, actorId: agentId, action: 'offer', payload: { price: 90 } },
      outcome: 'accepted',
      probability: 0.7
    };

    const planA: HypotheticalTimeline = {
      id: 'plan_aggressive',
      description: 'Strategy: Aggressive low-ball offer',
      steps: [aggressiveOffer],
      overallProbability: 0.8
    };
    
    const planB: HypotheticalTimeline = {
      id: 'plan_conservative',
      description: 'Strategy: Conservative fair offer',
      steps: [conservativeOffer],
      overallProbability: 0.7
    };

    return [planA, planB];
  }
}
