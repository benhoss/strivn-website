import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** European Portuguese. Ficheiro, equipa, o seu. Translates fr.ts, does not extend it. */
export function ptPage(b: LandingBits): SwitchPage {
  const migration = mail('Migração a partir do Opteamal');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'Passar do Opteamal para o STRIVN',
    meta: {
      title: 'Alternativa ao Opteamal: o STRIVN, com o seu histórico',
      description: `A Teamworks comprou o Opteamal em dezembro de 2025. Passe para o STRIVN: preços públicos, ${b.trialPerk}, em português, francês e neerlandês.`,
      ogTitle: 'Está no Opteamal? Passe para o STRIVN com o seu histórico.',
      ogDescription: `Preços públicos, conta aberta pela equipa técnica, ${b.trialPerk}. Importe os seus ficheiros de carga e de GPS enquanto o seu contrato decorre.`,
      twitterTitle: 'Passar do Opteamal para o STRIVN',
      twitterDescription: `Preços públicos, ${b.trialPerk}, histórico importado por ficheiro.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, a torre de controlo da equipa de performance',
    },
    hero: {
      eyebrow: 'O Opteamal junta-se à Teamworks',
      titleLead: 'Está no Opteamal?',
      title: 'Passe para o STRIVN com o seu histórico.',
      lede: `A Teamworks comprou o Opteamal a 18 de dezembro de 2025. Abra um espaço STRIVN, importe os seus ficheiros de carga e de GPS e compare nas suas próprias sessões durante ${b.trialDays} dias.`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Ver a comparação',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'Comparação',
      title: 'Compare o preço, o acesso e o roteiro.',
      lede: 'Três pontos em que o Opteamal, a Teamworks e o STRIVN publicam cada um a sua resposta. O resto avalia-se nas suas próprias sessões.',
      columns: {
        criterion: 'Critério',
        opteamal: 'Opteamal, na Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: 'Preço',
          opteamal: 'Sob consulta.',
          strivn: `Afixados na página: ${b.publicPrices}.`,
        },
        {
          criterion: 'Abertura da conta',
          opteamal: 'A pedido, através da equipa comercial.',
          strivn: `A equipa técnica cria a conta sozinha, sem aprovação do clube. ${b.trialSentence}`,
        },
        {
          criterion: 'Roteiro',
          opteamal: 'Decidido na Teamworks desde a compra de 18 de dezembro de 2025, migração incluída.',
          strivn:
            'Decidido pelo STRIVN, editor independente. Anunciamos cada novidade por e-mail aos treinadores.',
        },
      ],
      note: 'Fontes: comunicado da Teamworks de 18 de dezembro de 2025 e páginas públicas da Teamworks e do Opteamal, a 15 de outubro de 2026.',
    },
    reasons: {
      id: 'au-quotidien',
      eyebrow: 'No dia a dia',
      title: 'Mantenha o acompanhamento que já faz.',
      lede: 'Seis tarefas que a sua equipa técnica faz todas as semanas, e a forma como o STRIVN as assume.',
      items: [
        {
          title: 'Envie o check-in por WhatsApp',
          body: 'O jogador recebe um link por WhatsApp ou e-mail e responde sem instalar nenhuma aplicação. Indica fadiga, sono, humor e stress, e depois o seu RPE após a sessão. O envio automático está no Semi-Pro e no Pro. Lê as respostas antes do treino.',
        },
        {
          title: 'Conduza a sessão a partir da linha lateral',
          body: 'Presenças, cronómetro por bloco, equipas e resultado cabem no telemóvel. Sem rede, o telemóvel guarda um registo e sincroniza-o no regresso. Sem duração introduzida, o STRIVN calcula a carga com base no tempo realmente jogado.',
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
          title: 'Trabalhe em francês ou em neerlandês',
          body: 'O STRIVN existe em seis línguas: francês, neerlandês, inglês, alemão, português e espanhol. Cada membro da equipa técnica escolhe a sua ao abrir a conta.',
        },
        {
          title: 'Dê a cada membro da equipa técnica o seu papel',
          body: 'Nove papéis, do treinador principal ao fisioterapeuta e ao analista, cada um com os seus direitos. No Semi-Pro e no Pro, o número de membros da equipa técnica é ilimitado.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Mudar',
      title: 'Abra o STRIVN enquanto o seu contrato decorre.',
      lede: `O pré-aviso consta do seu contrato Opteamal. Abra o STRIVN em paralelo e compare nas suas próprias sessões durante ${b.trialDays} dias.`,
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
    stay: {
      id: 'rester',
      eyebrow: 'Ficar',
      title: 'Fique na Teamworks em dois casos.',
      lede: 'Escolha a ferramenta que cobre o seu departamento. Se uma destas duas necessidades for central para si, a Teamworks AMS responde-lhe hoje.',
      items: [
        {
          title: 'Os seus sensores têm de chegar em direto',
          body: `A Teamworks AMS anuncia mais de 100 integrações. O STRIVN importa os seus ficheiros GPS após a sessão, ${b.gpsTiers}.`,
        },
        {
          title: 'O seu departamento médico segue protocolos',
          body: 'A Teamworks AMS anuncia um módulo médico. O STRIVN mantém o registo de lesões, o plano de regresso ao jogo e as sessões de recondicionamento.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'As suas perguntas antes de sair do Opteamal.',
      email: 'hello@strivn.net',
      items: [
        {
          q: 'Posso recuperar o meu histórico do Opteamal?',
          a: `Sim, por ficheiro. Exporte a carga, o RPE e o wellness em CSV ou XLSX e deposite-os no STRIVN. As exportações GPS importam-se ${b.gpsTiers}, portanto durante o teste de ${b.trialDays} dias. As colunas são reconhecidas pelos cabeçalhos e depois memorizadas para a equipa. Para a primeira correspondência, escreva-nos para hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Ainda estou com contrato. Quando posso mudar?',
          a: `O pré-aviso e a data de renovação constam do seu contrato Opteamal ou Teamworks. Abra o STRIVN em paralelo, sem aprovação do clube e sem cartão, com ${b.trialDays} dias de Semi-Pro. Rescinde na data que lhe convier.`,
        },
        {
          q: 'Quanto custa o STRIVN?',
          a: `Os preços são públicos: ${b.publicPrices}. ${b.trialSentence} Começa sem cartão bancário.`,
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
      title: 'Crie o seu espaço e importe o seu histórico.',
      body: `${b.trialSentence} A sua equipa técnica junta-se a si quando vê os seus primeiros relatórios.`,
      primaryCta: 'Criar o meu espaço gratuitamente',
      secondaryCta: 'Falar com o Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Opteamal, Teamworks e Teamworks AMS são marcas dos respetivos titulares. O STRIVN não é afiliado a estas empresas nem aprovado por elas. Catapult, STATSports, SPT, GameTraka e WHOOP são marcas dos respetivos titulares. As informações sobre o Opteamal e a Teamworks provêm de fontes públicas a 15 de outubro de 2026.',
  };
}
