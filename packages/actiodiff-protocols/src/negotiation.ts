import { TimelineEvent } from '@actiodiff/core';

/**
 * Definiuje strukturę danych dla protokołu negocjacji.
 */
export interface NegotiationPayload {
  price?: number;
  item?: string;
}

/**
 * Definiuje dozwolone akcje w ramach tego protokołu.
 */
export type NegotiationAction = 'offer' | 'counter_offer' | 'accept' | 'reject';

/**
 * Sprawdza, czy dane zdarzenie na osi czasu jest zgodne z protokołem negocjacji.
 * @param event Zdarzenie z osi czasu ActioDiff.
 * @returns True, jeśli zdarzenie jest poprawne.
 */
export function validateNegotiationEvent(event: TimelineEvent): boolean {
  const validActions: NegotiationAction[] = ['offer', 'counter_offer', 'accept', 'reject'];
  
  if (!validActions.includes(event.action as NegotiationAction)) {
    throw new Error(`Invalid action '${event.action}' for negotiation protocol.`);
  }

  if (event.action === 'offer' || event.action === 'counter_offer') {
    if (!event.payload || typeof event.payload.price !== 'number') {
      throw new Error(`'${event.action}' must include a numeric 'price' in payload.`);
    }
  }

  return true;
}
