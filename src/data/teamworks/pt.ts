import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** European Portuguese. Ficheiro, equipa, o seu. Translates fr.ts, does not extend it. */
export function ptPage(b: LandingBits): SwitchPage {
  const migration = mail('Passar da Teamworks para o STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'O STRIVN ou a Teamworks',
    meta: {
      title: 'Alternativa à Teamworks: o STRIVN, a IA que lê os jogadores',
      description: `O STRIVN ou a Teamworks? Um assistente que lê carga, GPS e enfermaria, um conector Claude e ChatGPT, preços públicos. ${b.trialPerk}.`,
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
      secondaryCta: 'Comparar com a Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Porquê o STRIVN',
      title: 'Ponha a IA a trabalhar nos seus dados.',
      lede: 'Uma equipa técnica profissional escolhe a ferramenta pelo que ela faz com os dados do clube. Oito razões para escolher o STRIVN.',
      items: [
        {
          title: 'Interrogue todos os seus dados numa só pergunta',
          body: 'O assistente lê a carga, o wellness, o GPS, a enfermaria e os jogos em conjunto, com mais de 200 ferramentas. Cada resposta cita as suas fontes. Uma pergunta guardada volta a correr sobre os números do dia.',
        },
        {
          title: 'Valide cada ação que a IA prepara',
          body: 'Uma sessão a acrescentar ao plano, uma lesão a atualizar, um 1RM a registar: o assistente prepara a ação num cartão. Ela aplica-se com o seu acordo, e fica com 60 segundos para cancelar.',
        },
        {
          title: 'Ligue o Claude ou o ChatGPT aos seus dados',
          body: 'O proprietário da equipa ativa o conector, e a sua IA lê o plantel, a carga, o GPS e os jogos com os seus direitos. Nunca escreve aos jogadores, aos pais nem ao público. Revoga o acesso nas definições.',
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
    compare: {
      id: 'comparatif',
      eyebrow: 'O STRIVN ou a Teamworks',
      title: 'Compare o STRIVN e a Teamworks, linha a linha.',
      lede: 'Seis pontos em que a Teamworks publica a sua resposta, face ao que o STRIVN entrega hoje.',
      columns: {
        criterion: 'Critério',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Assistente de IA',
          teamworks: 'O Ask Teamworks responde a perguntas feitas sobre um documento PDF: regulamento, guia, manual.',
          strivn:
            'O assistente lê a carga, o wellness, o GPS, a enfermaria e os jogos, cita as suas fontes e prepara ações que a equipa técnica valida.',
        },
        {
          criterion: 'Os seus dados na sua IA',
          teamworks: 'Uma API para integrar o Teamworks AMS nas suas ferramentas técnicas.',
          strivn: 'Um conector para o Claude e o ChatGPT, ativado e revogável pela equipa técnica, com os seus direitos.',
        },
        {
          criterion: 'Para quem',
          teamworks: 'Mais de 6500 organizações desportivas de elite.',
          strivn: 'A equipa técnica de um clube, do regional ao profissional: 141 equipas, das quais 14 profissionais.',
        },
        {
          criterion: 'Preço',
          teamworks: 'Sob orçamento, depois de uma demonstração.',
          strivn: `Afixados na página: ${b.publicPrices}.`,
        },
        {
          criterion: 'Arranque',
          teamworks: 'Pedido de demonstração à equipa comercial.',
          strivn: `A equipa técnica cria a conta sozinha, sem aprovação do clube. ${b.trialSentence}`,
        },
        {
          criterion: 'Clubes Opteamal',
          teamworks: 'Passagem anunciada para a plataforma Teamworks desde a compra de 18 de dezembro de 2025.',
          strivn: 'Histórico importado por ficheiro, enquanto o seu contrato decorre.',
        },
      ],
      note: 'Fontes: teamworks.com (páginas AMS e Performance), blogue da Teamworks de 5 de agosto de 2026 sobre o Ask Teamworks, comunicado de 18 de dezembro de 2025, a 15 de outubro de 2026. Números do STRIVN a 18 de setembro de 2026.',
    },
    switch: {
      id: 'changer',
      eyebrow: 'Mudar',
      title: 'Abra o STRIVN enquanto o seu contrato decorre.',
      lede: `O pré-aviso consta do seu contrato Teamworks ou Opteamal. Abra o STRIVN em paralelo e teste-o durante ${b.trialDays} dias nas suas próprias sessões.`,
      steps: [
        {
          n: '01',
          title: 'Crie o espaço',
          body: `Nome, e-mail, telefone, palavra-passe, língua e país bastam. A conta arranca no Semi-Pro durante ${b.trialDays} dias, sem cartão.`,
        },
        {
          n: '02',
          title: 'Importe o histórico',
          body: 'Deposite os seus CSV ou XLSX de carga, de RPE e de wellness, e depois as suas exportações GPS. As colunas são reconhecidas e depois memorizadas para a equipa.',
        },
        {
          n: '03',
          title: 'Faça a sua primeira pergunta',
          body: 'Pergunte ao assistente a carga da semana ou os jogadores a vigiar. Ele responde sobre o seu histórico importado, com as fontes à vista.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'As suas perguntas antes de sair da Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Os meus dados continuam a ser meus?',
          a: 'Sim. Lê-os no STRIVN ou a partir da sua própria IA, pelo conector que ativa e revoga. Exporta as presenças em CSV, o calendário em ICS, os quadros táticos e as apresentações em PDF. Se descer para o Free, todo o seu histórico continua consultável.',
        },
        {
          q: 'A IA pode agir sem o meu acordo?',
          a: 'No STRIVN, cada ação preparada pelo assistente aguarda a sua validação. Pelo conector, o Claude ou o ChatGPT agem com os seus direitos, como um membro da equipa técnica, sem nunca escrever aos jogadores, aos pais nem ao público, nem mexer nas convocatórias.',
        },
        {
          q: 'Posso recuperar o meu histórico da Teamworks ou do Opteamal?',
          a: `Sim, por ficheiro. Exporte a carga, o RPE e o wellness em CSV ou XLSX e deposite-os no STRIVN. As exportações GPS importam-se ${b.gpsTiers}, portanto durante o teste de ${b.trialDays} dias. Para a primeira correspondência, escreva-nos para hello@strivn.net.`,
          mailto: migration,
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
      title: 'Crie o espaço e faça a primeira pergunta.',
      body: `Importe o seu histórico e depois interrogue-o. ${b.trialSentence} A sua equipa técnica junta-se a si quando vê os seus primeiros relatórios.`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Falar com o Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks e Opteamal são marcas dos respetivos titulares. O STRIVN não é afiliado a estas empresas nem aprovado por elas. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka e WHOOP são marcas dos respetivos titulares. As informações sobre a Teamworks e o Opteamal provêm de fontes públicas a 15 de outubro de 2026.',
  };
}
