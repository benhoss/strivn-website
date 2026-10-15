import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** European Portuguese. Ficheiro, equipa, o seu. Translates fr.ts, does not extend it. */
export function ptPage(b: LandingBits): SwitchPage {
  const migration = mail('Passar da Teamworks para o STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'O STRIVN ou a Teamworks',
    meta: {
      title: 'Alternativa à Teamworks: o STRIVN, para a sua equipa técnica',
      description: `O STRIVN ou a Teamworks? Preços públicos, conta aberta online, ${b.trialPerk}, em seis línguas. Clubes Opteamal bem-vindos.`,
      ogTitle: 'Está na Teamworks? Passe ao STRIVN, concebido para a sua equipa técnica.',
      ogDescription: `A Teamworks equipa mais de 6500 organizações de elite, mediante demonstração. O STRIVN afixa os seus preços e abre-se online: ${b.trialPerk}.`,
      twitterTitle: 'O STRIVN ou a Teamworks: passe para o STRIVN.',
      twitterDescription: `Preços públicos, conta aberta online, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, a torre de controlo da equipa de performance',
    },
    hero: {
      eyebrow: 'O STRIVN ou a Teamworks',
      titleLead: 'Está na Teamworks?',
      title: 'Passe ao STRIVN, concebido para a sua equipa técnica.',
      lede: `A Teamworks equipa mais de 6500 organizações desportivas de elite, mediante demonstração e orçamento. O STRIVN é concebido para a equipa técnica de um clube: preços públicos, conta aberta online, ${b.trialDays} dias de Semi-Pro para comparar nas suas sessões.`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Comparar com a Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'O STRIVN ou a Teamworks',
      title: 'Compare o STRIVN e a Teamworks, linha a linha.',
      lede: 'Cinco pontos em que a Teamworks publica a sua resposta, face ao que o STRIVN entrega. O resto avalia-se nas suas próprias sessões.',
      columns: {
        criterion: 'Critério',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
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
          criterion: 'Roteiro',
          teamworks: 'Decidido em Durham, nos Estados Unidos, para 6500 organizações.',
          strivn:
            'Decidido pelo STRIVN, editor independente. Anunciamos cada novidade por e-mail aos treinadores.',
        },
        {
          criterion: 'Clubes Opteamal',
          teamworks: 'Passagem anunciada para a plataforma Teamworks desde a compra de 18 de dezembro de 2025.',
          strivn: 'Histórico importado por ficheiro, enquanto o seu contrato decorre.',
        },
      ],
      note: 'Fontes: teamworks.com e comunicado da Teamworks de 18 de dezembro de 2025, a 15 de outubro de 2026. Números do STRIVN a 18 de setembro de 2026.',
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Porquê o STRIVN',
      title: 'Leia o estado de cada jogador antes da sessão.',
      lede: 'A Teamworks cobre o recrutamento, as operações e a performance das organizações de elite. O STRIVN concentra-se na semana da sua equipa técnica. Sete razões para o escolher.',
      items: [
        {
          title: 'Envie o check-in por WhatsApp',
          body: 'O jogador recebe um link por WhatsApp ou e-mail e responde sem instalar nenhuma aplicação. Indica fadiga, sono, humor e stress, e depois o seu RPE após a sessão. O envio automático está no Semi-Pro e no Pro. Lê as respostas antes do treino.',
        },
        {
          title: 'Planeie a semana em UA',
          body: 'Defina o objetivo, acompanhe o previsto contra o realizado e ajuste jogador a jogador. O STRIVN calcula o ACWR a 7 e 28 dias e coloca cada jogador num de três estados.',
        },
        {
          title: 'Importe a exportação GPS, seja qual for o sensor',
          body: `Deposite o CSV ou o XLSX da Catapult, da STATSports ou de outro sistema, ou o traço SPT / GameTraka. As colunas são reconhecidas na primeira importação e depois memorizadas. Importação ${b.gpsTiers}.`,
        },
        {
          title: 'Conduza a sessão a partir da linha lateral',
          body: 'Presenças, cronómetro por bloco, equipas e resultado cabem no telemóvel. Sem rede, o telemóvel guarda um registo e sincroniza-o no regresso. Sem duração introduzida, o STRIVN calcula a carga com base no tempo realmente jogado.',
        },
        {
          title: 'Trabalhe em francês ou em neerlandês',
          body: 'O STRIVN existe em seis línguas: francês, neerlandês, inglês, alemão, português e espanhol. Cada membro da equipa técnica escolhe a sua ao abrir a conta.',
        },
        {
          title: 'Dê a cada membro da equipa técnica o seu papel',
          body: 'Nove papéis, do treinador principal ao fisioterapeuta e ao analista, cada um com os seus direitos. No Semi-Pro e no Pro, o número de membros da equipa técnica é ilimitado.',
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
          title: 'Convide a equipa técnica',
          body: 'Atribua um papel a cada pessoa, com os seus direitos. O Free conta um lugar, o Amateur dois, o Semi-Pro e o Pro um número ilimitado.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'As suas perguntas antes de sair da Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Posso recuperar o meu histórico da Teamworks ou do Opteamal?',
          a: `Sim, por ficheiro. Exporte a carga, o RPE e o wellness em CSV ou XLSX e deposite-os no STRIVN. As exportações GPS importam-se ${b.gpsTiers}, portanto durante o teste de ${b.trialDays} dias. As colunas são reconhecidas pelos cabeçalhos e depois memorizadas para a equipa. Para a primeira correspondência, escreva-nos para hello@strivn.net.`,
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
          a: `Os preços são públicos: ${b.publicPrices}. ${b.trialSentence} Começa sem cartão bancário.`,
        },
        {
          q: 'O STRIVN lê os dados do meu GPS?',
          a: `Sim, pela exportação da sessão. Deposite o CSV ou o XLSX da Catapult, da STATSports ou de outro sistema, ou o traço SPT / GameTraka. O STRIVN reconhece as colunas na primeira importação e calcula a distância e as zonas de velocidade sobre o traço bruto. Importação ${b.gpsTiers}.`,
        },
        {
          q: 'O que muda para os jogadores?',
          a: 'Respondem ao check-in por um link de WhatsApp ou e-mail, sem instalar nenhuma aplicação. O envio automático da manhã e da noite está no Semi-Pro e no Pro. As apps STRIVN Player e STRIVN Coach, em iOS e Android, acrescentam as notificações.',
        },
        {
          q: 'O STRIVN funciona em neerlandês?',
          a: 'Sim. O STRIVN existe em francês, neerlandês, inglês, alemão, português e espanhol, para a equipa técnica e para os jogadores. Cada membro da equipa técnica escolhe a sua língua ao abrir a conta.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Crie o seu espaço e compare nas suas sessões.',
      body: `Comece hoje, sem demonstração nem orçamento. ${b.trialSentence} A sua equipa técnica junta-se a si quando vê os seus primeiros relatórios.`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Falar com o Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS e Opteamal são marcas dos respetivos titulares. O STRIVN não é afiliado a estas empresas nem aprovado por elas. Catapult, STATSports, SPT, GameTraka e WHOOP são marcas dos respetivos titulares. As informações sobre a Teamworks e o Opteamal provêm de fontes públicas a 15 de outubro de 2026.',
  };
}
