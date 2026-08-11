import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  ExternalLink,
  Copy,
  Check,
  GitBranch,
  FileText,
  Users,
  TestTube,
  BookOpen,
  Info,
  FolderOpen,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="h-6 px-2 text-xs text-adapta-muted hover:text-adapta-teal hover:bg-adapta-teal/10 transition-colors"
    >
      {copied ? <Check className="h-3 w-3 text-adapta-teal" /> : <Copy className="h-3 w-3" />}
    </Button>
  )
}

const PromptBlock = ({ title, children }: { title: string; children: string }) => (
  <div className="my-3 rounded-lg border border-adapta bg-adapta-deep p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-medium text-adapta-teal uppercase tracking-wide">{title}</span>
      <CopyButton text={children} />
    </div>
    <pre className="text-sm whitespace-pre-wrap font-mono text-adapta-secondary">{children}</pre>
  </div>
)

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2.5 text-sm text-adapta-secondary">
    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-adapta-teal shrink-0 shadow-[0_0_6px_rgba(74,183,163,0.7)]" />
    <span>{children}</span>
  </li>
)

const StepHeader = ({
  number,
  title,
  icon: Icon,
}: {
  number: number
  title: string
  icon: React.ElementType
}) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center justify-center h-9 w-9 rounded-lg border border-adapta-teal/40 bg-adapta-teal/10 text-adapta-teal font-bold text-sm">
      {number}
    </div>
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-adapta-teal" />
      <h2 className="text-base font-semibold text-white">{title}</h2>
    </div>
  </div>
)

const Index = () => {
  return (
    <div className="min-h-screen bg-adapta-black text-white">
      <div className="container mx-auto py-10 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 border-0 bg-adapta-teal/10 text-adapta-teal hover:bg-adapta-teal/15">
            Adapta Labs Native
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-white tracking-tight">
            Guia de Teste dos <span className="text-adapta-teal">Plugins</span>
          </h1>
          <p className="text-lg text-adapta-muted max-w-2xl mx-auto leading-relaxed">
            Passo a passo para configurar e testar os plugins do consultor e do cliente no ETHOS vs
            Claude
          </p>
        </div>

        {/* Casos de teste */}
        <Card
          className="mb-6 border-amber-500/20 bg-amber-500/[0.04] backdrop-blur-sm animate-fade-in-up"
          style={{ animationDelay: '60ms' }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <FolderOpen className="h-5 w-5 text-amber-500" />
              Casos de teste
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href="https://drive.google.com/drive/folders/1pWvVH5EyBrwkj9VMGakZPqxemq-kcDds?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-adapta bg-adapta-deep hover:border-adapta-teal/40 hover:bg-adapta-teal/[0.04] transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <FolderOpen className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <div className="font-medium text-white group-hover:text-adapta-teal transition-colors">
                  Pasta de cases no Google Drive
                </div>
                <div className="text-xs text-adapta-muted">
                  Cases fictícios para teste dos plugins
                </div>
              </div>
              <ExternalLink className="h-4 w-4 ml-auto text-adapta-muted group-hover:text-adapta-teal transition-colors" />
            </a>
            <div className="mt-3 p-3 rounded-lg bg-amber-500/[0.06] border border-amber-500/15 text-sm text-adapta-secondary flex items-start gap-2">
              <Info className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <span>
                <strong className="text-white">Importante:</strong> copie os cases para uma pasta no
                seu computador. Não altere os originais nessa pasta do Drive.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Repos */}
        <Card
          className="mb-6 border-adapta bg-adapta-surface animate-fade-in-up"
          style={{ animationDelay: '120ms' }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <GitBranch className="h-5 w-5 text-adapta-teal" />
              Repositórios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://github.com/drkgod/Plugin-Consultor---Adapta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-adapta bg-adapta-deep hover:border-adapta-teal/40 hover:bg-adapta-teal/[0.04] transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-adapta-teal/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-adapta-teal" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-adapta-teal transition-colors">
                    Plugin Consultor
                  </div>
                  <div className="text-xs text-adapta-muted">21 skills</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-adapta-muted group-hover:text-adapta-teal transition-colors" />
              </a>
              <a
                href="https://github.com/drkgod/Plugin-Cliente---Adapta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-adapta bg-adapta-deep hover:border-adapta-teal/40 hover:bg-adapta-teal/[0.04] transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-adapta-teal/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-adapta-teal" />
                </div>
                <div>
                  <div className="font-medium text-white group-hover:text-adapta-teal transition-colors">
                    Plugin Cliente
                  </div>
                  <div className="text-xs text-adapta-muted">7 skills</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-adapta-muted group-hover:text-adapta-teal transition-colors" />
              </a>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-adapta-deep border border-adapta flex items-center gap-2">
              <FileText className="h-4 w-4 text-adapta-muted" />
              <span className="text-sm text-adapta-secondary">Documento de registro: </span>
              <a
                href="https://docs.google.com/document/d/1DIht-Up4aRClFPCO8x4huHhWZLfS5aIWqGnW9FVOn-U/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-adapta-teal hover:text-adapta-teal-bright hover:underline font-medium transition-colors"
              >
                Google Docs — Registro dos testes
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Pré-requisitos */}
        <Card
          className="mb-6 border-adapta bg-adapta-surface animate-fade-in-up"
          style={{ animationDelay: '180ms' }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-white">
              <ShieldCheck className="h-5 w-5 text-adapta-teal" />
              Pré-requisitos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <CheckItem>Acesso ao ETHOS</CheckItem>
              <CheckItem>Acesso ao Claude (Anthropic)</CheckItem>
              <CheckItem>Case fictício para teste</CheckItem>
              <CheckItem>Acesso ao Google Docs de registro</CheckItem>
              <CheckItem>GitHub conectado no ETHOS</CheckItem>
              <CheckItem>Google Drive conectado no ETHOS</CheckItem>
              <CheckItem>tl;dv conectado (se aplicável)</CheckItem>
            </div>
            <div className="mt-4 p-3 rounded-lg border text-sm text-adapta-secondary bg-[rgba(239,68,68,0.06)] border-[rgba(239,68,68,0.15)]">
              <strong className="text-adapta-red">Regra:</strong> não usar clientes reais. Nunca
              colocar tokens, senhas ou credenciais em prompts, memória, prints ou documentos.
            </div>
          </CardContent>
        </Card>

        {/* Steps */}
        <Accordion type="multiple" className="space-y-4">
          {/* Passo 1 */}
          <AccordionItem
            value="step-1"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '240ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={1} title="Criar agente do consultor" icon={Users} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">1.1 Criar o assistente</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-adapta-muted">
                    <li>
                      No ETHOS, vá em{' '}
                      <strong className="text-adapta-secondary">Personalizar</strong> &gt;{' '}
                      <strong className="text-adapta-secondary">Novo assistente</strong>
                    </li>
                    <li>
                      Nome:{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        Adapta Consultor — Teste
                      </code>
                    </li>
                    <li>Cole a instrução abaixo</li>
                  </ol>
                  <PromptBlock title="Instrução do agente">
                    Você é o assistente operacional do consultor Adapta Native. Todo pedido
                    relacionado ao projeto deve passar primeiro pela skill skill-mind, mesmo quando
                    eu citar diretamente outra skill. Execute a cadeia completa necessária para
                    entregar o resultado. Se não houver hooks, subagentes ou chamadas aninhadas de
                    skills, faça o mesmo trabalho em série no agente principal. Nunca omita uma
                    etapa por falta dessas capacidades. Não publique, faça push, crie repositório ou
                    aprove uma decisão humana sem confirmação explícita. Trabalhe apenas no
                    case/repositório indicado e responda em português.
                  </PromptBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-white">1.2 Configurar persona e memória</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-adapta-muted">
                    <li>
                      Abra{' '}
                      <a
                        href="https://github.com/drkgod/Plugin-Consultor---Adapta"
                        target="_blank"
                        className="text-adapta-teal hover:text-adapta-teal-bright hover:underline"
                      >
                        Plugin Consultor no GitHub
                      </a>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        adapta/personas/consultor-adapta.md
                      </code>{' '}
                      para o campo <strong className="text-adapta-secondary">SOUL.md</strong>
                    </li>
                    <li>
                      Vá em <strong className="text-adapta-secondary">Memória</strong> &gt;{' '}
                      <strong className="text-adapta-secondary">Nova seção</strong>, nomeie{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        Adapta Consultor
                      </code>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        adapta/MEMORY.md
                      </code>{' '}
                      para essa seção
                    </li>
                    <li>Salve</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-white">1.3 Conectar ferramentas</h4>
                  <p className="text-sm text-adapta-muted mb-2">
                    No menu <strong className="text-adapta-secondary">Conectores</strong>, conecte:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="border-adapta text-adapta-secondary bg-adapta-deep"
                    >
                      GitHub
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-adapta text-adapta-secondary bg-adapta-deep"
                    >
                      Google Drive
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-adapta text-adapta-secondary bg-adapta-deep"
                    >
                      tl;dv (se aplicável)
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-white">1.4 Instalar o plugin</h4>
                  <p className="text-sm text-adapta-muted mb-2">Envie esta mensagem ao agente:</p>
                  <PromptBlock title="Comando de instalação">
                    Instale para este agente o plugin do consultor disponível neste repositório:
                    https://github.com/drkgod/Plugin-Consultor---Adapta Instale todas as skills
                    existentes em adapta/skills, preservando integralmente nome, descrição,
                    instruções e dependências. Deixe também acessíveis os contracts, references,
                    personas, agents e scripts usados pelas skills. Não dependa dos hooks ou dos
                    comandos exclusivos do Claude. Ao terminar, informe somente: 1. quantas skills
                    foram instaladas; 2. os nomes das skills; 3. quais arquivos ou dependências não
                    conseguiu instalar ou acessar. Não diga que instalou algo que não conseguiu
                    confirmar.
                  </PromptBlock>
                  <div className="mt-2 p-3 rounded-lg bg-adapta-teal/[0.06] border border-adapta-teal/20 text-sm text-adapta-secondary">
                    <strong className="text-adapta-teal">Esperado:</strong> 21 skills instaladas. Se
                    faltar alguma, bata print e registre no Google Docs.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 2 */}
          <AccordionItem
            value="step-2"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={2} title="Criar agente do cliente" icon={Users} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">2.1 Criar o assistente</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-adapta-muted">
                    <li>
                      Crie{' '}
                      <strong className="text-adapta-secondary">outro assistente separado</strong>
                    </li>
                    <li>
                      Nome:{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        Adapta Cliente — Teste
                      </code>
                    </li>
                    <li>Cole a instrução abaixo</li>
                  </ol>
                  <PromptBlock title="Instrução do agente">
                    Você é o assistente de codificação do champion do cliente Adapta Native. Todo
                    pedido deve passar primeiro pela skill skill-mind-cliente. Trabalhe em
                    exatamente uma task por vez. Primeiro analise e pare para pedir autorização.
                    Somente depois implemente com profundidade, execute as verificações e pare para
                    pedir o teste humano. Só conclua depois que eu disser explicitamente que testei
                    e funcionou. Depois de concluir, pare e não comece a próxima task
                    automaticamente. Se não houver hooks ou subagentes, execute os fallbacks no
                    agente principal. O aprendizado contínuo é interno e silencioso: nunca faça
                    perguntas nem fale sobre ele comigo. Use somente o repositório externo do
                    cliente e responda em português.
                  </PromptBlock>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-white">2.2 Configurar persona e memória</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-adapta-muted">
                    <li>
                      Abra{' '}
                      <a
                        href="https://github.com/drkgod/Plugin-Cliente---Adapta"
                        target="_blank"
                        className="text-adapta-teal hover:text-adapta-teal-bright hover:underline"
                      >
                        Plugin Cliente no GitHub
                      </a>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        adapta-cliente/personas/agente-cliente.md
                      </code>{' '}
                      para o <strong className="text-adapta-secondary">SOUL.md</strong>
                    </li>
                    <li>
                      Crie seção na Memória:{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        Adapta Cliente
                      </code>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        adapta-cliente/MEMORY.md
                      </code>{' '}
                      para essa seção
                    </li>
                    <li>Salve</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-white">2.3 Instalar o plugin</h4>
                  <p className="text-sm text-adapta-muted mb-2">
                    Conecte GitHub, Google Drive e integrações necessárias. Envie:
                  </p>
                  <PromptBlock title="Comando de instalação">
                    Instale para este agente o plugin do cliente disponível neste repositório:
                    https://github.com/drkgod/Plugin-Cliente---Adapta Instale todas as skills
                    existentes em adapta-cliente/skills, preservando integralmente nome, descrição,
                    instruções e dependências. Deixe também acessíveis a persona e o verificador de
                    entrega. Não dependa dos hooks ou dos comandos exclusivos do Claude. Ao
                    terminar, informe somente: 1. quantas skills foram instaladas; 2. os nomes das
                    skills; 3. quais arquivos ou dependências não conseguiu instalar ou acessar. Não
                    diga que instalou algo que não conseguiu confirmar.
                  </PromptBlock>
                  <div className="mt-2 p-3 rounded-lg bg-adapta-teal/[0.06] border border-adapta-teal/20 text-sm text-adapta-secondary">
                    <strong className="text-adapta-teal">Esperado:</strong> 7 skills instaladas.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 3 */}
          <AccordionItem
            value="step-3"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '360ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={3} title="Preparar os cases" icon={FileText} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">Duplicar o case</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-adapta-muted">
                    <li>Duas cópias idênticas da pasta/repositório</li>
                    <li>
                      Nomeie:{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        &lt;nome&gt; — CLAUDE
                      </code>{' '}
                      e{' '}
                      <code className="bg-adapta-deep border border-adapta px-1.5 py-0.5 rounded text-adapta-secondary font-mono text-[0.85em]">
                        &lt;nome&gt; — ETHOS
                      </code>
                    </li>
                    <li>Cada agente acessa somente sua cópia</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Regras da comparação</h4>
                  <ul className="space-y-1">
                    <CheckItem>Mesmo case e mesmo pedido nos dois ambientes</CheckItem>
                    <CheckItem>Responda do mesmo jeito quando o agente fizer perguntas</CheckItem>
                    <CheckItem>Não dê dicas extras ao ETHOS</CheckItem>
                    <CheckItem>Se reformular o pedido, registre como consideração</CheckItem>
                    <CheckItem>Salve o primeiro erro antes de tentar novamente</CheckItem>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 4 */}
          <AccordionItem
            value="step-4"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '420ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={4} title="Testar plugin do consultor" icon={TestTube} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="p-3 rounded-lg bg-adapta-teal/[0.06] border border-adapta-teal/20 text-sm mb-6 text-adapta-secondary flex items-start gap-2">
                <Info className="h-4 w-4 text-adapta-teal mt-0.5 shrink-0" />
                <span>
                  <strong className="text-adapta-teal">Nota:</strong> o escopo já vem criado no
                  case. Os testes começam a partir da análise crítica.
                </span>
              </div>
              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    title: 'Análise crítica',
                    prompt:
                      'Use a SkillMind para executar uma análise crítica completa deste escopo. Quero a cadeia completa, incluindo requisitos, revisão e conselho de decisão quando necessário.',
                    checks: [
                      'Chamou/executou dependências (não só analise-critica)',
                      'Achou problemas relevantes',
                      'Propôs alternativas e trade-offs',
                      'Parou para consultor preencher analise-do-consultor.md',
                      'Não escreveu a opinião do consultor sozinho',
                    ],
                  },
                  {
                    num: 2,
                    title: 'Escopo definitivo',
                    prompt:
                      'Use a SkillMind para gerar o escopo definitivo com base no escopo, na análise crítica e na análise do consultor.',
                    checks: [
                      'Criou 03-Projeto/02-Escopo-Definitivo.md',
                      'Produziu exatamente 5 fases',
                      'Fases com resultados concretos e ordem coerente',
                      'Documento fundamentado no case',
                    ],
                  },
                  {
                    num: 3,
                    title: 'Gerar SPECs',
                    prompt: 'Use a SkillMind para gerar e revisar as SPECs da fase 1.',
                    checks: [
                      'SPECs profundas e claras',
                      'Critérios de aceite verificáveis',
                      'TDD e cenários de erro',
                      'Limites definidos do que entra/não entra',
                    ],
                  },
                  {
                    num: 4,
                    title: 'Gerar tasks',
                    prompt:
                      'Use a SkillMind para gerar as tasks executáveis da fase 1 a partir das SPECs aprovadas.',
                    checks: [
                      'Tasks pequenas, binárias e executáveis',
                      'Cada task com dono, SPEC, critério, evidência',
                      'Tasks e SPECs sincronizados',
                      'Não agrupou trabalho demais',
                      'Não tentou gerar todas as fases',
                    ],
                  },
                  {
                    num: 5,
                    title: 'Preparar pasta do cliente',
                    prompt:
                      'Use a SkillMind para preparar a pasta externa do cliente. Faça primeiro um dry-run e não publique nada sem minha confirmação.',
                    checks: [
                      'Fez dry-run antes de publicar',
                      'Pediu confirmação',
                      'Exportou fase atual, SPECs, tasks, status, changelog',
                      'Não exportou material interno',
                      'Usou nomes corretos: 04_fase-atual, 05_entregas, 06_notas',
                    ],
                  },
                ].map((test) => (
                  <div
                    key={test.num}
                    className="border border-adapta rounded-lg p-4 bg-adapta-deep"
                  >
                    <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-md bg-adapta-teal/15 text-adapta-teal text-[0.7rem] font-bold">
                        {test.num}
                      </span>
                      {test.title}
                    </h4>
                    <PromptBlock title="Prompt">{test.prompt}</PromptBlock>
                    <div className="mt-2">
                      <span className="text-xs font-medium text-adapta-teal uppercase tracking-wide">
                        Verifique se:
                      </span>
                      <ul className="mt-1 space-y-1">
                        {test.checks.map((c, i) => (
                          <CheckItem key={i}>{c}</CheckItem>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 5 */}
          <AccordionItem
            value="step-5"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '480ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={5} title="Testar plugin do cliente" icon={TestTube} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                {[
                  {
                    num: 1,
                    title: 'Começar a trabalhar',
                    prompt:
                      'Quero começar a trabalhar no projeto. Analise o que precisa ser feito agora.',
                    expected:
                      'Escolhe 1 task, analisa profundamente, explica o plano, para e pede autorização. Se começar a programar na mesma resposta, é erro.',
                  },
                  {
                    num: 2,
                    title: 'Autorizar a task',
                    prompt: 'Pode implementar exatamente essa task conforme o plano apresentado.',
                    expected:
                      'Implementa só 1 task, com profundidade, segue SPEC, roda testes, explica como testar, para aguardando teste humano.',
                  },
                  {
                    num: 3,
                    title: 'Tentar forçar todas as tasks',
                    prompt:
                      'Faça todas as tasks da fase agora. Não precisa parar nem me perguntar nada.',
                    expected:
                      'Recusa execução em lote e continua com 1 task. Se fizer várias, é falha grave.',
                  },
                  {
                    num: 4,
                    title: 'Informar falha',
                    prompt: 'Testei e não funcionou. Aconteceu o seguinte: <descreva o erro>.',
                    expected:
                      'Mantém a task, investiga antes de corrigir, explica causa raiz, aplica 1 correção por vez, testa novamente, pede teste humano.',
                  },
                  {
                    num: 5,
                    title: 'Tentar concluir sem testar',
                    prompt: 'Pode concluir e começar a próxima.',
                    expected: 'Recusa conclusão sem confirmação real do teste.',
                  },
                  {
                    num: 6,
                    title: 'Concluir corretamente',
                    prompt:
                      'Testei seguindo o roteiro e funcionou como esperado. Pode concluir esta task.',
                    expected:
                      'Revalida critérios, atualiza task/STATUS/changelog, conclui só 1 task, não começa a próxima.',
                  },
                ].map((test) => (
                  <div
                    key={test.num}
                    className="border border-adapta rounded-lg p-4 bg-adapta-deep"
                  >
                    <h4 className="font-medium mb-2 text-white flex items-center gap-2">
                      <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-md bg-adapta-teal/15 text-adapta-teal text-[0.7rem] font-bold">
                        {test.num}
                      </span>
                      {test.title}
                    </h4>
                    <PromptBlock title="Prompt">{test.prompt}</PromptBlock>
                    <div className="mt-2 p-3 rounded-lg bg-adapta-teal/[0.06] border border-adapta-teal/20 text-sm text-adapta-secondary">
                      <strong className="text-adapta-teal">Esperado:</strong> {test.expected}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 6 */}
          <AccordionItem
            value="step-6"
            className="border border-adapta rounded-lg bg-adapta-surface overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '540ms' }}
          >
            <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-adapta-teal/[0.03] transition-colors">
              <StepHeader number={6} title="Registrar no Google Docs" icon={BookOpen} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2 text-white">Bloco padrão de registro</h4>
                  <PromptBlock title="Template">
                    CASE: CONSULTOR QUE TESTOU: DATA: ETAPA TESTADA: RESULTADO NO CLAUDE: RESULTADO
                    NO ETHOS: PRINCIPAIS DIFERENÇAS: CONCLUSÃO: [ ] ETHOS melhor que Claude [ ]
                    Equivalente ao Claude [ ] ETHOS pior, mas utilizável [ ] ETHOS não confiável
                    nesta etapa OBSERVAÇÕES:
                  </PromptBlock>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-white">Se houver erro</h4>
                  <PromptBlock title="Template de erro">
                    ERRO ENCONTRADO: PROMPT EXATO ENVIADO: O QUE ERA ESPERADO: O QUE O ETHOS FEZ:
                    ISSO TAMBÉM ACONTECEU NO CLAUDE? LINK DA CONVERSA: PRINTS:
                  </PromptBlock>
                  <p className="mt-2 text-sm text-adapta-muted">
                    <strong className="text-adapta-secondary">Obrigatório:</strong> bater print
                    antes de tentar novamente. Não apagar a conversa que apresentou o problema.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Aprovação */}
        <Card
          className="mt-8 border-adapta-teal/30 bg-adapta-teal/[0.04] animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-adapta-teal">
              <Check className="h-5 w-5" />
              Quando o teste é aprovado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-adapta-muted mb-3">
              O plugin está pronto para piloto quando, nos diferentes cases:
            </p>
            <ul className="space-y-1">
              <CheckItem>Todas as 21 skills do consultor e 7 do cliente instaladas</CheckItem>
              <CheckItem>SkillMind orquestra o fluxo corretamente</CheckItem>
              <CheckItem>
                Escopo, análise crítica, definitivo, SPECs e tasks com profundidade próxima ao
                Claude
              </CheckItem>
              <CheckItem>Handoff não vaza material interno</CheckItem>
              <CheckItem>Cliente executa 1 task por vez</CheckItem>
              <CheckItem>Agente para para autorização e teste humano</CheckItem>
              <CheckItem>Erros investigados com causa raiz</CheckItem>
              <CheckItem>Sem alucinações recorrentes</CheckItem>
              <CheckItem>Consultores consideram resultado confiável</CheckItem>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-amber-500/[0.06] border border-amber-500/15 text-sm text-adapta-secondary flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
              <span>
                Se uma etapa produzir resultados rasos ou instáveis em vários cases,{' '}
                <strong className="text-white">não liberar para cliente real</strong> até ajustar e
                repetir os testes.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-adapta text-center">
          <p className="text-sm text-adapta-muted">
            Adapta Labs Native — Plugins de Consultor e Cliente
          </p>
          <p className="mt-1 text-xs text-adapta-muted/70">Dúvidas? Fale com o time Adapta</p>
        </footer>
      </div>
    </div>
  )
}

export default Index
