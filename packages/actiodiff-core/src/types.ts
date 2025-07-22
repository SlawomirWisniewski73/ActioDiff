// Importujemy poprawny, istniejący typ 'SentioData' z biblioteki SentioDiff
import { SentioData } from '@sentiodiff/core';

/**
 * Definiuje cele i ograniczenia agenta.
 */
export interface GoalModel {
  objective: string;
  constraints?: string[];
  utilityFunction?: string;
}

/**
 * Opisuje pojedynczego agenta w ramach interakcji.
 * Używamy teraz poprawnego typu 'SentioData' dla stanu agenta.
 */
export interface Agent {
  id: string;
  sentioState: SentioData;
  goalModel: GoalModel;
}

/**
 * Definiuje "zasady gry" dla interakcji.
 */
export interface Interaction {
  type: string;
  protocol: string;
  participants: string[];
}

/**
 * Pojedyncze zdarzenie na osi czasu interakcji.
 */
export interface TimelineEvent {
  time: number;
  actorId: string;
  action: string;
  payload?: Record<string, any>;
}

/**
 * Główna struktura dokumentu ActioDiff.
 */
export interface ActioDiffDocument {
  version: '1.0-actio';
  interaction: Interaction;
  agents: Agent[];
  timeline: TimelineEvent[];
  hypotheticalTimelines?: any[]; 
}
