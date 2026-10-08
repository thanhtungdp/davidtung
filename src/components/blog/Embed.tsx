"use client";

import { AgentMaturityPlayground, AgentQuoteAutomationSimulator, AgentUseCasePicker, AgentWorkflowSimulator } from "./AiAgentPlaygrounds";

const embeds = {
  AgentMaturityPlayground,
  AgentWorkflowSimulator,
  AgentQuoteAutomationSimulator,
  AgentUseCasePicker,
} as const;

/** Interactive block placed in Markdown as `<div data-embed="Name"></div>`. */
export function Embed({ name, locale }: { name: string; locale: "vi" | "en" }) {
  const Comp = embeds[name as keyof typeof embeds];
  return Comp ? <Comp locale={locale} /> : null;
}
