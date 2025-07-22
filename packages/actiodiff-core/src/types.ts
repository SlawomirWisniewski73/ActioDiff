// Importujemy typy z SentioDiff, ponieważ ActioDiff go rozszerza
import { SentioDiffDocument, IntrospectionData } from '@sentiodiff/core';

/**
 * Definiuje cele i ograniczenia agenta.
 */
export interface GoalModel {
  objective: string; // np. "maximize_profit", "answer_user_question"
  constraints?: string[]; // np. ["ethical_guidelines_v2", "budget_limit_1000"]
  utilityFunction?: string; // Formalny opis funkcji użyteczności
}

/**
 * Opisuje pojedynczego agenta w ramach interakcji.
 * Zawiera jego pełny opis SentioDiff oraz jego model celów.
 */
export interface Agent {
  id: string; // Identyfikator agenta w ramach tej interakcji
  sentioState: SentioDiffDocument;
  goalModel: GoalModel;
}

/**
 * Definiuje "zasady gry" dla interakcji.
 */
export interface Interaction {
  type: string; // np. "negotiation", "collaboration", "auction"
  protocol: string; // np. "offer_counteroffer_accept"
  participants: string[]; // Tablica ID agentów biorących udział
}

/**
 * Pojedyncze zdarzenie na osi czasu interakcji.
 */
export interface TimelineEvent {
  time: number;
  actorId: string; // ID agenta, który wykonuje akcję
  action: string; // np. "offer", "accept", "query"
  payload?: Record<string, any>; // Dane związane z akcją, np. { "price": 100 }
}

/**
 * Główna struktura dokumentu ActioDiff.
 */
export interface ActioDiffDocument {
  version: '1.0-actio';
  interaction: Interaction;
  agents: Agent[];
  timeline: TimelineEvent[];
  // W przyszłości można dodać hipotetyczne linie czasu
  hypotheticalTimelines?: any[]; 
}