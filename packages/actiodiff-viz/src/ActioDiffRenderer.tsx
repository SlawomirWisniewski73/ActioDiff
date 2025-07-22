import React from 'react';
import { ActioDiffDocument, Agent } from '@actiodiff/core';
import { HypotheticalTimeline } from '@actiodiff/planner';

// Definicja właściwości, jakie przyjmuje nasz komponent
interface ActioDiffRendererProps {
  document: ActioDiffDocument;
  hypotheticalTimelines?: HypotheticalTimeline[];
}

// Style CSS dla czytelności (można je przenieść do osobnego pliku)
const styles: { [key: string]: React.CSSProperties } = {
  container: { display: 'flex', fontFamily: 'sans-serif', border: '1px solid #ccc', padding: '10px' },
  agentColumn: { flex: 1, borderRight: '1px solid #eee', padding: '0 10px' },
  timelineColumn: { flex: 2, padding: '0 10px' },
  header: { borderBottom: '1px solid #ccc', paddingBottom: '5px', marginBottom: '10px', fontWeight: 'bold' },
  goal: { background: '#e0f7fa', padding: '5px', borderRadius: '4px', fontSize: '0.9em', marginTop: '5px' },
  event: { border: '1px solid #ddd', padding: '8px', borderRadius: '4px', marginBottom: '8px', fontSize: '0.9em' },
  hypothetical: { border: '1px dashed #f9a825', padding: '8px', borderRadius: '4px', marginTop: '15px', background: '#fffde7' }
};

/**
 * Komponent React do wizualizacji dokumentu ActioDiff.
 */
export const ActioDiffRenderer: React.FC<ActioDiffRendererProps> = ({ document, hypotheticalTimelines }) => {
  return (
    <div style={styles.container}>
      {/* Kolumny dla każdego agenta */}
      {document.agents.map(agent => (
        <div key={agent.id} style={styles.agentColumn}>
          <div style={styles.header}>Agent: {agent.id}</div>
          <strong>Cel:</strong>
          <div style={styles.goal}>{agent.goalModel.objective}</div>
          {/* W tym miejscu można by renderować więcej szczegółów z agent.sentioState */}
        </div>
      ))}

      {/* Kolumna dla osi czasu */}
      <div style={styles.timelineColumn}>
        <div style={styles.header}>Oś Czasu Interakcji: {document.interaction.type}</div>
        {document.timeline.map((event, index) => (
          <div key={index} style={styles.event}>
            <strong>Czas: {event.time}</strong> | Aktor: {event.actorId} | Akcja: {event.action}
            {event.payload && <pre style={{ margin: '5px 0 0', background: '#f5f5f5', padding: '5px' }}>
              {JSON.stringify(event.payload)}
            </pre>}
          </div>
        ))}

        {/* Opcjonalna sekcja dla hipotetycznych przyszłości */}
        {hypotheticalTimelines && hypotheticalTimelines.length > 0 && (
          <div style={styles.hypothetical}>
            <div style={styles.header}>Hipotetyczne Plany</div>
            {hypotheticalTimelines.map(plan => (
              <div key={plan.id} style={{ marginBottom: '10px' }}>
                <strong>Plan: {plan.description}</strong> (Prawd. {plan.overallProbability})
                {plan.steps.map((step, idx) => (
                  <div key={idx} style={{ marginLeft: '15px', fontSize: '0.85em' }}>
                    ↳ Akcja: {step.event.action}, Przewidywany wynik: {step.outcome} (Prawd. {step.probability})
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
