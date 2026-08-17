# Skills Orchestration Rules

This rule enforces autonomous, progressive skill activation for the agent in this workspace.

## Directive
When addressing tasks, the agent MUST evaluate the task domain and automatically consult the corresponding `SKILL.md` before generating solutions or code diffs:

1. **Conversion & CRO (Landing Page, Copy, Pricing, Objections, Hero, CTAs):**
   - Read `.agents/skills/revenue-centric-design/SKILL.md`

2. **UI Craft & Polish (Animations, Micro-interactions, Aesthetic Details, Apple-like feel):**
   - Read `.agents/skills/emil-design-eng/SKILL.md`
   - Read `.agents/skills/animate/SKILL.md`
   - Read `.agents/skills/apple-design/SKILL.md`

3. **Software Architecture & Implementation:**
   - Read `.agents/skills/codebase-design/SKILL.md`
   - Read `.agents/skills/implement/SKILL.md`

4. **Testing, Bug Diagnosis & Refactoring:**
   - Read `.agents/skills/diagnosing-bugs/SKILL.md`
   - Read `.agents/skills/tdd/SKILL.md`

5. **Planning & Specs:**
   - Read `.agents/skills/to-spec/SKILL.md`
   - Read `.agents/skills/to-tickets/SKILL.md`
