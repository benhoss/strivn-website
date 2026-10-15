import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. Translates fr.ts, does not extend it. */
export function esPage(b: LandingBits): SwitchPage {
  const migration = mail('Pasar de Teamworks a STRIVN');

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN o Teamworks',
    meta: {
      title: 'Alternativa a Teamworks: STRIVN, la IA que lee su plantilla',
      description: `¿STRIVN o Teamworks? Un asistente que lee carga, GPS y enfermería, un conector Claude y ChatGPT, precios públicos. ${b.trialPerk}.`,
      ogTitle: '¿Usa Teamworks? Pase a STRIVN, la IA que lee a sus jugadores.',
      ogDescription:
        'El asistente de STRIVN lee la carga, el wellness, el GPS, la enfermería y los partidos, y prepara las acciones que su staff valida.',
      twitterTitle: 'STRIVN o Teamworks: la IA que lee a sus jugadores.',
      twitterDescription: `Un asistente sobre todos sus datos, un conector Claude y ChatGPT, ${b.trialPerk}.`,
      ogImage: '/og.png',
      ogImageAlt: 'STRIVN, la torre de control del staff de rendimiento',
    },
    hero: {
      eyebrow: 'STRIVN o Teamworks',
      titleLead: '¿Usa Teamworks?',
      title: 'Pase a STRIVN, la IA que lee a sus jugadores.',
      lede: 'Ask Teamworks responde a las preguntas sobre sus documentos. El asistente de STRIVN lee la carga, el wellness, el GPS, la enfermería y los partidos de cada jugador, y prepara las acciones que su staff valida.',
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Comparar con Teamworks',
      secondaryHref: '#comparatif',
      perks: b.perks,
    },
    showcase: {
      assistant: {
        title: "Interrogue todos sus datos en una sola pregunta.",
        body: "Ask Teamworks lee el PDF que usted abre. El asistente de STRIVN lee la carga, el wellness, el GPS y la enfermería juntos, cita sus fuentes y fija cada gráfico en sus dashboards.",
      },
      readiness: {
        title: "Valide lo que propone la IA antes de entrenar.",
        body: "El check-in al despertar alimenta la readiness de cada jugador. STRIVN muestra por qué un jugador pasa a Aliviar y propone la sesión ajustada. Usted aplica o modifica, en un gesto.",
      },
    },
    compare: {
      id: 'comparatif',
      eyebrow: 'STRIVN o Teamworks',
      title: "Compare lo que la IA hace por su staff.",
      lede: "Cinco líneas. Las fuentes están bajo la tabla.",
      columns: {
        criterion: 'Criterio',
        teamworks: 'Teamworks',
        strivn: 'STRIVN',
      },
      rows: [
        {
          criterion: "Lo que lee la IA",
          teamworks: "El PDF que usted abre.",
          strivn: "Carga, wellness, GPS, enfermería y partidos, juntos.",
        },
        {
          criterion: "Lo que devuelve la IA",
          teamworks: "Una respuesta citada.",
          strivn: "Una respuesta con fuentes, y la acción lista para validar.",
        },
        {
          criterion: "Su propia IA",
          teamworks: "Una API para integrar Teamworks AMS.",
          strivn: "Claude y ChatGPT, conectados a sus datos.",
        },
        {
          criterion: "Puesta en marcha",
          teamworks: "Tras una demostración comercial.",
          strivn: `Hoy, en línea, con ${b.trialPerk}.`,
        },
        {
          criterion: "Precio",
          teamworks: "Bajo presupuesto.",
          strivn: "En la página, desde 0 € al mes.",
        },
      ],
      note: "Fuentes: teamworks.com (páginas AMS y Performance), blog de Teamworks del 5 de agosto de 2026 sobre Ask Teamworks, a 15 de octubre de 2026.",
    },
    reasons: {
      id: 'pourquoi-strivn',
      eyebrow: 'Por qué STRIVN',
      title: "Equipe a todo el staff, del analista al fisio.",
      lede: "Seis razones más para elegir STRIVN.",
      items: [
        {
          title: 'Conecte Claude o ChatGPT a sus datos',
          body: 'El propietario del equipo activa el conector, y su IA lee la plantilla, la carga, el GPS y los partidos con sus permisos. Nunca escribe a jugadores, padres ni al público. Usted revoca el acceso desde los ajustes.',
        },
        {
          title: 'Prepare al rival entre varios',
          body: 'El analista anota, graba y dibuja bajo cada rival. Fotografíe la hoja del partido: la IA extrae a los jugadores, que solo entran en la plantilla rival cuando usted lo confirma. Después se genera el informe, del dosier de scouting a la charla.',
        },
        {
          title: 'Controle la carga hasta el ejercicio',
          body: 'El RPE da la carga interna y la exportación GPS la carga externa, frente a frente. ACWR, monotonía y tensión se calculan solos, la previsión proyecta la semana y cada ejercicio conserva su medida GPS.',
        },
        {
          title: 'Filtre las convocatorias desde la enfermería',
          body: 'El panel médico reúne las lesiones activas, los jugadores en readaptación y la disponibilidad de cada uno. Filtra por sí solo las convocatorias, y el jugador sigue su programa de vuelta al juego en su app.',
        },
        {
          title: 'Dicte el debrief del partido',
          body: 'Hable después del partido: STRIVN da forma a su debrief. Usted lo relee y después lo aplica.',
        },
        {
          title: 'Hable con quien construye STRIVN',
          body: 'El botón «Hablar con Benoit» abre un e-mail a quien construye STRIVN. Describa su staff y su herramienta actual, y le responderemos.',
        },
      ],
    },
    switch: {
      id: 'changer',
      eyebrow: 'Cambiar',
      title: 'Abra STRIVN mientras su contrato sigue vigente.',
      lede: `El preaviso figura en su contrato con Teamworks u Opteamal. Abra STRIVN en paralelo y pruébelo ${b.trialDays} días con sus propias sesiones.`,
      steps: [
        {
          n: '01',
          title: 'Cree el espacio',
          body: `Nombre, e-mail, teléfono, contraseña, idioma y país bastan. La cuenta arranca en Semi-Pro durante ${b.trialDays} días, sin tarjeta.`,
        },
        {
          n: '02',
          title: 'Importe el historial',
          body: 'Suba sus CSV o XLSX de carga, de RPE y de wellness, y después sus exportaciones GPS. Las columnas se reconocen y quedan memorizadas para el equipo.',
        },
        {
          n: '03',
          title: 'Haga su primera pregunta',
          body: 'Pregunte al asistente por la carga de la semana o por los jugadores a vigilar. Responde sobre su historial importado, con las fuentes a la vista.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Sus preguntas antes de dejar Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿Mis datos siguen siendo míos?',
          a: 'Sí. Los consulta en STRIVN o desde su propia IA, mediante el conector que usted activa y revoca. Exporta las asistencias en CSV, el calendario en ICS, las pizarras tácticas y las presentaciones en PDF. Si vuelve al plan Free, todo su historial sigue consultable.',
        },
        {
          q: '¿Puede la IA actuar sin mi aprobación?',
          a: 'En STRIVN, cada acción preparada por el asistente espera su validación. A través del conector, Claude o ChatGPT actúan con sus permisos, como un miembro del staff, sin escribir nunca a jugadores, padres ni al público, ni tocar las convocatorias.',
        },
        {
          q: '¿Puedo recuperar mi historial de Teamworks u Opteamal?',
          a: `Sí, por archivo. Exporte la carga, el RPE y el wellness en CSV o XLSX y súbalos a STRIVN. Las exportaciones GPS se importan ${b.gpsTiers}, es decir, durante la prueba de ${b.trialDays} días. Para la primera correspondencia, escríbanos a hello@strivn.net.`,
          mailto: migration,
        },
        {
          q: 'Todavía tengo contrato. ¿Cuándo puedo cambiar?',
          a: `El preaviso y la fecha de renovación figuran en su contrato. Abra STRIVN en paralelo, sin aprobación del club y sin tarjeta, con ${b.trialDays} días de Semi-Pro. Usted rescinde en la fecha que le convenga.`,
        },
        {
          q: 'Usaba Opteamal. ¿Qué cambia con la compra de Teamworks?',
          a: 'Teamworks compró Opteamal el 18 de diciembre de 2025 y anuncia que pasará sus clubes a su propia plataforma. Si cambia de herramienta, cambie una sola vez: importe su historial en STRIVN mientras su contrato sigue vigente.',
        },
        {
          q: '¿Cuánto cuesta STRIVN?',
          a: `Los precios son públicos: ${b.publicPrices}. ${b.trialSentence} El Pro, bajo presupuesto, fija por contrato los volúmenes de IA y de WhatsApp.`,
        },
        {
          q: '¿STRIVN lee los datos de mi GPS?',
          a: `Sí, a partir de la exportación de la sesión. Suba el CSV o el XLSX de Catapult, de STATSports o de otro sistema, o la traza SPT / GameTraka. STRIVN reconoce las columnas en la primera importación y calcula la distancia y las zonas de velocidad sobre la traza en bruto. Importación ${b.gpsTiers}.`,
        },
        {
          q: '¿STRIVN funciona en español?',
          a: 'Sí. STRIVN existe en español, francés, neerlandés, inglés, alemán y portugués, para el staff y para los jugadores. Cada miembro del staff elige su idioma al abrir su cuenta.',
        },
      ],
    },
    finalCta: {
      eyebrow: b.trialPerk,
      title: 'Cree su espacio y haga su primera pregunta.',
      body: `Importe su historial y después consúltelo. ${b.trialSentence} Su staff se une cuando ve sus primeros informes.`,
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Hablar con Benoit',
      secondaryHref: migration,
      fine: b.perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks y Opteamal son marcas de sus titulares. STRIVN no está afiliado a estas empresas ni cuenta con su aprobación. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La información sobre Teamworks y Opteamal procede de fuentes públicas a 15 de octubre de 2026.',
  };
}
