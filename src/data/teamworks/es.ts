import { mail } from './bits';
import type { LandingBits, SwitchPage } from './types';

/** Spanish of the pricing page: usted. Translates fr.ts, does not extend it. */
export function esPage(b: LandingBits): SwitchPage {
  const transfer = mail('Transferencia de mis datos de Teamworks');
  const perks = [b.trialPerk, 'Transferencia de Teamworks incluida', 'Abierto a la IA que usted elija'];

  return {
    gpsNote: b.gpsFiles,
    crumb: 'STRIVN o Teamworks',
    meta: {
      title: 'Alternativa a Teamworks: STRIVN, la IA que lee su plantilla',
      description: `¿STRIVN o Teamworks? La IA que lee carga, GPS y enfermería, abierta a Claude y ChatGPT. ${b.trialDays} días de prueba y transferencia de datos gratis.`,
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
      secondaryCta: 'Planificar mi transferencia',
      secondaryHref: transfer,
      perks,
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
      open: {
        title: 'Mantenga STRIVN abierto, de la importación a su IA.',
        body: 'STRIVN lee el archivo de cualquier sensor o herramienta, y se abre a la IA que usted elija mediante MCP, el protocolo abierto de los asistentes de IA. Las asistencias salen en CSV, el calendario en ICS, las pizarras y las presentaciones en PDF.',
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
          criterion: "Apertura",
          teamworks: "Una API para integrar Teamworks AMS.",
          strivn: "El protocolo abierto MCP: Claude, ChatGPT o la IA que usted elija.",
        },
        {
          criterion: "Puesta en marcha",
          teamworks: "Tras una demostración comercial.",
          strivn: `Hoy, en línea: ${b.trialDays} días de prueba y transferencia de sus datos gratis.`,
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
          title: 'Conecte la IA que usted elija a sus datos',
          body: 'STRIVN habla MCP, el protocolo abierto de los asistentes de IA. El propietario del equipo lo activa, y Claude, ChatGPT o cualquier cliente compatible leen la plantilla, la carga, el GPS y los partidos con sus permisos. Nunca escriben a jugadores, padres ni al público, y usted revoca el acceso desde los ajustes.',
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
      lede: `El preaviso figura en su contrato con Teamworks u Opteamal. Pruebe STRIVN ${b.trialDays} días con sus sesiones, y transferimos sus datos con usted, sin coste.`,
      steps: [
        {
          n: '01',
          title: 'Cree el espacio',
          body: `Nombre, e-mail, teléfono, contraseña, idioma y país bastan. La cuenta arranca en Semi-Pro durante ${b.trialDays} días, sin tarjeta.`,
        },
        {
          n: '02',
          title: 'Transfiera sus datos de Teamworks',
          body: 'Envíenos sus exportaciones de Teamworks u Opteamal. Preparamos con usted la correspondencia de columnas y la importación de la carga, el wellness y el GPS.',
        },
        {
          n: '03',
          title: 'Haga su primera pregunta',
          body: 'Pregunte al asistente por la carga de la semana o por los jugadores a vigilar. Responde sobre su historial importado, con las fuentes a la vista.',
        },
      ],
      offer: {
        tag: 'Clubes de Teamworks',
        title: `${b.trialDays} días de prueba y la transferencia de sus datos, gratis.`,
        body: 'Retomamos con usted sus exportaciones de Teamworks, verificamos la correspondencia de columnas e importamos su historial mientras prueba STRIVN con sus sesiones.',
        cta: 'Planificar mi transferencia',
        href: transfer,
      },
    },
    faq: {
      label: 'FAQ',
      title: 'Sus preguntas antes de dejar Teamworks.',
      email: 'hello@strivn.net',
      items: [
        {
          q: '¿STRIVN es realmente abierto?',
          a: 'Sí. Sus datos entran por archivo, sea cual sea el sensor o la herramienta de origen. Salen hacia la IA que usted elija mediante MCP, el protocolo abierto de los asistentes de IA, y se exportan en CSV, ICS o PDF según la pantalla. El conector se activa y se revoca desde los ajustes del equipo.',
        },
        {
          q: '¿Mis datos siguen siendo míos?',
          a: 'Sí. Los consulta en STRIVN o desde su propia IA. Si vuelve al plan Free, todo su historial sigue consultable, y conserva la exportación y la eliminación de lo que le pertenece.',
        },
        {
          q: '¿Puede la IA actuar sin mi aprobación?',
          a: 'En STRIVN, cada acción preparada por el asistente espera su validación. A través del conector, Claude o ChatGPT actúan con sus permisos, como un miembro del staff, sin escribir nunca a jugadores, padres ni al público, ni tocar las convocatorias.',
        },
        {
          q: '¿Quién transfiere mis datos de Teamworks u Opteamal?',
          a: `Nosotros, con usted, sin coste. Envíenos sus exportaciones en CSV o XLSX: preparamos la correspondencia de columnas y la importación de la carga, el RPE, el wellness y el GPS durante sus ${b.trialDays} días de prueba. Escríbanos a hello@strivn.net.`,
          mailto: transfer,
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
      title: `Pruebe STRIVN ${b.trialDays} días, transferencia de datos incluida.`,
      body: `Transferimos sus datos de Teamworks con usted, y después usted consulta su historial. ${b.trialSentence}`,
      primaryCta: 'Crear mi espacio gratis',
      secondaryCta: 'Hablar con Benoit',
      secondaryHref: transfer,
      fine: perks,
    },
    disclaimer:
      'Teamworks, Teamworks AMS, Ask Teamworks y Opteamal son marcas de sus titulares. STRIVN no está afiliado a estas empresas ni cuenta con su aprobación. Claude, ChatGPT, Catapult, STATSports, SPT, GameTraka y WHOOP son marcas de sus titulares. La información sobre Teamworks y Opteamal procede de fuentes públicas a 15 de octubre de 2026.',
  };
}
