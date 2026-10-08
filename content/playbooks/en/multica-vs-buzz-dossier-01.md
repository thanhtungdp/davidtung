---
title: "Multica vs Buzz — One person, many agents"
description: "Two open-source platforms for coordinating a squad of agents running in parallel, dissected by architecture, operating model, and token cost. Plus a third option: replicate the model with Hermes Agent on a Telegram group."
date: "2026-08-07"
series: "DOSSIER 01"
pages: 12
pdf: "/playbooks/Multica-vs-Buzz-Dossier-01.pdf"
image: "/playbooks/multica-cover.webp"
summary: ["Two platforms solve the same need — one person coordinating many agents across parallel projects — but choose two different primitive units. Choosing the wrong primitive means choosing the wrong platform.", "Multica: primitive is the issue. Buzz: primitive is the signed event. Both are already present in the Hermes ecosystem.", "Multica shows token usage per run, agent, issue — see which run is expensive and cut exactly there.", "Buzz: every action is a signed Nostr event, hash-chain audit log, identity via keypair."]
keyTakeaway: "Choosing the wrong primitive means choosing the wrong platform — Multica sees work as tickets, Buzz sees work as signed events."
toc: [{"id": "01", "title": "Conclusion first, evidence second", "description": "Two platforms, two primitives, three decision questions"}, {"id": "02", "title": "Multica — technical profile", "description": "Multiplexed Information and Computing Agent, Go backend, 44k+ stars"}, {"id": "03", "title": "Multica — orchestrating multiple agents", "description": "Squad, autopilot, data boundaries, self-host"}, {"id": "04", "title": "Buzz — technical profile", "description": "Self-hosted workspace, Nostr relay, Rust, Apache-2.0"}, {"id": "05", "title": "Buzz — operations and workflow", "description": "Channel, workflow trigger, hash-chain audit, self-admitted limitations"}, {"id": "06", "title": "14-criteria comparison table", "description": "Readable even in black-and-white print"}, {"id": "07", "title": "Where tokens go — seven saving levers", "description": "Based on documentation, not speculation"}, {"id": "08", "title": "Third option: Hermes Agent + Telegram group", "description": "You don't have to pick one — there's a path combining all three"}, {"id": "09", "title": "30-day roadmap", "description": "From zero to a parallel agent squad"}, {"id": "10", "title": "Sources & what could not be verified", "description": "All numbers sourced, with a list of acknowledged gaps"}]
topic: "Tools"
audience: ["Founder", "Ops teams"]
tint: "rose"
cover: "dots"
---

## Conclusion first, evidence second

Two platforms solve the same need — one person coordinating many agents across parallel projects — but choose two different primitive units. Multica: the issue. Buzz: the signed event.

## Three decision questions

1. Does your work have a "ticket" shape? If work splits into discrete parts with clear done-criteria, Multica fits.
2. How deep do you need audit? Buzz gives hash-verifiable signed events. Multica answers "how much"; Buzz answers "who signed, can't be altered".
3. How many discrete tasks can you tolerate? Multica runs near-daily releases but the license isn't pure OSI.

## Third option

Both are already in the Hermes ecosystem. Multica lists hermes as one of 20 runnable CLI agents, and Hermes lists Buzz as an official messaging channel. You don't have to pick one — there's a path combining all three.
