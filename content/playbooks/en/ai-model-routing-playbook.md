---
title: "AI Model Routing — Choosing AI models for AI Agents"
description: "Claude, ChatGPT/OpenAI, GLM, Kimi and DeepSeek — viewed by operational role, not by benchmark ranking. Productivity doesn't come from one strong model, it comes from an intelligent routing system."
date: "2026-08-08"
series: "PLAYBOOK 08/2026"
pages: 13
pdf: "/playbooks/AI-Model-Routing-Playbook-David-Tung.pdf"
summary: ["Don't use expensive models for simple tasks. Model cost is just the tip — the real cost is the cost to produce a quality result.", "Five model groups, four work modes: creative, strategic, deep reasoning, large-scale repetitive.", "Upgrade rule: only move to a more expensive model when ambiguity, consequence of error, or autonomy requirements increase.", "Execution pattern: fast model handles bulk → balanced model handles hard cases → premium model or human reviews critical decisions."]
keyTakeaway: "Don't find the best model. Design a system that knows which brain to use for which type of work."
toc: [{"id": "01", "title": "The real problem", "description": "The strongest model can still be the worst choice — real cost is cost per quality result"}, {"id": "02", "title": "How to choose in 5 steps", "description": "Choose the brain by task nature: clear or ambiguous, how expensive is an error, creative or consistent"}, {"id": "03", "title": "Claude & OpenAI", "description": "Top tier: high quality, high price — Claude Opus 5, GPT-5.6 Sol"}, {"id": "04", "title": "GLM, Kimi, DeepSeek", "description": "Balanced & budget tier — Kimi K3, DeepSeek V4 Pro, GLM"}, {"id": "05", "title": "Model selection matrix", "description": "By task: creative, strategic, deep reasoning, large-scale repetitive"}, {"id": "06", "title": "Playbook by task", "description": "Execution pattern: route by risk, not by hype"}, {"id": "07", "title": "Hermes Agent architecture", "description": "How Hermes orchestrates multiple models in one pipeline"}, {"id": "08", "title": "Implementation roadmap", "description": "From zero to a multi-model routing system"}]
topic: "AI Agent"
audience: ["CEO", "Ops teams"]
tint: "sky"
cover: "rings"
---

## The real problem

If you use premium models for everything, you buy peace of mind with cost and latency. If you use cheap models for everything, you save tokens but pay with rework, bad decisions, and manual oversight.

## How to choose in 5 steps

1. **Clear or ambiguous task?** Clear output criteria → fast/cheap model. Ambiguous, needs reframing → strategic model.
2. **How expensive is one error?** Draft content can be fixed; pricing, legal, security decisions need strong models + review.
3. **Creative or consistent?** Creative work needs exploration space. Repetitive tasks need format, low temperature, eval.
4. **How much context?** Don't stuff everything into the prompt. Longer context needs more selection and staging.
5. **Tools and real actions?** Agents calling tools need format compliance, knowing when to stop, error recovery.

## Core principle

A model can do many things, but "can do" doesn't mean "should be assigned to". Choose by risk level, ambiguity, cost of error, and frequency.
