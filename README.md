# ActioDiff: A Meta-Language for Multi-Agent Interaction and Intent 

**ActioDiff is a conceptual, JSON-based meta-language for describing, simulating, and analyzing interactions between intelligent agents (AI or human).** It extends the principles of `VectorDiff` (dynamic data) and `SentioDiff` (AI introspection) into the realm of multi-agent systems, focusing on goals, intent, and protocols of interaction.

Where `VectorDiff` answers *"How does it change?"* and `SentioDiff` answers *"What is it and what does it think?"*, `ActioDiff` answers the ultimate question: ***"Why do they interact and what are their goals?"***

## The Core Concepts

ActioDiff introduces a new layer of abstraction on top of single-agent introspection, built on three pillars:

1.  **Goal Layer (`goalModel`)**: Every agent is described not just by its state, but by its objectives and constraints. This provides the crucial *motivation* behind its actions.
2.  **Interaction Layer (`interaction`)**: Defines the "rules of the game." It specifies the type of interaction (e.g., negotiation, collaboration) and the protocol governing the agents' exchanges.
3.  **Prediction Layer (Hypothetical Timelines)**: Allows an agent to model and store potential future outcomes of its actions, offering an unprecedented view into its planning and decision-making processes.

## Repository Structure (Monorepo) 

This repository is a TypeScript monorepo containing the core components of the ActioDiff ecosystem:

* `packages/actiodiff-core`: The heart of the format. Defines all data structures (`ActioDiffDocument`, `Interaction`, `GoalModel`) and the main API.
* `packages/actiodiff-protocols`: A library of standard, reusable interaction protocols (e.g., for negotiation, voting).
* `packages/actiodiff-planner`: The engine responsible for generating and evaluating hypothetical future timelines.
* `packages/actiodiff-viz`: Visualization components for rendering complex, multi-agent interactions.

## Quick Start (Conceptual)

1.  **Define Agents**: Describe each participant in an interaction using a `SentioDiffDocument`, and add a `goalModel` to specify their objectives.
2.  **Define Interaction**: Choose a protocol and define the participants in an `interaction` block.
3.  **Log Events**: Record the sequence of actions and exchanges between agents on the `timeline`.
4.  **Analyze**: Use the resulting `ActioDiffDocument` to visualize, analyze, and understand the dynamics of the multi-agent system.

See a concrete example in `examples/negotiation_demo.json`.


---
