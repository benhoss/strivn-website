import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** European Portuguese. Ficheiro, equipa, o seu. Translates fr.ts, does not extend it. */
export function ptPage(b: LandingBits): SwitchPage {
  const transfer = mail('Transferência dos meus dados Teamworks');
  const perks = [b.trialPerk, 'Transferência Teamworks incluída', 'Aberto à IA da sua escolha'];

  return {
    gpsNote: b.gpsFiles,
    crumb: 'O STRIVN ou a Teamworks',
    meta: {
      title: 'Alternativa à Teamworks: o STRIVN, a IA que lê os jogadores',
      description: `O STRIVN ou a Teamworks? A IA que lê carga, GPS e enfermaria, aberta ao Claude e ao ChatGPT. ${b.trialDays} dias de teste e transferência dos dados incluídos.`,
      ogTitle: 'Está na Teamworks? Passe ao STRIVN, a IA que lê os seus jogadores.',
      ogDescription:
        'O assistente do STRIVN lê a carga, o wellness, o GPS, a enfermaria e os jogos, e prepara as ações que a sua equipa técnica valida.',
      twitterTitle: 'O STRIVN ou a Teamworks: a IA que lê os seus jogadores.',
      twitterDescription: `Um assistente sobre todos os seus dados, um conector Claude e ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, a torre de controlo da equipa de performance',
    },
    hero: {
      eyebrow: 'O STRIVN ou a Teamworks',
      titleLead: 'Está na Teamworks?',
      title: 'Passe ao STRIVN, a IA que lê os jogadores.',
      lede: 'O Ask Teamworks responde a perguntas feitas sobre os seus documentos. O assistente do STRIVN lê a carga, o wellness, o GPS, a enfermaria e os jogos de cada jogador, e depois prepara as ações que a sua equipa técnica valida.',
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Planear a minha transferência',
      secondaryHref: transfer,
      perks,
    },
    showcase: {
      assistant: {
        title: "Interrogue todos os seus dados numa só pergunta.",
        body: "O Ask Teamworks lê o PDF que abre. O assistente do STRIVN lê a carga, o wellness, o GPS e a enfermaria em conjunto, cita as fontes e fixa cada gráfico nos seus dashboards.",
      },
      readiness: {
        title: "Valide o que a IA propõe antes da sessão.",
        body: "O check-in ao acordar alimenta a readiness de cada jogador. O STRIVN mostra porque um jogador passa a Aliviar e propõe a sessão ajustada. Aplica ou modifica, num gesto.",
      },
      open: {
        title: 'Mantenha o STRIVN aberto, da importação à sua IA.',
        body: 'O STRIVN lê o ficheiro de qualquer sensor ou ferramenta, e abre-se à IA da sua escolha por MCP, o protocolo aberto dos assistentes de IA. As presenças saem em CSV, o calendário em ICS, os quadros e as apresentações em PDF.',
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'O STRIVN ou a Teamworks',
      title: "Compare o que a IA faz pela sua equipa.",
      lede: "Cinco linhas. As fontes estão por baixo da tabela.",
      columns: {
        criterion: 'Critério',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "O que a IA lê",
          teamworks: "O PDF que abre.",
          strivn: "Carga, wellness, GPS, enfermaria e jogos, em conjunto.",
        },
        {
          criterion: "O que a IA devolve",
          teamworks: "Uma resposta citada.",
          strivn: "Uma resposta com fontes, e a ação pronta a validar.",
        },
        {
          criterion: "Abertura",
          teamworks: "Uma API para integrar a Teamworks AMS.",
          strivn: "O protocolo aberto MCP: Claude, ChatGPT ou a IA da sua escolha.",
        },
        {
          criterion: "Arranque",
          teamworks: "Depois de uma demonstração comercial.",
          strivn: `Hoje, online: ${b.trialDays} dias de teste e transferência dos seus dados incluídos.`,
        },
        {
          criterion: "Preço",
          teamworks: "Sob orçamento.",
          strivn: "Na página, desde 0 € por mês.",
        },
      ],
      note: "Fontes: teamworks.com (páginas AMS e Performance), blog da Teamworks de 5 de agosto de 2026 sobre o Ask Teamworks, a 15 de outubro de 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Porquê o STRIVN',
      title: "Equipe toda a equipa técnica, do analista ao fisioterapeuta.",
      lede: "Mais seis razões para escolher o STRIVN.",
      items: [
        {
          title: 'Ligue a IA da sua escolha aos seus dados',
          body: 'O STRIVN fala MCP, o protocolo aberto dos assistentes de IA. O proprietário da equipa ativa-o, e o Claude, o ChatGPT ou qualquer cliente compatível leem o plantel, a carga, o GPS e os jogos com os seus direitos. Nunca escrevem aos jogadores, aos pais nem ao público, e revoga o acesso nas definições.',
        },
        {
          title: 'Prepare o adversário a várias mãos',
          body: 'O analista anota, filma e desenha sob cada adversário. Fotografe a ficha de jogo: a IA extrai os jogadores, que só entram no plantel adversário quando os confirma. O brief gera-se depois, do dossiê de scouting à palestra.',
        },
        {
          title: 'Conduza a carga até ao exercício',
          body: 'O RPE dá a carga interna, a exportação GPS a carga externa, frente a frente. ACWR, monotonia e tensão calculam-se sozinhos, a previsão projeta a semana, e cada exercício guarda a sua medição GPS.',
        },
        {
          title: 'Filtre as convocatórias pela enfermaria',
          body: 'O quadro médico reúne as lesões ativas, os jogadores em recuperação e a disponibilidade de cada um. Filtra sozinho as convocatórias, e o jogador segue o seu programa de regresso ao jogo na sua app.',
        },
        {
          title: 'Dite o debrief do jogo',
          body: 'Fale depois do jogo: o STRIVN dá forma ao seu debrief. Relê-o e depois aplica-o.',
        },
        {
          title: 'Fale com quem constrói o STRIVN',
          body: 'O botão « Falar com o Benoit » abre um e-mail para quem constrói o STRIVN. Descreva a sua equipa técnica e a sua ferramenta atual, e nós respondemos-lhe.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Mudar',
      title: 'Abra o STRIVN enquanto o seu contrato decorre.',
      lede: `O pré-aviso consta do seu contrato Teamworks ou Opteamal. Teste o STRIVN durante ${b.trialDays} dias nas suas sessões, e nós transferimos os seus dados consigo, sem custos.`,
      steps: [
        {
          n: '01',
          title: 'Crie o espaço',
          body: `Nome, e-mail, telefone, palavra-passe, língua e país bastam. A conta arranca no Semi-Pro durante ${b.trialDays} dias, sem cartão.`,
        },
        {
          n: '02',
          title: 'Transfira os seus dados Teamworks',
          body: 'Envie-nos as suas exportações Teamworks ou Opteamal. Preparamos consigo a correspondência das colunas e a importação da carga, do wellness e do GPS.',
        },
        {
          n: '03',
          title: 'Faça a sua primeira pergunta',
          body: 'Pergunte ao assistente a carga da semana ou os jogadores a vigiar. Ele responde sobre o seu histórico importado, com as fontes à vista.',
        },
      ],
      offer: {
        tag: 'Clubes Teamworks',
        title: `${b.trialDays} dias de teste e a transferência dos seus dados, grátis.`,
        body: 'Retomamos consigo as suas exportações Teamworks, verificamos a correspondência das colunas e importamos o seu histórico enquanto testa o STRIVN nas suas sessões.',
        cta: 'Planear a minha transferência',
        href: transfer,
      },
    },
    faq: {
      label: 'FAQ',
      title: 'As suas perguntas antes de sair da Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'O STRIVN é mesmo aberto?',
          a: 'Sim. Os seus dados entram por ficheiro, seja qual for o sensor ou a ferramenta de origem. Saem para a IA da sua escolha por MCP, o protocolo aberto dos assistentes de IA, e exportam-se em CSV, ICS ou PDF consoante o ecrã. O conector ativa-se e revoga-se nas definições da equipa.',
        },
        {
          q: 'Os meus dados continuam a ser meus?',
          a: 'Sim. Lê-os no STRIVN ou a partir da sua própria IA. Se descer para o Free, todo o seu histórico continua consultável, e mantém a exportação e a eliminação do que lhe pertence.',
        },
        {
          q: 'A IA pode agir sem o meu acordo?',
          a: 'No STRIVN, cada ação preparada pelo assistente aguarda a sua validação. Pelo conector, o Claude ou o ChatGPT agem com os seus direitos, como um membro da equipa técnica, sem nunca escrever aos jogadores, aos pais nem ao público, nem mexer nas convocatórias.',
        },
        {
          q: 'Quem transfere os meus dados da Teamworks ou do Opteamal?',
          a: `Nós, consigo, sem custos. Envie-nos as suas exportações em CSV ou XLSX: preparamos a correspondência das colunas e a importação da carga, do RPE, do wellness e do GPS durante os seus ${b.trialDays} dias de teste. Escreva-nos para hello@strivn.net.`,
          mailto: transfer,
        },
        {
          q: 'Ainda estou com contrato. Quando posso mudar?',
          a: `O pré-aviso e a data de renovação constam do seu contrato. Abra o STRIVN em paralelo, sem aprovação do clube e sem cartão, com ${b.trialDays} dias de Semi-Pro. Rescinde na data que lhe convier.`,
        },
        {
          q: 'Estava no Opteamal. O que muda com a compra pela Teamworks?',
          a: 'A Teamworks comprou o Opteamal a 18 de dezembro de 2025 e anuncia passar os seus clubes para a sua própria plataforma. Se mudar de ferramenta, mude uma só vez: importe o seu histórico para o STRIVN enquanto o seu contrato decorre.',
        },
        {
          q: 'Quanto custa o STRIVN?',
          a: `Os preços são públicos: ${b.publicPrices}. ${b.trialSentence} O Pro, sob orçamento, fixa em contrato os volumes de IA e de WhatsApp.`,
        },
        {
          q: 'O STRIVN lê os dados do meu GPS?',
          a: `Sim, pela exportação da sessão. Deposite o CSV ou o XLSX da Catapult, da STATSports ou de outro sistema, ou o traço SPT / GameTraka. O STRIVN reconhece as colunas na primeira importação e calcula a distância e as zonas de velocidade sobre o traço bruto. Importação ${b.gpsTiers}.`,
        },
        {
          q: 'O STRIVN funciona em neerlandês?',
          a: 'Sim. O STRIVN existe em francês, neerlandês, inglês, alemão, português e espanhol, para a equipa técnica e para os jogadores. Cada membro da equipa técnica escolhe a sua língua ao abrir a conta.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: `Teste o STRIVN ${b.trialDays} dias, transferência incluída.`,
      body: `Transferimos os seus dados Teamworks consigo, e depois interroga o seu histórico. ${b.trialSentence}`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Falar com o Benoit',
      secondaryHref: transfer,
      fine: perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks e Opteamal são marcas dos respetivos titulares. O STRIVN não é afiliado a estas empresas nem aprovado por elas. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka e WHOOP são marcas dos respetivos titulares. As informações sobre a Teamworks e o Opteamal provêm de fontes públicas a 15 de outubro de 2026.',
  };
}
