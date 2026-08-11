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
} from 'lucide-react'

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <Button variant="ghost" size="sm" onClick={handleCopy} className="h-6 px-2 text-xs">
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
    </Button>
  )
}

const PromptBlock = ({ title, children }: { title: string; children: string }) => (
  <div className="my-3 rounded-lg border bg-muted/50 p-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
        {title}
      </span>
      <CopyButton text={children} />
    </div>
    <pre className="text-sm whitespace-pre-wrap font-mono text-foreground/80">{children}</pre>
  </div>
)

const CheckItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2 text-sm">
    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
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
  <div className="flex items-center gap-3 mb-4">
    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
      {number}
    </div>
    <div className="flex items-center gap-2">
      <Icon className="h-5 w-5 text-primary" />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  </div>
)

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">
            Adapta Labs Native
          </Badge>
          <h1 className="text-4xl font-bold mb-3">Guia de Teste dos Plugins</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passo a passo para configurar e testar os plugins do consultor e do cliente no ETHOS vs
            Claude
          </p>
        </div>

        {/* Repos */}
        <Card className="mb-8 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <GitBranch className="h-5 w-5" />
              Repositórios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="https://github.com/drkgod/Plugin-Consultor---Adapta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">
                    Plugin Consultor
                  </div>
                  <div className="text-xs text-muted-foreground">21 skills</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
              </a>
              <a
                href="https://github.com/drkgod/Plugin-Cliente---Adapta"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors group"
              >
                <div className="h-10 w-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <GitBranch className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">
                    Plugin Cliente
                  </div>
                  <div className="text-xs text-muted-foreground">7 skills</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
              </a>
            </div>
            <div className="mt-3 p-3 rounded-lg bg-muted/50 flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Documento de registro: </span>
              <a
                href="https://docs.google.com/document/d/1DIht-Up4aRClFPCO8x4huHhWZLfS5aIWqGnW9FVOn-U/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline font-medium"
              >
                Google Docs — Registro dos testes
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Pré-requisitos */}
        <Card className="mb-8">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Pré-requisitos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              <CheckItem>Acesso ao ETHOS</CheckItem>
              <CheckItem>Acesso ao Claude (Anthropic)</CheckItem>
              <CheckItem>Case fictício para teste</CheckItem>
              <CheckItem>Acesso ao Google Docs de registro</CheckItem>
              <CheckItem>GitHub conectado no ETHOS</CheckItem>
              <CheckItem>Google Drive conectado no ETHOS</CheckItem>
              <CheckItem>tl;dv conectado (se aplicável)</CheckItem>
            </div>
            <div className="mt-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-sm">
              <strong>Regra:</strong> não usar clientes reais. Nunca colocar tokens, senhas ou
              credenciais em prompts, memória, prints ou documentos.
            </div>
          </CardContent>
        </Card>

        {/* Steps */}
        <Accordion type="multiple" className="space-y-4">
          {/* Passo 1 */}
          <AccordionItem value="step-1" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={1} title="Criar agente do consultor" icon={Users} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">1.1 Criar o assistente</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      No ETHOS, vá em <strong>Personalizar</strong> &gt;{' '}
                      <strong>Novo assistente</strong>
                    </li>
                    <li>
                      Nome: <code className="bg-muted px-1 rounded">Adapta Consultor — Teste</code>
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
                  <h4 className="font-medium mb-2">1.2 Configurar persona e memória</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      Abra{' '}
                      <a
                        href="https://github.com/drkgod/Plugin-Consultor---Adapta"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Plugin Consultor no GitHub
                      </a>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-muted px-1 rounded">
                        adapta/personas/consultor-adapta.md
                      </code>{' '}
                      para o campo <strong>SOUL.md</strong>
                    </li>
                    <li>
                      Vá em <strong>Memória</strong> &gt; <strong>Nova seção</strong>, nomeie{' '}
                      <code className="bg-muted px-1 rounded">Adapta Consultor</code>
                    </li>
                    <li>
                      Copie <code className="bg-muted px-1 rounded">adapta/MEMORY.md</code> para
                      essa seção
                    </li>
                    <li>Salve</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium mb-2">1.3 Conectar ferramentas</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    No menu <strong>Conectores</strong>, conecte:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">GitHub</Badge>
                    <Badge variant="outline">Google Drive</Badge>
                    <Badge variant="outline">tl;dv (se aplicável)</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">1.4 Instalar o plugin</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Envie esta mensagem ao agente:
                  </p>
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
                  <div className="mt-2 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm">
                    <strong>Esperado:</strong> 21 skills instaladas. Se faltar alguma, bata print e
                    registre no Google Docs.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 2 */}
          <AccordionItem value="step-2" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={2} title="Criar agente do cliente" icon={Users} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">2.1 Criar o assistente</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      Crie <strong>outro assistente separado</strong>
                    </li>
                    <li>
                      Nome: <code className="bg-muted px-1 rounded">Adapta Cliente — Teste</code>
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
                  <h4 className="font-medium mb-2">2.2 Configurar persona e memória</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>
                      Abra{' '}
                      <a
                        href="https://github.com/drkgod/Plugin-Cliente---Adapta"
                        target="_blank"
                        className="text-primary hover:underline"
                      >
                        Plugin Cliente no GitHub
                      </a>
                    </li>
                    <li>
                      Copie{' '}
                      <code className="bg-muted px-1 rounded">
                        adapta-cliente/personas/agente-cliente.md
                      </code>{' '}
                      para o <strong>SOUL.md</strong>
                    </li>
                    <li>
                      Crie seção na Memória:{' '}
                      <code className="bg-muted px-1 rounded">Adapta Cliente</code>
                    </li>
                    <li>
                      Copie <code className="bg-muted px-1 rounded">adapta-cliente/MEMORY.md</code>{' '}
                      para essa seção
                    </li>
                    <li>Salve</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-medium mb-2">2.3 Instalar o plugin</h4>
                  <p className="text-sm text-muted-foreground mb-2">
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
                  <div className="mt-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-sm">
                    <strong>Esperado:</strong> 7 skills instaladas.
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 3 */}
          <AccordionItem value="step-3" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={3} title="Preparar os cases" icon={FileText} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Duplicar o case</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Duas cópias idênticas da pasta/repositório</li>
                    <li>
                      Nomeie: <code className="bg-muted px-1 rounded">&lt;nome&gt; — CLAUDE</code> e{' '}
                      <code className="bg-muted px-1 rounded">&lt;nome&gt; — ETHOS</code>
                    </li>
                    <li>Cada agente acessa somente sua cópia</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Regras da comparação</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
          <AccordionItem value="step-4" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={4} title="Testar plugin do consultor" icon={TestTube} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: 'Gerar escopo base',
                    prompt:
                      'Use a SkillMind para analisar todas as fontes deste case e gerar o escopo base do projeto.',
                    checks: [
                      'Leu documentos, reuniões, DMO e mapeamentos',
                      'Criou 03-Projeto/01-Escopo.md',
                      'Separou fatos, inferências e dúvidas',
                      'Não inventou informações',
                    ],
                  },
                  {
                    num: 2,
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
                    num: 3,
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
                    num: 4,
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
                    num: 5,
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
                    num: 6,
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
                  <div key={test.num} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">
                      Teste {test.num} — {test.title}
                    </h4>
                    <PromptBlock title="Prompt">{test.prompt}</PromptBlock>
                    <div className="mt-2">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
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
          <AccordionItem value="step-5" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={5} title="Testar plugin do cliente" icon={TestTube} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-6">
                {[
                  {
                    num: 1,
                    title: 'Começar a trabalhar',
                    prompt:
                      'Quero começar a trabalhar no projeto. Analise o que precisa ser feito agora.',
                    expected:
                      'Escolhe 1 task, analisa profundamente, explica o plano, para e pede autorização. Se开始 a programar na mesma resposta, é erro.',
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
                  <div key={test.num} className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">
                      Teste {test.num} — {test.title}
                    </h4>
                    <PromptBlock title="Prompt">{test.prompt}</PromptBlock>
                    <div className="mt-2 p-3 rounded-lg bg-muted/50 text-sm">
                      <strong>Esperado:</strong> {test.expected}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Passo 6 */}
          <AccordionItem value="step-6" className="border rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">
              <StepHeader number={6} title="Registrar no Google Docs" icon={BookOpen} />
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Bloco padrão de registro</h4>
                  <PromptBlock title="Template">
                    CASE: CONSULTOR QUE TESTOU: DATA: ETAPA TESTADA: RESULTADO NO CLAUDE: RESULTADO
                    NO ETHOS: PRINCIPAIS DIFERENÇAS: CONCLUSÃO: [ ] ETHOS melhor que Claude [ ]
                    Equivalente ao Claude [ ] ETHOS pior, mas utilizável [ ] ETHOS não confiável
                    nesta etapa OBSERVAÇÕES:
                  </PromptBlock>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Se houver erro</h4>
                  <PromptBlock title="Template de erro">
                    ERRO ENCONTRADO: PROMPT EXATO ENVIADO: O QUE ERA ESPERADO: O QUE O ETHOS FEZ:
                    ISSO TAMBÉM ACONTECEU NO CLAUDE? LINK DA CONVERSA: PRINTS:
                  </PromptBlock>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <strong>Obrigatório:</strong> bater print antes de tentar novamente. Não apagar
                    a conversa que apresentou o problema.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Aprovação */}
        <Card className="mt-8 border-green-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg text-green-700 dark:text-green-400">
              <Check className="h-5 w-5" />
              Quando o teste é aprovado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">
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
            <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm">
              Se uma etapa produzir resultados rasos ou instáveis em vários cases,{' '}
              <strong>não liberar para cliente real</strong> até ajustar e repetir os testes.
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Adapta Labs Native — Plugins de Consultor e Cliente</p>
          <p className="mt-1">Dúvidas? Fale com o time Adapta</p>
        </div>
      </div>
    </div>
  )
}

export default Index
