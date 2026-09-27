import type { LlmClient } from '@/lib/llm-pipeline/llm-client'
import { parseProposals, type ProposedDiagnosis } from '@/lib/llm-pipeline/parse-model-output'
import { BRAIN2_PROMPT_VERSION, brain2SystemPrompt, brain2UserPrompt } from '@/lib/prompts/sonographer-differential'

export interface Brain2Request {
  model: string
  question: string
  bodyRegion?: { name: string; confirmedByOperator: boolean }
  views: Array<{ name: string; evidenceIds: string[]; operatorConfirmed: boolean }>
  observations: unknown
  measurement: unknown
}

export async function runBrain2(client: LlmClient, request: Brain2Request): Promise<ProposedDiagnosis[]> {
  try {
    const text = await client.completeJson({
      model: request.model,
      system: brain2SystemPrompt(),
      user: brain2UserPrompt(request),
    })
    return parseProposals(text)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'сбой Brain 2'
    throw new Error(`Brain 2: ${message}`)
  }
}

export { BRAIN2_PROMPT_VERSION }
