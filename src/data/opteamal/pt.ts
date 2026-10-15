import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** European Portuguese. Ficheiro, equipa, o seu. */
export function ptPage(b: LandingBits): SwitchPage {
  const costAnswer = `Os preços são públicos: ${b.publicPrices}. ${b.gpsFiles} ${b.trialSentence} Sem cartão. O Pro fica sob consulta.`;

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Passar da Opteamal para a STRIVN',
    meta: {
      title: 'Porque passar da Opteamal para a STRIVN',
      description:
        'A Opteamal, editora belga, foi adquirida pela Teamworks a 18 de dezembro de 2025. Comparação factual: preços STRIVN públicos, conta sem aprovação do clube, check-in por ligação. A Teamworks AMS anuncia integrações, um módulo médico e certificações.',
      ogTitle: 'Usa a Opteamal? Porque passar para a STRIVN',
      ogDescription:
        'Adquirida pela Teamworks a 18 de dezembro de 2025. Preços STRIVN públicos, arranque em autonomia, check-in por ligação. A comparação só atribui à Opteamal factos públicos.',
      twitterTitle: 'Porque passar da Opteamal para a STRIVN',
      twitterDescription: 'Comparação factual para clubes ainda na Opteamal, agora na Teamworks.',
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, a torre de controlo do staff de performance',
    },
    hero: {
      eyebrow: 'A Opteamal passa para a Teamworks',
      titleLead: 'Usa a Opteamal?',
      title: 'Eis porque passa para a STRIVN.',
      lede: 'A 18 de dezembro de 2025, a Teamworks adquiriu a Opteamal, editora belga, e está a integrá-la na Teamworks. Esta página põe lado a lado os factos públicos do lado deles e o que a STRIVN entrega. Onde um pormenor da Opteamal não é público, escrevemo-lo, em vez de inventar uma falta.',
      primaryCta: 'Passar para a STRIVN',
      secondaryCta: 'Ver a comparação',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparação',
      title: 'Opteamal (agora Teamworks) e STRIVN, ponto por ponto.',
      lede: 'Duas colunas de factos, e depois uma leitura. A vantagem vai para a Teamworks AMS quando os anúncios públicos deles o dizem. Vai para a STRIVN quando o contraste é público. Caso contrário, a leitura fica em aberto.',
      columns: {
        criterion: 'Critério',
        opteamal: 'Opteamal (agora Teamworks)',
        strivn: 'STRIVN',
        verdict: 'Veredito',
      },
      rows: [
        {
          criterion: 'Quem decide o que se segue',
          opteamal:
            'A Opteamal, editora belga, foi adquirida pela Teamworks a 18 de dezembro de 2025 e está a ser integrada na Teamworks. Roteiro e migração: Teamworks.',
          strivn: 'Editora independente. O roteiro é o da STRIVN.',
          verdictLead: 'Facto',
          verdict: 'Desde a aquisição, o que se segue na Opteamal decide-se na Teamworks.',
        },
        {
          criterion: 'Preço',
          opteamal: 'Sob consulta, não público.',
          strivn: `Público: ${b.publicPrices}.`,
          verdictLead: 'STRIVN',
          verdict: 'Os preços da STRIVN estão na página, exceto o Pro, que fica sob consulta.',
        },
        {
          criterion: 'Como se compra',
          opteamal: 'Venda a empresas.',
          strivn:
            'O staff cria a conta: nome, e-mail, telefone, palavra-passe, língua, país. Sem aprovação do clube ou de uma federação. 30 dias de Semi-Pro à abertura, sem cartão.',
          verdictLead: 'STRIVN',
          verdict: 'Arranque em autonomia na STRIVN. Venda a empresas do lado deles.',
        },
        {
          criterion: 'Integrações',
          opteamal:
            'A Teamworks AMS anuncia mais de 100 integrações. A lista que ainda se aplica a um clube Opteamal não é pública aqui.',
          strivn:
            'Só ficheiros, no Semi-Pro e no Pro: CSV, XLSX, Catapult, STATSports, traços SPT / GameTraka. Sem ligação GPS direta, sem API pública.',
          verdictLead: 'Teamworks AMS',
          verdict: 'As integrações anunciadas são uma vantagem da Teamworks AMS. A STRIVN fica-se pelos ficheiros.',
        },
        {
          criterion: 'Médico',
          opteamal:
            'A Teamworks AMS anuncia um módulo médico. O pormenor ainda próprio da Opteamal não é público aqui.',
          strivn:
            'Diário de lesão, lista de verificação e plano de regresso, sessões de reatletização. Quadro médico no Semi-Pro e no Pro. Sem biblioteca de protocolos.',
          verdictLead: 'Teamworks AMS',
          verdict: 'O módulo médico anunciado é uma vantagem da Teamworks AMS.',
        },
        {
          criterion: 'Certificações',
          opteamal: 'A Teamworks AMS anuncia ISO 27001 e SOC 2.',
          strivn:
            'Nenhuma certificação reivindicada. Transporte HTTPS. Direito de acesso, retificação, apagamento ou cópia via hello@strivn.net. Sem país de alojamento nem acordo de tratamento nomeados.',
          verdictLead: 'Teamworks AMS',
          verdict: 'As certificações anunciadas são uma vantagem da Teamworks AMS.',
        },
        {
          criterion: 'Línguas',
          opteamal: 'Não público nesta página.',
          strivn: 'Francês, inglês, neerlandês, alemão, português e espanhol. O francês é o texto de origem.',
          verdictLead: 'Em aberto',
          verdict: 'A STRIVN documenta seis línguas, entre elas o francês e o neerlandês. O pormenor da Opteamal não é público.',
        },
        {
          criterion: 'Check-in do jogador',
          opteamal: 'Não público nesta página.',
          strivn:
            'Ligação por WhatsApp ou e-mail, sem aplicação. Envios automáticos no Semi-Pro e no Pro. O WHOOP pode pré-preencher o check-in nesses níveis.',
          verdictLead: 'Em aberto',
          verdict: 'A STRIVN documenta a ligação sem aplicação. O equivalente na Opteamal não é público.',
        },
        {
          criterion: 'À beira do campo',
          opteamal: 'Não público nesta página.',
          strivn:
            'Presenças, cronómetro por bloco, equipas e resultado. Diário offline no telefone, sincronizado ao regressar.',
          verdictLead: 'Em aberto',
          verdict: 'A STRIVN documenta o modo offline. O equivalente na Opteamal não é público.',
        },
        {
          criterion: 'Carga e GPS',
          opteamal: 'Não público nesta página.',
          strivn:
            'Semana em UA, ACWR 7 dias sobre 28, leituras Apto, Acompanhar, Em risco. Importação de ficheiros GPS no Semi-Pro e no Pro, incluindo o cálculo de traços SPT em bruto.',
          verdictLead: 'Em aberto',
          verdict: 'A STRIVN documenta a carga e os ficheiros GPS. O pormenor da Opteamal não é público.',
        },
      ],
      note: 'Factos sobre a Opteamal e a Teamworks limitados à informação pública a 15 de outubro de 2026: aquisição, preço sob consulta, venda a empresas, e anúncios da Teamworks AMS (integrações, módulo médico, ISO 27001, SOC 2). O resto da coluna deles fica marcado como não público.',
    },
    reasons: {
      id: 'raisons',
      eyebrow: 'Porque mudar',
      title: 'Onze razões para mudar',
      lede: 'O que a STRIVN entrega, e o único facto novo do lado da Opteamal: desde a aquisição, o que se segue decide-se na Teamworks.',
      items: [
        {
          title: 'Os preços estão na página',
          body: `Free, Amateur, Semi-Pro e Pro: ${b.publicPrices}. Os mesmos montantes do catálogo. O Pro fica sob consulta, como uma proposta, não como um preço escondido dos outros níveis.`,
        },
        {
          title: 'Abre a conta sozinho',
          body: 'Nome, e-mail, telefone, palavra-passe, língua, país. Sem aprovação do clube ou de uma federação. A conta arranca com 30 dias de Semi-Pro, sem cartão.',
        },
        {
          title: 'Os jogadores respondem por uma ligação',
          body: 'Wellness (fadiga, sono, humor, stress) e RPE, por WhatsApp ou e-mail, sem aplicação. O envio automático de manhã e à noite é no Semi-Pro e no Pro. O WHOOP pode pré-preencher o check-in nesses níveis.',
        },
        {
          title: 'À beira do campo funciona offline',
          body: 'Presenças, cronómetro por bloco, equipas e resultado. O telefone guarda um diário e sincroniza-o ao regressar. Se a duração não for preenchida, a carga usa o tempo realmente jogado.',
        },
        {
          title: 'A semana planeia-se em UA',
          body: 'Alvo, previsto contra realizado, ajuste por jogador (escala, exclusão ou trabalho individual) sem alterar a grelha da equipa nem a convocatória. A carga que vem do GPS pede o Semi-Pro.',
        },
        {
          title: 'O exercício anima-se e partilha-se',
          body: 'Futebol, andebol, râguebi, basquetebol, voleibol. Animação, descarga em PNG ou WebM, PNG partilhado pela folha de partilha do telefone. 3 quadros e 3 modelos no Free, sem tecto a partir do Amateur.',
        },
        {
          title: 'Francês e neerlandês, mais quatro línguas',
          body: 'Francês, inglês, neerlandês, alemão, português e espanhol, do lado do treinador e do lado do jogador. O francês é o texto de origem. O neerlandês está lá para os staffs belgas.',
        },
        {
          title: 'Cada papel tem os seus direitos',
          body: 'Treinador principal, adjunto, médico, fisioterapeuta, preparador físico, analista, delegado, recrutador, treinador de guarda-redes. Free: só o proprietário. Amateur: um convite a mais. Semi-Pro e Pro: sem tecto.',
        },
        {
          title: 'A ausência tira o jogador da convocatória',
          body: 'Um jogador ausente sai das convocatórias de treino e de jogo. Um jogador limitado no treino sai dos jogos. Cuidados, programa individual e uma seleção de estágio explícita continuam disponíveis.',
        },
        {
          title: 'O traço SPT é recalculado',
          body: `Só ficheiros, ${b.gpsTiers}: CSV ou XLSX (Catapult, STATSports, ou qualquer tabela) e traços SPT / GameTraka (.gt). A STRIVN calcula distância e zonas de velocidade sobre o traço em bruto. Sem ligação direta.`,
        },
        {
          title: 'O que se segue na Opteamal decide-se na Teamworks',
          body: 'Desde 18 de dezembro de 2025, o roteiro e a migração da Opteamal estão nas mãos da Teamworks. É uma mudança de quem decide, não um juízo sobre o produto. A STRIVN continua uma editora independente.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Como mudar',
      title: 'Três passos. Não um projeto de integração.',
      lede: 'Pode abrir um espaço enquanto o contrato Opteamal ainda corre. Não conhecemos o pré-aviso: está no contrato, não aqui.',
      steps: [
        {
          n: '01',
          title: 'Crie o espaço',
          body: 'Nome, e-mail, telefone, palavra-passe, língua, país. Sem aprovação do clube. A conta arranca com 30 dias de Semi-Pro, sem cartão.',
        },
        {
          n: '02',
          title: 'Importe o histórico',
          body: 'CSV ou XLSX para a carga, o RPE e o wellness. As exportações GPS (Catapult, STATSports, SPT / GameTraka) entram no Semi-Pro, portanto durante o período de teste. As colunas são adivinhadas e depois memorizadas para a equipa.',
        },
        {
          n: '03',
          title: 'Convide o staff',
          body: 'Um papel por pessoa, com as permissões dele. No Free, só o proprietário. No Amateur, um convite a mais. No Semi-Pro e no Pro, sem tecto.',
        },
      ],
      offer: {
        tag: 'Para clubes que saem da Opteamal',
        title: 'Podemos fazer a primeira correspondência consigo.',
        body: 'Os três passos chegam para começar. Se quiser que façamos a correspondência das colunas consigo, uma vez, escreva-nos. A oferta de acompanhamento ainda está por confirmar.',
        cta: 'Falar da minha migração',
        href: mail('Migração a partir da Opteamal'),
      },
    },
    stay: {
      id: 'rester',
      eyebrow: 'Ficar',
      title: 'Quando a Opteamal ou a Teamworks continua a ser a escolha certa.',
      lede: 'Mudar não é o movimento certo nestes casos. Escrevemo-los para a página continuar utilizável.',
      items: [
        {
          title: 'O módulo médico de empresa',
          body: 'A Teamworks AMS anuncia um módulo médico. A STRIVN cobre o diário, o regresso e a reatletização, não uma biblioteca de protocolos.',
        },
        {
          title: 'ISO 27001 e SOC 2',
          body: 'A Teamworks AMS anuncia-as. A STRIVN não reivindica certificação, país de alojamento nem acordo de tratamento.',
        },
        {
          title: 'As integrações diretas',
          body: 'A Teamworks AMS anuncia mais de 100 integrações. A STRIVN importa ficheiros e não tem ligação GPS direta nem API pública.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'As perguntas quando se sai da Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Posso levar o meu histórico Opteamal?',
          a: 'Por ficheiro, sim. Carga, RPE e wellness: CSV ou XLSX. As exportações GPS (CSV, XLSX, Catapult, STATSports, ou um traço SPT / GameTraka) importam-se no Semi-Pro e no Pro, o nível do período de teste de 30 dias. A correspondência das colunas é adivinhada a partir de cabeçalhos conhecidos e depois guardada para a equipa. Não há API pública para esvaziar uma conta Opteamal. Escreva-nos para hello@strivn.net se quiser fazer a primeira correspondência connosco.',
          mailto: mail('Migração a partir da Opteamal'),
        },
        {
          q: 'Ainda estou sob contrato. Quando posso mudar?',
          a: 'O pré-aviso, a renovação e o custo de saída estão no contrato com a Opteamal ou a Teamworks. Não os publicamos, e esta página não diz para o romper. Pode criar um espaço STRIVN em paralelo: sem aprovação do clube, sem cartão, com 30 dias de Semi-Pro.',
        },
        {
          q: 'Quanto custa, mesmo?',
          a: costAnswer,
        },
        {
          q: 'O que muda para os jogadores?',
          a: 'Para responder, não instalam nada. Uma ligação por WhatsApp ou e-mail chega para o wellness, o RPE e os lembretes. O envio automático é no Semi-Pro e no Pro. STRIVN Player e STRIVN coach (iOS e Android) existem à parte: são capas à volta da aplicação web, com notificações, e um cronómetro à beira do campo na app do treinador.',
        },
        {
          q: 'E as línguas, para um clube belga?',
          a: 'A STRIVN está em francês, inglês, neerlandês, alemão, português e espanhol, do lado do treinador e do lado do jogador. O francês é o texto de origem. O neerlandês está incluído. As línguas que a Opteamal ainda serve não estão detalhadas aqui: não é público nesta página.',
        },
        {
          q: 'O que é que não encontro?',
          a: 'O módulo médico anunciado pela Teamworks AMS, as certificações ISO 27001 e SOC 2, e as mais de 100 integrações que anunciam. A STRIVN não as reivindica. O diário de lesão, o regresso e a importação de ficheiros são entregues.',
        },
      ],
    },
    finalCta: {
      eyebrow: 'Período de teste Semi-Pro',
      title: 'Crie o espaço e importe o histórico.',
      body: `${b.trialSentence} O contrato Opteamal não se rescinde sozinho: escolhe o momento.`,
      primaryCta: 'Criar o meu espaço',
      secondaryCta: 'Falar da minha migração',
      secondaryHref: mail('Migração a partir da Opteamal'),
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks e Teamworks AMS são marcas dos respetivos titulares. A STRIVN não está afiliada a estas sociedades nem é aprovada por elas. Catapult, STATSports, SPT, GameTraka e WHOOP são marcas dos seus titulares. A importação GPS faz-se por ficheiro; o WHOOP pode pré-preencher o check-in no Semi-Pro e no Pro. A informação sobre a Opteamal e a Teamworks vem de fontes públicas a 15 de outubro de 2026 e pode mudar. Valores de preço da STRIVN: o catálogo em vigor.',
  };
}
